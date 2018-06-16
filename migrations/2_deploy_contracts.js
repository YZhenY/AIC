var AkombaInternCoin = artifacts.require("./AkombaInternCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(AkombaInternCoin, 1000);
};
