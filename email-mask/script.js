
const click = document.querySelector('#mask');

click.addEventListener('click', () => {

  // Takes input values
  const email = document.querySelector('#email').value;
  const result = document.querySelector('#result');

  //Set result as empty
  result.innerHTML = '';

  //separates email in array from caractere '@'
  let split = email.split('@');

  //takes the three firsts letters
  let firstLetters = split[0].substr(0, 3);

  //Generate random number
  let randoNumber = Math.floor(Math.random() * (15 - 5)) + 5;
  const maskCaractere = '*';

  //Join the variables in the correct order
  const maskedEmail = `${firstLetters}${maskCaractere.repeat(randoNumber)}@${split[1]}`;

  //Print result on the screen
  let element = document.createTextNode(maskedEmail);
  result.appendChild(element);
});
