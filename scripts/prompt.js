// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

const tokenAddress = "0xFFDC77894c932aaf8ca4C3eF87230AcA0dFA61B5"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x64d6BE676D4A0FE53F0C37Cb865b4901F0A84C48"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for(let i=0; i<5; i++)
    {
        const desc =await token.promptDescription(i)
        console.log("TokenID- "+ i+  ": " + desc );
    }
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
