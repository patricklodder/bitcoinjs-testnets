BITCOINJS-TESTNETS
-----

Adds testnet network parameters to bitcoinjs-lib's network list.

Currently this package contains the following networks:

- litecoin testnet
- dogecoin testnet

### Usage

```javascript
var Bitcoin = require('bitcoinjs-lib');
require('bitcoinjs-testnets').register(Bitcoin.networks);

// You now have Bitcoin.networks.litecoin_testnet
```
