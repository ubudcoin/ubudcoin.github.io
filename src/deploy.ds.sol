pragma solidity >= 0.4.0;
import "dapple/script.sol";
import "./ubudcoin.sol";

contract Deploy is Script {
  function Deploy() {
    address owner = msg.sender; // your address here
    var coin = new UbudCoin(owner, 100000);
    export("ubudcoin", coin);
  }
}

