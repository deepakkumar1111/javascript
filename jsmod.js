const NFTs = [];

function mintNFT(name, type, value, color) {
    const newNFT = {
        name: name,
        type: type,
        value: value,
        color: color,
    };
    NFTs.push(newNFT);
    console.log(`Successfully minted NFT: ${name}\n`);
}

function listNFTs() {
    console.log("Listing NFT metadata:");
    NFTs.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Type: ${nft.type}`);
        console.log(`Value: ${nft.value}`);
        console.log(`Color: ${nft.color}\n`);
    });
}

function getTotalSupply() {
    console.log(`Total number of minted NFTs: ${NFTs.length}`);
}

// Mint some NFTs
mintNFT("Digital Art", "Exclusive", 500, "Multicolor");
mintNFT("CryptoPunk", "Limited", 10000, "Pixelated");
mintNFT("Virtual Land", "Common", 250, "Green");
mintNFT("Collectible Card", "For All", 50, "Blue");

// List all minted NFTs
listNFTs();

// Print the total number of minted NFTs
getTotalSupply();
# javascript
