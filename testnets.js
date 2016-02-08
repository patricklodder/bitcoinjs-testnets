var Testnets = {};

// extend known network params with dogecoin and litecoin testnets
Testnets.dogecoin_testnet = {
  messagePrefix: '\x18Dogecoin Signed Message:\n',
  bip32: {
    public: 0x0432a9a8,
    private: 0x0432a243
  },
  pubKeyHash: 0x71,
  scriptHash: 0xc4,
  wif: 241,
  dustThreshold: 100000000,
};

Testnets.litecoin_testnet = {
  messagePrefix: '\x18Litecoin Signed Message:\n',
  bip32: {
    public: 0x0436ef7d,
    private: 0x0436f6e1
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
  dustThreshold: 100000,
};

var register = function (btcjslibNetObj) {
  Object.keys(Testnets).forEach(function (net) {
    btcjslibNetObj[net] = Testnets[net];
  });
};

module.exports = {
  register: register
};

