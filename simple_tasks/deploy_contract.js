var Tx = require('ethereumjs-tx').Transaction
var Web3 = require('web3')

// ETH network
const url = 'https://ropsten.infura.io/v3/84bb3fe31baf4378b2c0ae65c4ba8469'
var web3 = new Web3(url)

const init = async() => {
    await web3.eth.accounts.wallet.add('0x8c2cd153823c22f7304d9960a32e25d28676f720ecb0d1892ab772cb0e9759a6');

    var metacoinContract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]);




   
    var tx = metacoinContract.deploy({
        data: '0x60806040526d04ee2d6d415b85acef81000000006002556040518060400160405280600d81526020017f446f6265726d616e6e436f696e00000000000000000000000000000000000000815250600390805190602001906200006392919062000110565b506040518060400160405280600581526020017f444f42455200000000000000000000000000000000000000000000000000000081525060049080519060200190620000b192919062000110565b506012600555348015620000c457600080fd5b506002546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555062000225565b8280546200011e90620001c0565b90600052602060002090601f0160209004810192826200014257600085556200018e565b82601f106200015d57805160ff19168380011785556200018e565b828001600101855582156200018e579182015b828111156200018d57825182559160200191906001019062000170565b5b5090506200019d9190620001a1565b5090565b5b80821115620001bc576000816000905550600101620001a2565b5090565b60006002820490506001821680620001d957607f821691505b60208210811415620001f057620001ef620001f6565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b610d2d80620002356000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063313ce56711610066578063313ce5671461016f57806370a082311461018d57806395d89b41146101bd578063a9059cbb146101db578063dd62ed3e1461020b5761009e565b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100f157806323b872dd1461010f57806327e235e31461013f575b600080fd5b6100ab61023b565b6040516100b89190610a38565b60405180910390f35b6100db60048036038101906100d69190610944565b6102c9565b6040516100e89190610a1d565b60405180910390f35b6100f96103bb565b6040516101069190610a9a565b60405180910390f35b610129600480360381019061012491906108f5565b6103c1565b6040516101369190610a1d565b60405180910390f35b61015960048036038101906101549190610890565b6105e7565b6040516101669190610a9a565b60405180910390f35b6101776105ff565b6040516101849190610a9a565b60405180910390f35b6101a760048036038101906101a29190610890565b610605565b6040516101b49190610a9a565b60405180910390f35b6101c561064d565b6040516101d29190610a38565b60405180910390f35b6101f560048036038101906101f09190610944565b6106db565b6040516102029190610a1d565b60405180910390f35b610225600480360381019061022091906108b9565b610841565b6040516102329190610a9a565b60405180910390f35b6003805461024890610bd6565b80601f016020809104026020016040519081016040528092919081815260200182805461027490610bd6565b80156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103a99190610a9a565b60405180910390a36001905092915050565b60025481565b6000816103cd85610605565b101561040e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040590610a5a565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156104cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c490610a7a565b60405180910390fd5b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461051b9190610ad1565b92505081905550816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105709190610b27565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105d49190610a9a565b60405180910390a3600190509392505050565b60006020528060005260406000206000915090505481565b60055481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6004805461065a90610bd6565b80601f016020809104026020016040519081016040528092919081815260200182805461068690610bd6565b80156106d35780601f106106a8576101008083540402835291602001916106d3565b820191906000526020600020905b8154815290600101906020018083116106b657829003601f168201915b505050505081565b6000816106e733610605565b1015610728576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071f90610a5a565b60405180910390fd5b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107769190610ad1565b92505081905550816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107cb9190610b27565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161082f9190610a9a565b60405180910390a36001905092915050565b6001602052816000526040600020602052806000526040600020600091509150505481565b60008135905061087581610cc9565b92915050565b60008135905061088a81610ce0565b92915050565b6000602082840312156108a257600080fd5b60006108b084828501610866565b91505092915050565b600080604083850312156108cc57600080fd5b60006108da85828601610866565b92505060206108eb85828601610866565b9150509250929050565b60008060006060848603121561090a57600080fd5b600061091886828701610866565b935050602061092986828701610866565b925050604061093a8682870161087b565b9150509250925092565b6000806040838503121561095757600080fd5b600061096585828601610866565b92505060206109768582860161087b565b9150509250929050565b61098981610b6d565b82525050565b600061099a82610ab5565b6109a48185610ac0565b93506109b4818560208601610ba3565b6109bd81610c66565b840191505092915050565b60006109d5600f83610ac0565b91506109e082610c77565b602082019050919050565b60006109f8601183610ac0565b9150610a0382610ca0565b602082019050919050565b610a1781610b99565b82525050565b6000602082019050610a326000830184610980565b92915050565b60006020820190508181036000830152610a52818461098f565b905092915050565b60006020820190508181036000830152610a73816109c8565b9050919050565b60006020820190508181036000830152610a93816109eb565b9050919050565b6000602082019050610aaf6000830184610a0e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610adc82610b99565b9150610ae783610b99565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b1c57610b1b610c08565b5b828201905092915050565b6000610b3282610b99565b9150610b3d83610b99565b925082821015610b5057610b4f610c08565b5b828203905092915050565b6000610b6682610b79565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610bc1578082015181840152602081019050610ba6565b83811115610bd0576000848401525b50505050565b60006002820490506001821680610bee57607f821691505b60208210811415610c0257610c01610c37565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f62616c616e636520746f6f206c6f770000000000000000000000000000000000600082015250565b7f616c6c6f77616e636520746f6f206c6f77000000000000000000000000000000600082015250565b610cd281610b5b565b8114610cdd57600080fd5b50565b610ce981610b99565b8114610cf457600080fd5b5056fea2646970667358221220414af1d1feda0a827b9591aa4c30741d58a608293185cb888468ad4cd4ca7a0e64736f6c63430008020033', 
        arguments: [
        ]
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
