require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-truffle5");

const defaultNetwork = "mumbai";

const { INFURA_KEY, MNEMONIC } = require('./src/secrets.json');

module.exports = {
  defaultNetwork,
  networks: {
    localhost: {
      url: "http://localhost:8545",
      /*
        No mnemonic here. It will just use account 0 of the hardhat node to deploy.
        (Can put in a mnemonic here to set the deployer locally)
      */
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    xdai: {
      url: 'https://rpc.xdaichain.com/',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: MNEMONIC,
      },
    }, 
    mumbai: {
      url: 'https://rpc-mumbai.matic.today',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com/',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
  solidity: {
    version: "0.6.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
