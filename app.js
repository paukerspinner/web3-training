const { Fetcher, Token, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk')
const { ChainId, WETH, PancakeRouterV2, PancakeRouterTest, PancakeFactoryTest, TokenAddressWBNB } = require('./pancakeswap')
const Web3 = require('web3')

// const url = 'https://ropsten.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469'
// const url = 'https://data-seed-prebsc-1-s1.binance.org:8545/'
const url = 'https://bsc-dataseed.binance.org/'


const web3 = new Web3(url)

const tokenAddress = '0x04CF73cf7B8b5883a0b18284225A1F437BEa917F'   // DAI token contract  
// const tokenAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const wethAddress = TokenAddressWBNB   // WETH token contract

const runBot = (tokenAddr, wethAddress) => {
    const abi_getAmountsIn = [{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
    const contract = new web3.eth.Contract(abi_getAmountsIn, PancakeRouterV2)
    path = [wethAddress, tokenAddr]
    const amountOut = web3.utils.toWei('1', 'ether')

    function trackPrice() {
        console.log('Feching...')
        contract.methods.getAmountsIn(amountOut, path).call((err, res) => {
            if (res) {
                console.log(res)
                const price = web3.utils.toBN(res[0]) / web3.utils.toBN(res[1]) // web3.utils.fromWei(res[0], 'ether')
            
                const currentTime = new Date(); console.log(currentTime.toLocaleTimeString(), price)
                // console.log(price)
                clearInterval(runTrackPrice)
                if (!isSentTx) {
                    // trade(tokenAddr, wethAddress)
                    isSentTx = true
                }
            } else {
                const currentTime = new Date(); console.log(currentTime.toLocaleTimeString(), 'Fail...')
                // console.log('Fail...')
                console.log(err)
            }
        })
    }
    var isSentTx = false
    var runTrackPrice = setInterval(trackPrice, 1000)
}

const trade = async(tokenAddr, wethAddress) => {
    const abiSwapETHForExactTokens = [{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"}]
    const amountOut = web3.utils.toWei('2', 'ether')
    const path = [wethAddress, tokenAddr]
    const myAddress = '0x6A77B47E29D86a4A2012202410d43a8E3aC2d1Da'
    const deadline = Math.floor(Date.now() / 1000) + 60 * 1
    const contract = new web3.eth.Contract(abiSwapETHForExactTokens, PancakeRouterTest)

    data = contract.methods.swapETHForExactTokens(
        amountOut,
        path,
        myAddress,
        deadline
    ).encodeABI()

    const myPrivateKey = '0x' + '8c2cd153823c22f7304d9960a32e25d28676f720ecb0d1892ab772cb0e9759a6'
    const gasPrice = web3.utils.toWei('20', 'gwei')
    const value = web3.utils.toWei('0.5', 'ether')
    const tx = {
        from: myAddress,
        to: PancakeRouterTest,
        gasLimit: 300000,
        gasPrice: gasPrice,
        value: value,
        data: data
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

runBot(tokenAddress, wethAddress)