const { ChainId, WETH, Fetcher, Token, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk')
const Web3 = require('web3')

const url = 'https://ropsten.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469'
const web3 = new Web3(url)

const tokenAddress_1 = '0xaD6D458402F60fD3Bd25163575031ACDce07538D'   // DAI token contract  
const tokenAddress_2 = '0xc778417E063141139Fce010982780140Aa0cD5Ab'   // WETH token contract
const UniswapV2Factory = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f' // https://uniswap.org/docs/v2/smart-contracts/factory/

const init = async() => {
    const getPairABI = [{"constant":true,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]
    const uniswap = await new web3.eth.Contract(getPairABI, UniswapV2Factory)
    function checkPair() {
        console.log(uniswap.methods.getPair(tokenAddress_1, tokenAddress_2).call((err, res) => {
            console.log(res)
        }))
    }
    for (let index = 0; index < 100; index++) {
        setTimeout(checkPair, index * 100)
    }
}

init()