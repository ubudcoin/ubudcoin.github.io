import classes from './build/classes.json';
import Web3 from 'web3';

// var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Now you can start your app & access web3 freely:
  app();

});


function app() {
  var Coin = web3.eth.contract(JSON.parse(classes.UbudCoin.interface));

  var coin = Coin.at('0x3bd562bc1733f8e7b68ef8a95442c79b09e8e5e0')

  var address = web3.eth.coinbase;
  document.getElementById("address").innerText = address;

  coin.balances(address, (err, res) => {
    document.getElementById("balance").innerText = res.toString(10);
  });

  document.getElementById("sendBtn").addEventListener('click', () => {
    var to = document.getElementById("to").value
    var value = document.getElementById("value").value
    coin.send(to, value, {
      from: web3.eth.coinbase
    }, (err, txHash) => {
      if(err) {
        alert(err)
      } else {
        alert(`Send: ${txHash}`)
      }
    });
  });

}
