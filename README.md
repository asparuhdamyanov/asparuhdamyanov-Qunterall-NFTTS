Hello, welcome to NFTTS.
This is a simple website designed to mint and do basic operations with NFTokens(NFTs).
Each mint results in increasing the price with 1%(e.g. after 100 mints price is increased with 100%).
Metadata can be viewed and NFTs can be sold and traded on OpenSea.
The NFT is a Utility Pass and has no custom build rarity or placeholder.

Hosted on a free hosting website:
https://metacowboys.000webhostapp.com/

Currently hosted on Rinkeby network.
To view assets your NFT on Test Nets: (https://testnets.opensea.io/)

To add Mint funds or Rinkeby you can use: 

Rinkeby: Authenticated Faucet
https://faucet.rinkeby.io


Faucets | Chainlink
https://faucets.chain.link

or other any other Rinkeby faucets. :)

To install the dependencies needed to start the project locally use these commands:

npm i -D hardhat
npm i @openzeppelin/contracts
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm i -D @nomiclabs/hardhat-etherscan

deploy with hardhat:

npx run scripts/deployNFTTS.json --network rinkeby

verify the contract: 

npx hardhat verify --network rinkeby PASTE_CONTRACT_ADDRESS_HERE

hardhat: https://hardhat.org/ 
infura: https://infura.io/ 
etherscan: https://etherscan.io/ 
node: https://nodejs.org/en/download/
chakra ui: https://chakra-ui.com/docs/getting-st...
