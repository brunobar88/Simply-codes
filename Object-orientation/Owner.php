<?php 

class Owner
{
  private Cpf $cpf;
  private string $name;

  public function __construct(Cpf $cpf, string $name)
  {
    $this->cpf = $cpf;
    $this->validateName($name);
    $this->name = $name;
  }
  
  public function getName(): string
  {
    return $this->name;
  }

  public function getCpf(): string
  {
    return $this->cpf->getCpf();
  }

  //Private methods, only acessible into that class
  private function validateName(string $name): void
  {
    if(strlen($name) < 5) {
      echo "O nome precisa ter mais que 5 caracteres!" . PHP_EOL;
      exit();
    }
  }

}