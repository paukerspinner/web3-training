const { Fetcher, Token, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk')
const { ChainId, WETH, PancakeRouterV2, PancakeRouterTest, PancakeFactoryTest } = require('../pancakeswap')
const Web3 = require('web3')

// const url = 'https://ropsten.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469'
const url = 'https://data-seed-prebsc-1-s1.binance.org:8545/'
// const url = 'https://bsc-dataseed.binance.org/'


const web3 = new Web3(url)

const tokenAddress_1 = '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7'   // DAI token contract  
const tokenAddress_2 = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'   // WETH token contract

const init = async() => {
    const abi_getAmountsIn = [{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"}]
    const contract = new web3.eth.Contract(abi_getAmountsIn, PancakeRouterTest)
    path = [tokenAddress_1, tokenAddress_2]
    const amountOut = web3.utils.toWei('1', 'ether')

    function trackPrice() {
        console.log('Feching...')
        contract.methods.getAmountsIn(amountOut, path).call((err, res) => {
            if (res) {
                const price = Math.round(web3.utils.fromWei(res[0], 'ether')*100)/100
                console.log(price)
                clearInterval(runTrackPrice)
            } else {
                console.log(err)
            }
        })
    }

    var runTrackPrice = setInterval(trackPrice, 100)
}

init()