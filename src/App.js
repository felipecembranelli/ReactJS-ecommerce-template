import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import UserDetailPage from './pages/user-detail/user-detail.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'

import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import Web3 from 'web3';
import "./App.css";

class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      
      setCurrentUser(userAuth)
      
    })
  }

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    //const networkId = await web3.eth.net.getId()

    // Load DaiToken
    // const daiTokenData = DaiToken.networks[networkId]
    // if(daiTokenData) {
    //   const daiToken = new web3.eth.Contract(DaiToken.abi, daiTokenData.address)
    //   this.setState({ daiToken })
    //   let daiTokenBalance = await daiToken.methods.balanceOf(this.state.account).call()
    //   this.setState({ daiTokenBalance: daiTokenBalance.toString() })
    // } else {
    //   window.alert('DaiToken contract not deployed to detected network.')
    // }

    // // Load Pyxis token
    // const pyxisTokenData = PyxisToken.networks[networkId]
    // if(pyxisTokenData) {
    //   const pyxisToken = new web3.eth.Contract(PyxisToken.abi, pyxisTokenData.address)
    //   this.setState({ pyxisToken })
    //   let pyxisTokenBalance = await pyxisToken.methods.balanceOf(this.state.account).call()
    //   this.setState({ pyxisTokenBalance: pyxisTokenBalance.toString() })
    // } else {
    //   window.alert('Pyxis Token contract not deployed to detected network.')
    // }


    // // Load DappToken
    // const dappTokenData = DappToken.networks[networkId]
    // if(dappTokenData) {
    //   const dappToken = new web3.eth.Contract(DappToken.abi, dappTokenData.address)
    //   this.setState({ dappToken })
    //   let dappTokenBalance = await dappToken.methods.balanceOf(this.state.account).call()
    //   this.setState({ dappTokenBalance: dappTokenBalance.toString() })
    // } else {
    //   window.alert('DappToken contract not deployed to detected network.')
    // }

    // // Load TokenFarm
    // const tokenFarmData = TokenFarm.networks[networkId]
    // if(tokenFarmData) {
    //   const tokenFarm = new web3.eth.Contract(TokenFarm.abi, tokenFarmData.address)
    //   this.setState({ tokenFarm })
    //   let stakingBalance = await tokenFarm.methods.stakingBalance(this.state.account).call()
    //   this.setState({ stakingBalance: stakingBalance.toString() })
    // } else {
    //   window.alert('TokenFarm contract not deployed to detected network.')
    // }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      loading: true
    }
  }

  render(){
    return (
      <div>
        <Header account={this.state.account} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/user-detail' component={UserDetailPage} />
          {/* <Route 
          exact
          path="/signin" 
          render={() => 
            this.props.currentUser ? (

              <Redirect to='/' />
              ) : (
                <SignInAndSignUp/>
                )
              } 
            /> */}
        </Switch>
      </div>
    )
  }  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
}) 

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
