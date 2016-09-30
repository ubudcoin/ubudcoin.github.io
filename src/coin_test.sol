pragma solidity >= 0.4.0;

import "dapple/test.sol";
import "./ubudcoin.sol";

contract CoinTest is Test {
  function testInit() {
    var coin = new UbudCoin(this, 42);
    //@log `uint coin.balances(this)`
    coin.send(0x0123456789012345678901234567890123456789, 12);
    //@log `uint coin.balances(this)`
  }
}
