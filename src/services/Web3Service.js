import isEmpty from 'lodash/isEmpty';

export const fetchNetwork = () => {
  return new Promise((resolve, reject) => {
    const { web3 } = window;

    web3 && web3.version && web3.version.getNetwork((err, netId) => {
      if (err) {
        reject(err);
      } else {
        resolve(netId);
      }
    });
  });
};

export const fetchAccounts = ()  => {
  return new Promise((resolve, reject) => {
    const { web3 } = window;
    const ethAccounts = getAccounts();

    if (isEmpty(ethAccounts)) {

      web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(accounts);
          resolve(accounts);
        }
      });
    } else {
      resolve(ethAccounts);
    }
  });
};

function getAccounts() {
  try {
    const { web3 } = window;
    //const accounts = [];

    //web3.eth.getAccounts().then(function(acc){ accounts = acc })
    
    // throws if no account selected

    //return web3.eth.accounts;

    //return accounts;

    window.ethereum.request({ method: 'eth_requestAccounts'})
    .then(result => {
    
      console.log(result[0]);
    
      //this.setState({defaultAccount: result[0]});
      return result;
    })
    .catch(error => {
      console.log(error.message);
    });


  } catch (e) {
      console.log(e)
      return [];
  }
}