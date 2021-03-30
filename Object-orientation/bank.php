<?php

require 'src/Account.php';
require 'src/Owner.php';
require 'src/Cpf.php';

//First account
$account1 = new Account(new Owner(new Cpf('123.456.789-10'), 'Some name'));

$account1->deposit(500);
$account1->withdraw(200);

var_dump($account1->getOwnerCpf()) . PHP_EOL;
var_dump($account1->getOwnerName()) . PHP_EOL;
var_dump($account1->getBalance()) . PHP_EOL;

//the Account object has the object Owner, this is called object composition (the same thing in $account2)
var_dump($account1);

//Second account
$account2 = new Account(new Owner(new Cpf('567.789.223-90'), 'Another nome'));

$account2->deposit(1000);
$account2->withdraw(450);

var_dump($account2->getOwnerCpf()) . PHP_EOL;
var_dump($account2->getOwnerName()) . PHP_EOL;
var_dump($account2->getBalance()) . PHP_EOL;

//This account is being created, but there is no reference, so garbage coletor delete this instance from memory
new Account(new Owner(new Cpf('567.789.223-90'), 'Other nome'));

//This sintax is used to acess static methods "Class::method()"
var_dump(Account::totalAccountNumber()); // 2