const { Token } = require('@uniswap/sdk')

const ChainId = {
  MAINNET: 56,
  TESTNET: 97
}

const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e', 18, 'WBNB', 'Wrapped BNB')
}

/// Constants for BSC Testnet
const PancakeFactoryTest = '0x6725F303b657a9451d8BA641348b6761A6CC7a17'         // Pancake Factory Test
const PancakeRouterTest = '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3'          // Pancake Router Test

const TokenAddressWBNBTest = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'       // Token Address WBNB Test


/// Constants for BSC Mainnet
const PancakeFactory = '0xBCfCcbde45cE874adCB698cC183deBcF17952812'         // Pancake Factory
const PancakeRouterV2 = '0x10ED43C718714eb63d5aA57B78B54704E256024E'        // Pancake Router V2

const TokenAddressWBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'       // Token Address WBNB

module.exports = {
  /// 
  ChainId,
  WETH,

  /// Mainnet
  PancakeFactory,
  PancakeRouterV2,
  TokenAddressWBNB,

  /// Testnet
  PancakeFactoryTest,
  PancakeRouterTest,
  TokenAddressWBNBTest
}