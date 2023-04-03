const { CRYPTODEVSTOKEN_CONTRACT_ADDRESS } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [CRYPTODEVSTOKEN_CONTRACT_ADDRESS]

    await deploy("Exchange", {
        from: deployer,
        log: true,
        args: args,
    })
    log("Exchange Deployed!")
    log("-----------------------------------------------")
}

module.exports.tags = ["all", "Exchange"]
