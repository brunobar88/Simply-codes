<?php

//temos as seguintes strings...

$strings = [
  "SENTADO NO SOFÁ",
  "Sentado No Sofá",
  "sentado no sofá"
];

echo '<pre>';
var_dump($strings);
echo '</pre>';

echo 'tranformando para minúsculo com a função strtolower($string)</br>';
foreach($strings as $string) {
  echo strtolower($string) . '</br>';
}

echo '</br>Perceba que com strtolower a letra maiúscula com acento não é convertida</br></br>';

echo 'Agora com a função mb_strtolower($string, "charset")</br>';
foreach($strings as $string) {
  echo mb_strtolower($string, "utf-8") . '</br>';
}


echo '
  </br></br>Isso acontece pois a função strtolower($string) não considera o charset da string.</br>
  já a função mb_strtolower($string, "charset"), faz exatamente a mesma coisa mas considerando o charset que você passou para a string.
';
