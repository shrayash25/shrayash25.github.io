// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Cryptozen {
  address public owner;  
    mapping(uint => Item) public items;
    uint public itemCount;
    
    event ItemAdded(uint itemId, string name, uint price, uint quantity);
    event ItemPurchased(uint itemId, address buyer, uint quantity);
    event Withdrawal(address owner, uint amount);

    struct Item {
        string name;
        uint price;
        uint quantity;
    }

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function addItem(string memory _name, uint _price, uint _quantity) public onlyOwner {
        require(_quantity > 0, "Quantity must be greater than zero");
        itemCount++;
        items[itemCount] = Item(_name, _price, _quantity);
        emit ItemAdded(itemCount, _name, _price, _quantity);
    }

    function purchaseItem(uint _itemId, uint _quantity) public payable {
        require(_itemId > 0 && _itemId <= itemCount, "Invalid item id");
        require(_quantity > 0 && _quantity <= items[_itemId].quantity, "Invalid quantity");
        uint totalPrice = items[_itemId].price * _quantity;
        require(msg.value >= totalPrice, "Insufficient funds");

        items[_itemId].quantity -= _quantity;
        emit ItemPurchased(_itemId, msg.sender, _quantity);

        // Refund excess payment
        if (msg.value > totalPrice) {
            payable(msg.sender).transfer(msg.value - totalPrice);
        }
    }

    function withdraw(uint _amount) public onlyOwner {
        require(_amount <= address(this).balance, "Insufficient balance");
        payable(owner).transfer(_amount);
        emit Withdrawal(owner, _amount);
    }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
}