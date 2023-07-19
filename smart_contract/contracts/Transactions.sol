// SPDX-License-Identifier: GDP-X
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    uint256 public transactionCount;
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);

    mapping(uint256 => address) public senders;
    mapping(uint256 => address) public receivers;
    mapping(uint256 => uint) public amounts;
    mapping(uint256 => string) public messages;
    mapping(uint256 => uint256) public timestamps;

    function addTransaction(address payable receiver, uint amount, string memory message) public {
        senders[transactionCount] = msg.sender;
        receivers[transactionCount] = receiver;
        amounts[transactionCount] = amount;
        messages[transactionCount] = message;
        timestamps[transactionCount] = block.timestamp;

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);

        transactionCount += 1;
    }

    function getTransaction(uint256 index) public view returns(address, address, uint, string memory, uint256) {
        return (senders[index], receivers[index], amounts[index], messages[index], timestamps[index]);
    }
}
