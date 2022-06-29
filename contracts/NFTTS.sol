// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTTS is ERC721, Ownable {
    uint public mintPrice;
    uint public totalSupply;
    uint public maxSupply; // max collection supply
    uint public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('NFTTS', "TTS") {
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        //set withdraw wallet address
    }

    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner {
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        require(_exists(_tokenId), "Token does not exist!");
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), ".json"));
    }

    function withdraw(address _withdrawWallet) external onlyOwner {
        _withdrawWallet = withdrawWallet;
        (bool success, ) = withdrawWallet.call{value: address(this).balance}('');
        require(success, 'withdraw failed');
    }

    function mint(uint _quantity) public payable {
        require(isPublicMintEnabled, "minting not enabled");
        require(msg.value == _quantity * mintPrice, "wrong mint value");
        require(totalSupply + _quantity <= maxSupply, "sold out");
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, "exceed max wallet");

        for(uint i = 0; i < _quantity; i++) {
            uint newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
            mintPrice += (mintPrice / 100);
        }
    }
}
