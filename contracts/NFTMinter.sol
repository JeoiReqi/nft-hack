//SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.7.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// For testing the curve
contract NFTMinter is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(bytes32 => uint256) public uriToTokenId;

    constructor() public ERC721("Curve NFT", "CNFT") {
        _setBaseURI("https://ipfs.io/ipfs/");
    }

    function mintItem(address to, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        bytes32 uriHash = keccak256(abi.encodePacked(tokenURI));
        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _mint(to, id); // to curvenft
        _setTokenURI(id, tokenURI);

		uriToTokenId[uriHash] = id;

        return id;
    }

    function exists(uint256 id) public view returns (bool) {
        _exists(id);
    }
}