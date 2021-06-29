const { Fetcher, Token, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk')

const { ChainId, WETH } = require('./pancakeswap')

const { JsonRpcProvider } = require('@ethersproject/providers')

// const provider = new JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545')
const url = 'https://bsc-dataseed.binance.org/'
const provider = new JsonRpcProvider(url)
const Web3 = require('web3')

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')

const tokenAddress = '0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3'

const init = async() => {
    const chainId = 56
    const dai = await Fetcher.fetchTokenData(
        chainId,
        tokenAddress,
        provider
    )
    // const weth = await Fetcher.fetchTokenData(
    //     chainId,
    //     '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    //     provider
    // )
    const weth = WETH[chainId]
    console.log(dai, weth)

    const pair = await Fetcher.fetchPairData(dai, weth, provider)
    console.log(pair)


    /*
    const myAddress = '0x6a77b47e29d86a4a2012202410d43a8e3ac2d1da'
    const myPrivateKey = '0x' + '8c2cd153823c22f7304d9960a32e25d28676f720ecb0d1892ab772cb0e9759a6'
    const DAI = new Token(chainId, tokenAddress, 18)

    const path = ['0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', tokenAddress]
    const deadline = Math.floor(Date.now() / 1000) + 60 * 3
    const UniswapV2Router02 = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3" // https://uniswap.org/docs/v2/smart-contracts/router02/
    
    // https://uniswap.org/docs/v2/smart-contracts/router02/#abi
    const abi = [{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"}]
    
    const uniswap = await new web3.eth.Contract(abi, tokenAddress)  // Contract of DAI token - checksumed address
    const ammountOutMin = web3.utils.toWei('0.2', 'ether')
    const value = web3.utils.toWei('0.1', 'ether')
    const gasPrice = web3.utils.toWei('10', 'gwei')

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
    */
}

init()