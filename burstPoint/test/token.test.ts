import { AbiCoder } from "@ethersproject/abi";
import { sha256 } from "@ethersproject/sha2";
import {encodeParameters} from "./utilities/index"
import { advanceBlockTo } from "./utilities";
import { ethers } from "hardhat";
import { expect } from "chai";


describe("Sapp Test contract", function() {
  it("Deployment should assign the total supply of tokens to the owner", async function() {
    const [owner, addr1] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("contracts/BurstPointSapp.sol:BurstPoint");

    const hardhatToken = await Token.deploy();
    await hardhatToken.deployed();

    const ownerBalance = await hardhatToken.totalBalance();
    console.log(ownerBalance);
    
    await hardhatToken.ownerAdd({value: 400})

    var ownerBalance1 = await hardhatToken.totalBalance();
    console.log(ownerBalance1);

    // const shaRe = await hardhatToken.testSha("300test");
    // console.log(shaRe);

    // const strRe = await hardhatToken.testStr(100, "test");
    // console.log(strRe);
    let nowBlockNumber =  await ethers.provider.getBlockNumber()
    console.log("block number", await ethers.provider.getBlockNumber())

    await hardhatToken.beginGame(nowBlockNumber);


    await hardhatToken.connect(addr1).bet(nowBlockNumber, 200, {value: 100});

    await advanceBlockTo(nowBlockNumber + 50);

    await hardhatToken.connect(addr1).escape(nowBlockNumber);


    ownerBalance1 = await hardhatToken.totalBalance();
    console.log(ownerBalance1);

    const addr1blance1 = await ethers.provider.getBalance(addr1.address);
    console.log(addr1blance1);

    await advanceBlockTo(nowBlockNumber + 111);

    await hardhatToken.closeGame(nowBlockNumber);

    const ownerBalance2 = await hardhatToken.totalBalance();
    console.log(ownerBalance2);

    const addr1blance = await ethers.provider.getBalance(addr1.address);
    console.log(addr1blance);

    const aaa = await hardhatToken.getGameRecords(nowBlockNumber);
    console.log(aaa);

    //expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});

