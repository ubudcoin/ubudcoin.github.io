[![Join the chat at https://gitter.im/sahat/hackathon-starter](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/ubudcoin/Lobby#)

## Learning resources

#### Dapple
http://dapple.readthedocs.org
https://github.com/nexusdev/dapple

#### Metamask
https://metamask.io

#### Solidity
http://solidity.readthedocs.org

#### Ethereum
https://ethereumbuilders.gitbooks.io/guide/content/en/index.html

# UbudCoin
The first UbudCoin lives on **morden** @ `0x3bd562bc1733f8e7b68ef8a95442c79b09e8e5e0`

Install dapple with `npm -g i dapple`

clone this repository: `git clone https://github.com/ubudcoin/ubudcoin.github.io.git`

`src/ubudcoin.sol` contains the coin contract

`src/coin_test.sol` are unit tests

`src/deploy.ds.sol` can be used to deploy the coin

run the tests with `dapple test --report`

deploy it with `dapple script run Deploy`
> Not that if you want to deploy your coin the the morden testnet or the ethereum livenet you must have a synced chain runnning and also create a new chain environment with `dapple chain new`

run a webserver `python -m SimpleHTTPServer 8000` and open http://localhost:8000 to view your coin

you now own a coin!
