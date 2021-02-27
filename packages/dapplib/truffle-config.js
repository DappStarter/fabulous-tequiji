require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind million imitate prize fold stadium'; 
let testAccounts = [
"0xd805c858dde82252dffbf426ab36fca2fea121b5ebaf8fef2a5988e0a9e1882b",
"0x51cb3b743a7d4065c08a5ea94e2b55cf4aa59645ab8f3f46b9d06b7c40828506",
"0xe4813dc2d21d71ba12e0728b81c45c0302bd384711e79c735df84297d72783da",
"0x31ef2ca559297dee9aac117911e6b9cee0f4281461972574de9f0a1c3f27b378",
"0xa6a57667774088e9414e7476dedd1ed128b0c52873721f1c27eb865aaea267ce",
"0x81b9046d0bd75815313f1a14e16a461e098bfe719b555c425198b2be493e70b6",
"0xff89b975674add638a4181acb83a83896abac64b74548e2cf8b9c3a2e1094a00",
"0x94bee6ba5823e782d21ba60e720c0606596e22a5f987643dcf68278881a22acb",
"0xe74f34ee9111d43881ab33e445165a3b19638f7dc26b06fdcfd847a11b1bcc2c",
"0x7f7ab276e347bce915fe12301ee8a2d6099c1eb05e8f98a373d907f6436b327f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
