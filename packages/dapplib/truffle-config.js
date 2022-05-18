require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad imitate problem swear solve'; 
let testAccounts = [
"0x6d9a24e2842f4e98929c3c3d3b2924cb0ba9fb45664d5954e9069663cb8376f5",
"0xc00f67a3ffa79688a25a2578b57099cdceea00a4cf0495efa3d3cc216194ef46",
"0x759d9c2115a7c38db5e271fbf097836d7130471f6fb7e67674911179a308a872",
"0x6f3b57ecc457df1c41cae336efba02efdf0e71a33ddc4f74b8bdef0bdd1b087c",
"0x4e62df19d044e81887e93874278df22e3ee277c9c1dcbc2cbb1de37b4dd1d7e1",
"0xe1edb2c3ee58910e6aefdb46b025b43c45317901f9d6c9c1761910efac8a138f",
"0x75257a49d8428d260859d76a10da0ee2afb7299990f9226ca337fa8ea079d7df",
"0xe3a9c0fc2d6d21f216031813ebd8ed3a66a588511dc4f2abd3241a45133a0adc",
"0xf87d20b21aae740e9b43963dc59baa77b973ba48d4af63fcec044e3bfc6b8425",
"0xf817c7680b9aeac8d5797944e613fa785089709c8614856cf535ebf8d5b3066e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


