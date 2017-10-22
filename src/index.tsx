import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Web3 from 'web3';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3.eth.accounts);
let browser_ballot_sol_healthcareContract = web3
  .eth
  .contract([
    {
      "constant": false,
      "inputs": [],
      "name": "getData",
      "outputs": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]);

browser_ballot_sol_healthcareContract.new({
  from: web3.eth.accounts[0],
  data: '0x6060604052341561000f57600080fd5b6101578061001e6000396000f300606060405260043610' +
      '610041576000357c0100000000000000000000000000000000000000000000000000000000900463' +
      'ffffffff1680633bc5de3014610046575b600080fd5b341561005157600080fd5b6100596100d456' +
      '5b6040518080602001828103825283818151815260200191508051906020019080838360005b8381' +
      '101561009957808201518184015260208101905061007e565b50505050905090810190601f168015' +
      '6100c65780820380516001836020036101000a031916815260200191505b50925050506040518091' +
      '0390f35b6100dc610117565b6040805190810160405280600a81526020017f676f6f676c652e636f' +
      '6d00000000000000000000000000000000000000000000815250905090565b602060405190810160' +
      '4052806000815250905600a165627a7a7230582098f507025a793ff11da310efdc632a2c3696dbc7' +
      'c7224bb2592f26d61b8f06b40029',
  gas: '4700000'
}, function (e, contract) {

  if (typeof contract.address !== 'undefined') {
    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
  }

  console.log(contract);

});

ReactDOM.render(
  <App/>, document.getElementById('root') as HTMLElement);
registerServiceWorker();
