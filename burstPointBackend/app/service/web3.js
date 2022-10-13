const { Service } = require('egg');
const Web3 = require("web3")
const sapphire = require('@oasisprotocol/sapphire-paratime');
const { ethers } = require("ethers");
const cryptoJs = require("crypto-js")
const base64 = require('crypto-js/enc-base64')
const ContractJson = require('../abi/burstPoint.json')
const Tx = require('ethereumjs-tx').Transaction
const ABI = ContractJson.abi



class Web3Service extends Service {
  async getBlockNum() {
    const web3 = new Web3(this.config.web3Url)
    const latestBlockNumber = await web3.eth.getBlockNumber()
    return latestBlockNumber
  }

  getStartSha256( burstValue, passWord ){
    const web3 = new Web3(this.config.web3Url)
    const re = web3.eth.abi.encodeParameters(['string'], [burstValue.toString() + passWord]);
    return ethers.utils.sha256(re)
  }

  async getBalance(address){
    const web3 = new Web3(this.config.web3Url)
    const wei = await web3.eth.getBalance(address)
    const balance = web3.utils.fromWei(wei, 'ether')
    return balance
  } 

  async getSignedtxString(value, data){
    const web3 = new Web3(this.config.web3Url)
    web3.setProvider(sapphire.wrap(web3.currentProvider));
    const count = await web3.eth.getTransactionCount(this.config.adminAddress)
    const accountNonce = '0x' + ( count).toString(16)
    // const estimateGas = await web3.eth.estimateGas(
    //   {
    //     to: this.config.contractAddress,
    //     from: this.config.adminAddress,
    //     data: data
    //   })
    const rawTx =
    {
        nonce: accountNonce,
        from: this.config.adminAddress,
        to: this.config.contractAddress,
        gas: web3.utils.toHex(4000000),
        value: value,
        data: data
    };
    const account = web3.eth.accounts.privateKeyToAccount(this.config.primaryKey)
    const signedTx = await account.signTransaction(rawTx)
    return signedTx
  }

  async addToContract(amount){
    const customHttpProvider = new ethers.providers.JsonRpcProvider(this.config.web3Url);
    const signer = sapphire.wrap(new ethers.Wallet(this.config.primaryKey, customHttpProvider))
    const contract = new ethers.Contract(this.config.contractAddress, ABI, signer);
    const tx = await contract.ownerAdd({
      value: ethers.utils.parseUnits(amount.toString() ,"ether")
    });
    const receipt = await tx.wait()
    console.log("startGame tx", tx)
    console.log("startGame receipt", receipt)
    // const web3 = new Web3(this.config.web3Url)
    // const contract = new web3.eth.Contract(ABI, this.config.contractAddress)
    // var serializedTx = await this.getSignedtxString(
    //     web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether')),
    //     contract.methods.ownerAdd().encodeABI()
    //     )
    // web3.eth.sendSignedTransaction(serializedTx.rawTransaction)
    // .on('transactionHash',(hash)=>{
    //     console.log('txHash:', hash)
    // }
    // )
    // .on('receipt',(receipt)=>{
    //     //console.log('receipt', receipt)
    // }
    // )
    // .on('error', console.error)


    console.log(serializedTx)
    /*const func = */ //await contract.methods.ownerAdd().send({from:this.config.adminAddress, value: web3.utils.toWei(amount.toString(), 'ether'), gas: 21000})
    //web3.eth.accounts.signTransaction(func, this.config.primaryKey);
    //func
  }

  async startGame(blockNum){
    const customHttpProvider = new ethers.providers.JsonRpcProvider(this.config.web3Url);
    const signer = sapphire.wrap(new ethers.Wallet(this.config.primaryKey, customHttpProvider))
    const contract = new ethers.Contract(this.config.contractAddress, ABI, signer);
    const tx = await contract.beginGame(blockNum);
    const receipt = await tx.wait()
    console.log("startGame tx", tx)
    console.log("startGame receipt", receipt)
    if(receipt && receipt.status == 1){
        await this.service.mysql.insertGameInfo(blockNum, 0,  0)
        const burstValue = await this.getGameBurstValue(blockNum)
        await this.service.mysql.updateGameBurstValue(blockNum, burstValue)
        console.log('test burst Value', burstValue)
    }
    

    // const web3 = new Web3(this.config.web3Url)
    // web3.setProvider(sapphire.wrap(web3.currentProvider));
    // const contract = new web3.eth.Contract(ABI, this.config.contractAddress)
    // var serializedTx = await this.getSignedtxString(
    //     web3.utils.toHex(0),
    //     contract.methods.beginGame(blockNum).encodeABI()
    //     )
    // web3.eth.sendSignedTransaction(serializedTx.rawTransaction)
    // .on('transactionHash',(hash)=>{
    //     console.log('txHash:', hash)
    // }
    // )
    // .on('receipt', async (receipt)=>{
    //     console.log('startGame success' , blockNum)
    //     await this.service.mysql.insertGameInfo(blockNum, 0,  0)
    //     const burstValue = await this.getGameBurstValue(blockNum)
    //     console.log('test burst Value', burstValue)
    // }
    // )
    // .on('error', (error)=>{
    //     console.log('startGame error', error)
    // })
  }

  async closeGame(blockNum){
    const customHttpProvider = new ethers.providers.JsonRpcProvider(this.config.web3Url);
    const signer = sapphire.wrap(new ethers.Wallet(this.config.primaryKey, customHttpProvider))
    const contract = new ethers.Contract(this.config.contractAddress, ABI, signer);
    const tx = await contract.closeGame(blockNum);
    const receipt = await tx.wait()
    console.log("tx", tx)
    console.log("receipt", receipt)
    if(receipt && receipt.status == 1){
        this.service.mysql.endGame(blockNum, receipt.transactionHash)
        this.service.mysql.updateBetHash(blockNum, receipt.transactionHash)
    }

    // const web3 = new Web3(this.config.web3Url)
    // const contract = new web3.eth.Contract(ABI, this.config.contractAddress)
    // var serializedTx = await this.getSignedtxString(
    //     web3.utils.toHex(0),
    //     contract.methods.closeGame(blockNum).encodeABI()
    //     )
    // await web3.eth.sendSignedTransaction(serializedTx.rawTransaction)
    // .on('transactionHash',(hash)=>{
    //     console.log('txHash:', hash)
    // }
    // )
    // .on('receipt',(receipt)=>{
    //     console.log('closeGame success' , blockNum)
    //     this.service.mysql.endGame(blockNum, receipt.transactionHash)
    //     this.service.mysql.updateBetHash(blockNum, receipt.transactionHash)
    // }
    // )
    // .on('error', (error)=>{
    //     console.log('closeGame error', error)
    // })
  }

  async getGameRecord(blockNum){
    const customHttpProvider = new ethers.providers.JsonRpcProvider(this.config.web3Url);
    const signer = sapphire.wrap(new ethers.Wallet(this.config.primaryKey, customHttpProvider))
    const contract = new ethers.Contract(this.config.contractAddress, ABI, signer);
    const re  = await contract.getGameRecords(blockNum)
    return re
  }

  async getGameBurstValue(blockNum){
    const customHttpProvider = new ethers.providers.JsonRpcProvider(this.config.web3Url);
    const signer = sapphire.wrap(new ethers.Wallet(this.config.primaryKey, customHttpProvider))
    const contract = new ethers.Contract(this.config.contractAddress, ABI, signer);
    const re  = await contract.getBurstValue(blockNum)
    return ethers.utils.formatUnits(re, 0)
  }

  async transferToMe(){
    const customHttpProvider = new ethers.providers.JsonRpcProvider(this.config.web3Url);
    const signer = new ethers.Wallet(this.config.primaryKey, customHttpProvider)
    const tx = await signer.sendTransaction(
      {
        to: this.config.adminAddress,
        value: ethers.utils.parseEther("0"),
      }
    )
  }


}

module.exports = Web3Service;