var Tx = require('ethereumjs-tx').Transaction
var Web3 = require('web3')

// ETH network
const url = 'https://ropsten.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469'
var web3 = new Web3(url)

account1 = '0x6A77B47E29D86a4A2012202410d43a8E3aC2d1Da'
const privateKey1 = Buffer.from('8c2cd153823c22f7304d9960a32e25d28676f720ecb0d1892ab772cb0e9759a6', 'hex')

const contractABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"internalType":"bool","name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
// const contractAddress = ''

web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Smart contract data
    // write contract on http://remix.ethereum.org, then get data at WEB3DEPLOY
    const data = '0x608060405261271060015534801561001657600080fd5b506001546000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103028061006b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806318160ddd1461004657806390b98a1114610064578063f8b2cb4f146100ca575b600080fd5b61004e610122565b6040518082815260200191505060405180910390f35b6100b06004803603604081101561007a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061012c565b604051808215151515815260200191505060405180910390f35b61010c600480360360208110156100e057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610285565b6040518082815260200191505060405180910390f35b6000600154905090565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561017d576000905061027f565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea265627a7a72315820d696b89a8edc3f9afd44cdff93e120b0580bcfd55628910318854addcc43eb9e64736f6c634300050e0032'

    // Create transaction object
    const txObj = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(1000000),    // Raise this
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: data
    }


    // Sign the transaction
    // const tx = new Tx(txObj) --->>> errors
    const tx = new Tx(txObj, {chain:'ropsten', hardfork: 'petersburg'})
    tx.sign(privateKey1)

    const serializeTx = tx.serialize()
    const raw = '0x' + serializeTx.toString('hex')

    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('err: ', err, 'txHash: ', txHash)
        // Use this txHash to find the contract on Etherscan
    })
})