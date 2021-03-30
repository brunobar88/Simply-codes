<?php

class Account
{
  // Encapsulation concept, only what is needed will be acessible ouside the class
  // For this reason have access moidifier key words, for instance private and public 
  private Owner $owner;
  private float $balance;

  // Static Atribute, they belong to the class itself, not at every instance of it
  private static $totalAccountNumber;

  //construct method, is executed when the instance is created
  public function __construct(Owner $owner)
  {
    $this->owner = $owner;
    $this->balance = 0;

    //For access static atributes, the word "self" is used
    self::$totalAccountNumber++;
  }

  //destruct Method, is executed when instance is deleted (PHP garbage colector)
  public function __destruct()
  {
    self::$totalAccountNumber--;
  }

  // Getters and Setters, methods that guarantee the correct behavior of the data in this class 
  public function getBalance(): float
  {
    return $this->balance;
  }

  public function getOwnerName(): string
  {
    return $this->owner->getName();
  }

  public function getOwnerCpf(): string
  {
    return $this->owner->getCpf();
  }
  
  // Common methods in the class, this methods are used to modify the class data
  public function withdraw(float $withdrawValue): void
  {
    if($withdrawValue > $this->balance) {
      echo "Valor de retirada maior que o saldo da conta";
      return;
    }

    $this->balance -= $withdrawValue;
  }

  public function deposit(float $depositValue): void
  {
    if($depositValue < 0) {
      echo "Você não pode depositar 0 reais";
      return;
    }

    $this->balance += $depositValue;
  }
  
  public function transfer(float $transferValue, Account $targetAccount): void
  {
    if($transferValue > $this->balance) {
      echo "Você não pode tranferir esse valor";
      return;
    }
    
    $this->withdraw($transferValue);
    $targetAccount->deposit($transferValue);
  }

  public static function totalAccountNumber(): int
  {
    return self::$totalAccountNumber;
  }
}