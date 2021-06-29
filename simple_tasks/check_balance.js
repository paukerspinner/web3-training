var Web3 = require('web3')

// local network
// url = 'HTTP://127.0.0.1:7545'

// ETH network
url = 'https://mainnet.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469'

var web3 = new Web3(url)

var address = '0x503828976d22510aad0201ac7ec88293211d23da'

web3.eth.getBalance(address, (err, bal) => {
    balance = web3.utils.fromWei(bal, 'ether')
    console.log(balance)
})