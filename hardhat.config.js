require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const { QUICKNODE_HTTP_URL, GOERLI_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
