const tdr = require('truffle-deploy-registry')

const DaoDelianApp = artifacts.require('DaoDelianApp')
const DaoDelianRegistry = artifacts.require('DaoDelianRegistry')

const ARTIFACTS = [
  DaoDelianApp,
  DaoDelianRegistry
]

module.exports = (deployer, network) => {
  deployer.then(async () => {
    for (const artifact of ARTIFACTS) {
      const instance = await deployer.deploy(artifact)
      if (!tdr.isDryRunNetworkName(network)) {
        await tdr.appendInstance(instance)
      }
    }
  })
}