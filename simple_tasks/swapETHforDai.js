const { ChainId, Fetcher, Token, WETH, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk')
const Web3 = require('web3')

const web3 = new Web3('https://ropsten.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469')

const init = async() => {
    const myAddress = '0x6a77b47e29d86a4a2012202410d43a8e3ac2d1da'
    const myPrivateKey = '0x' + '8c2cd153823c22f7304d9960a32e25d28676f720ecb0d1892ab772cb0e9759a6'
    const chainId = ChainId.ROPSTEN
    const DAI = new Token(chainId, '0xaD6D458402F60fD3Bd25163575031ACDce07538D', 18)
    const path = [WETH[DAI.chainId].address, DAI.address]
    const deadline = Math.floor(Date.now() / 1000) + 60 * 3
    const UniswapV2Router02 = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" // https://uniswap.org/docs/v2/smart-contracts/router02/
    
    // https://uniswap.org/docs/v2/smart-contracts/router02/#abi
    const abi = [{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"}]
    
    const uniswap = await new web3.eth.Contract(abi, '0xaD6D458402F60fD3Bd25163575031ACDce07538D')  // Contract of DAI token - checksumed address
    const ammountOutMin = web3.utils.toWei('0.2', 'ether')
    const value = web3.utils.toWei('0.1', 'ether')
    const gasPrice = web3.utils.toWei('4', 'gwei')

    // create transaction
    const tx = {
        from: myAddress,
        to: UniswapV2Router02,
        gasLimit: 800000,
        gasPrice: gasPrice,
        value: value,
        data: uniswap.methods.swapExactETHForTokens(ammountOutMin, path, myAddress, deadline).encodeABI()
    }

    // sign transaction
    const signPromise = web3.eth.accounts.signTransaction(tx, myPrivateKey)
    
    // send signed transaction
    signPromise.then(signedTx => {
        const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction, (err, res) => {
            console.log('err: ', err, '\nres: ', res)
        })
    })
}

init()