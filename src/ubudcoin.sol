pragma solidity >= 0.4.0;

contract UbudCoin {
  mapping (address => uint) public balances;

  function UbudCoin(address owner, uint balance) {
    balances[owner] = balance;
  }

  function send(address to, uint ammount) {
    if(balances[msg.sender] >= ammount) {
      balances[msg.sender] -= ammount;
      balances[to] += ammount;
    }
  }
}
