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
//import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { Web3Provider } from './components/Web3/Web3Provider';
import "./App.css";

class App extends React.Component{
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     });
    //   }
      
    //   setCurrentUser(userAuth)
      
    // })
  }

  async componentWillMount() {
    //await this.loadWeb3()
    //await this.loadBlockchainData()
  }

  componentWillUnmount(){
    //this.unsubscribeFromAuth()
  }

  // async loadBlockchainData() {
  //   const web3 = window.web3

  //   const accounts = await web3.eth.getAccounts()
  //   //this.setState({ account: accounts[0] })

  //   setCurrentUser({
  //     account: accounts[0]
  //   })
  // }

  // async loadWeb3() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum)
  //     await window.ethereum.enable()
  //   }
  //   else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider)
  //   }
  //   else {
  //     window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  //   }
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     account: '0x0',
  //     loading: true
  //   }
  // }

  render(){
    return (
      <div>
        {/* <Header account={this.state.account} /> */}
        <Header />
        {/* <Web3Provider /> */}
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

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// }) 

// const mapDispatchToProps = dispatch =>({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
