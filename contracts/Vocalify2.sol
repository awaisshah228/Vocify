// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import './Vocalify.sol';

contract Vocalify2 is Vocalify {
  function version() pure public returns (string memory) {
        return "v2!";
    }
}