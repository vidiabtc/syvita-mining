const btcpay = require('btcpay');

const keypair = btcpay.crypto.load_keypair(new Buffer.from(import.meta.env.VITE_BTCPAYSERVER_KEY, 'hex'))

// // Recreate client
// const client = new btcpay.BTCPayClient(https://mainnet.demo.btcpayserver.org/, keypair, {merchant: 6gRXLwjJcaSMJRQeEFxkWB5sbpb27w6qYiUUFCAGVs3y})

// client.get_rates(['BTC_USD'], GMRWXB7xAZBrWkgnBxoqVrQrCC2HGzgT9zyBD5jeT8XX)
//   .then(rates => console.log(rates))
//   .catch(err => console.log(err))