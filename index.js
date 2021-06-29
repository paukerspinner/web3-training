var Tx = require('ethereumjs-tx').Transaction
var Web3 = require('web3')

// ETH network
const url = 'https://ropsten.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469'
var web3 = new Web3(url)

const init = async() => {
    await web3.eth.accounts.wallet.add('0x8c2cd153823c22f7304d9960a32e25d28676f720ecb0d1892ab772cb0e9759a6');

    var metacoinContract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"internalType":"bool","name":"sufficient","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]);

   
    var tx = metacoinContract.deploy({
        data: '0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f4d657461436f696e0000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d5443000000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009692919062000236565b508060049080519060200190620000af92919062000236565b505050620000c6336103e8620000cc60201b60201c565b62000492565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200013f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000136906200031e565b60405180910390fd5b62000153600083836200023160201b60201c565b80600260008282546200016791906200036e565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001be91906200036e565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000225919062000340565b60405180910390a35050565b505050565b8280546200024490620003d5565b90600052602060002090601f016020900481019282620002685760008555620002b4565b82601f106200028357805160ff1916838001178555620002b4565b82800160010185558215620002b4579182015b82811115620002b357825182559160200191906001019062000296565b5b509050620002c39190620002c7565b5090565b5b80821115620002e2576000816000905550600101620002c8565b5090565b6000620002f5601f836200035d565b9150620003028262000469565b602082019050919050565b6200031881620003cb565b82525050565b600060208201905081810360008301526200033981620002e6565b9050919050565b60006020820190506200035760008301846200030d565b92915050565b600082825260208201905092915050565b60006200037b82620003cb565b91506200038883620003cb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620003c057620003bf6200040b565b5b828201905092915050565b6000819050919050565b60006002820490506001821680620003ee57607f821691505b602082108114156200040557620004046200043a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61162680620004a26000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d71461023c578063a9059cbb1461026c578063dd62ed3e1461029c578063f8b2cb4f146102cc576100cf565b806370a08231146101be57806390b98a11146101ee57806395d89b411461021e576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102fc565b6040516100e9919061108d565b60405180910390f35b61010c60048036038101906101079190610ed7565b61038e565b6040516101199190611072565b60405180910390f35b61012a6103ac565b604051610137919061118f565b60405180910390f35b61015a60048036038101906101559190610e84565b6103b6565b6040516101679190611072565b60405180910390f35b6101786104b7565b60405161018591906111aa565b60405180910390f35b6101a860048036038101906101a39190610ed7565b6104c0565b6040516101b59190611072565b60405180910390f35b6101d860048036038101906101d39190610e17565b61056c565b6040516101e5919061118f565b60405180910390f35b61020860048036038101906102039190610ed7565b6105b4565b6040516102159190611072565b60405180910390f35b610226610722565b604051610233919061108d565b60405180910390f35b61025660048036038101906102519190610ed7565b6107b4565b6040516102639190611072565b60405180910390f35b61028660048036038101906102819190610ed7565b6108a8565b6040516102939190611072565b60405180910390f35b6102b660048036038101906102b19190610e44565b6108c6565b6040516102c3919061118f565b60405180910390f35b6102e660048036038101906102e19190610e17565b61094d565b6040516102f3919061118f565b60405180910390f35b60606003805461030b906112f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610337906112f3565b80156103845780601f1061035957610100808354040283529160200191610384565b820191906000526020600020905b81548152906001019060200180831161036757829003601f168201915b5050505050905090565b60006103a261039b610996565b848461099e565b6001905092915050565b6000600254905090565b60006103c3848484610b69565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061040e610996565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561048e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104859061110f565b60405180910390fd5b6104ab8561049a610996565b85846104a69190611237565b61099e565b60019150509392505050565b60006012905090565b60006105626104cd610996565b8484600160006104db610996565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461055d91906111e1565b61099e565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610606576000905061071c565b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106559190611237565b9250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106ab91906111e1565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161070f919061118f565b60405180910390a3600190505b92915050565b606060048054610731906112f3565b80601f016020809104026020016040519081016040528092919081815260200182805461075d906112f3565b80156107aa5780601f1061077f576101008083540402835291602001916107aa565b820191906000526020600020905b81548152906001019060200180831161078d57829003601f168201915b5050505050905090565b600080600160006107c3610996565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610880576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108779061116f565b60405180910390fd5b61089d61088b610996565b8585846108989190611237565b61099e565b600191505092915050565b60006108bc6108b5610996565b8484610b69565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a059061114f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a75906110cf565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b5c919061118f565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd09061112f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c40906110af565b60405180910390fd5b610c54838383610de8565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610cda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd1906110ef565b60405180910390fd5b8181610ce69190611237565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d7691906111e1565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610dda919061118f565b60405180910390a350505050565b505050565b600081359050610dfc816115c2565b92915050565b600081359050610e11816115d9565b92915050565b600060208284031215610e2d57610e2c611383565b5b6000610e3b84828501610ded565b91505092915050565b60008060408385031215610e5b57610e5a611383565b5b6000610e6985828601610ded565b9250506020610e7a85828601610ded565b9150509250929050565b600080600060608486031215610e9d57610e9c611383565b5b6000610eab86828701610ded565b9350506020610ebc86828701610ded565b9250506040610ecd86828701610e02565b9150509250925092565b60008060408385031215610eee57610eed611383565b5b6000610efc85828601610ded565b9250506020610f0d85828601610e02565b9150509250929050565b610f208161127d565b82525050565b6000610f31826111c5565b610f3b81856111d0565b9350610f4b8185602086016112c0565b610f5481611388565b840191505092915050565b6000610f6c6023836111d0565b9150610f7782611399565b604082019050919050565b6000610f8f6022836111d0565b9150610f9a826113e8565b604082019050919050565b6000610fb26026836111d0565b9150610fbd82611437565b604082019050919050565b6000610fd56028836111d0565b9150610fe082611486565b604082019050919050565b6000610ff86025836111d0565b9150611003826114d5565b604082019050919050565b600061101b6024836111d0565b915061102682611524565b604082019050919050565b600061103e6025836111d0565b915061104982611573565b604082019050919050565b61105d816112a9565b82525050565b61106c816112b3565b82525050565b60006020820190506110876000830184610f17565b92915050565b600060208201905081810360008301526110a78184610f26565b905092915050565b600060208201905081810360008301526110c881610f5f565b9050919050565b600060208201905081810360008301526110e881610f82565b9050919050565b6000602082019050818103600083015261110881610fa5565b9050919050565b6000602082019050818103600083015261112881610fc8565b9050919050565b6000602082019050818103600083015261114881610feb565b9050919050565b600060208201905081810360008301526111688161100e565b9050919050565b6000602082019050818103600083015261118881611031565b9050919050565b60006020820190506111a46000830184611054565b92915050565b60006020820190506111bf6000830184611063565b92915050565b600081519050919050565b600082825260208201905092915050565b60006111ec826112a9565b91506111f7836112a9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561122c5761122b611325565b5b828201905092915050565b6000611242826112a9565b915061124d836112a9565b9250828210156112605761125f611325565b5b828203905092915050565b600061127682611289565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156112de5780820151818401526020810190506112c3565b838111156112ed576000848401525b50505050565b6000600282049050600182168061130b57607f821691505b6020821081141561131f5761131e611354565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6115cb8161126b565b81146115d657600080fd5b50565b6115e2816112a9565b81146115ed57600080fd5b5056fea2646970667358221220ca189ab041003d5ac3e6be60e9056508cabfc71ac0eebae1bc147688fa75787864736f6c63430008060033', 
        arguments: []
    })

    var signedTx = await web3.eth.accounts.signTransaction(
        {
            from: web3.eth.accounts.wallet[0].address,
            data: tx.encodeABI(),
            gas: '4700000'
        },
        web3.eth.accounts.wallet[0].privateKey
    )

    const createdReceipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
    )
    console.log(createdReceipt.contractAddress)
}


init()
