const { ethers } = require("hardhat")

const networkConfig = {
    default: {
        name: "hardhat",
        keepersUpdateInterval: "30",
    },

    5: {
        name: "goerli",
        vrfCoordinatorV2: "0x2ca8e0c643bde4c2e08ab1fa0da3401adad7734d",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        subscriptionId: "6879",
        callbackGasLimit: "500000",
        interval: "10",
    },

    31337: {
        name: "localhost",
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        callbackGasLimit: "500000",
        interval: "20",
    },
}
const developmentChains = ["hardhat", "localhost"]

const CRYPTODEVSTOKEN_CONTRACT_ADDRESS = "0x1F25511b4ea7FC64E3BFb1cC816d7E4F469AC68d"
module.exports = {
    networkConfig,
    developmentChains,
    CRYPTODEVSTOKEN_CONTRACT_ADDRESS,
}
