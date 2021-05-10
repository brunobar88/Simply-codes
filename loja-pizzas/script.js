const selector = (element) => document.querySelector(element);
const selectorAll = (element) => document.querySelectorAll(element);
let qtPizzas = 1;
let cart = [];
let modalPizzaKey = 0;

pizzaJson.map((pizza, index) => {
    let pizzaItem = selector('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;

    pizzaItem.querySelector('a').addEventListener('click', (event) => {
        qtPizzas = 1;
        event.preventDefault();
        selector('.pizzaWindowArea').style.opacity = 0;
        selector('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            selector('.pizzaWindowArea').style.opacity = 1;
        }, 1);
        
        let pizzaKey = event.target.closest('.pizza-item').getAttribute('data-key');
        modalPizzaKey = pizzaKey;

        selector('.pizzaBig img').src = pizzaJson[pizzaKey].img;
        selector('.pizzaInfo h1').innerHTML = pizzaJson[pizzaKey].name;
        selector('.pizzaInfo--desc').innerHTML = pizzaJson[pizzaKey].description;
        selector('.pizzaInfo--size.selected').classList.remove('selected');
        selectorAll('.pizzaInfo--size').forEach((item, key) => {
            if(key == 2) {
                item.classList.add('selected');
            }
            item.querySelector('span').innerHTML = pizzaJson[pizzaKey].sizes[key];
        });
        selector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[pizzaKey].price.toFixed(2)}`;
        selector('.pizzaInfo--qt').innerHTML = qtPizzas;

    });

    selector('.pizza-area').append(pizzaItem);
});

function closeModal() {
    selector('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        selector('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

selectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', () => {closeModal()});
});

selector('.pizzaInfo--qtmais').addEventListener('click', () => {
    selector('.pizzaInfo--qt').innerHTML = ++qtPizzas;
});

selector('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(qtPizzas > 1) {
        selector('.pizzaInfo--qt').innerHTML = --qtPizzas; 
    }
});

selectorAll('.pizzaInfo--size').forEach((item) => {
    item.addEventListener('click', () => {
        selector('.pizzaInfo--size.selected').classList.remove('selected');
        item.classList.add('selected');
    });
});

selector('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = selector('.pizzaInfo--size.selected').getAttribute('data-key');

    let identifier = pizzaJson[modalPizzaKey].id+'@'+size;

    let keyIdentifier = cart.findIndex((cart) => cart.identifier == identifier);

    if(keyIdentifier > -1) {
        cart[keyIdentifier].qt += qtPizzas;
    } else {
        cart.push({
            identifier,
            id : pizzaJson[modalPizzaKey].id,
            size : parseInt(size),
            qt : qtPizzas,
        });
    }
    updateCart();
    closeModal();
});

selector('.menu-openner').addEventListener('click', () => {
    if(cart.length > 0) {
        selector('aside').style.left = '0';
    }
});

selector('.menu-closer').addEventListener('click', () => {
    selector('aside').style.left = '100vw';
});

function updateCart() {
    selector('.menu-openner span').innerHTML = cart.length;

    if(cart.length > 0) {
        selector('aside').classList.add('show');
        selector('.cart').innerHTML = '';

        let total = 0;
        let subTotal = 0;
        let desconto = 0;

        cart.map((itemCart, index) => {
            let pizzasCart = pizzaJson.find((item) => item.id == cart[index].id);
                subTotal += pizzasCart.price * cart[index].qt;

            let cartItem = selector('.models .cart--item').cloneNode(true);
            let pizzaSize;
            switch(itemCart.size) {
                case 0:
                    pizzaSize = "P";
                    break;
                case 1: 
                    pizzaSize = "M";
                    break;
                case 2:
                    pizzaSize = "G";
            }

            let pizzaNameTamenho = `${pizzasCart.name} (${pizzaSize})`;

            cartItem.querySelector('img').src = pizzasCart.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaNameTamenho;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[index].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if(cart[index].qt > 1) {
                    cart[index].qt--;
                } else {
                    cart.splice(index, 1);
                }
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[index].qt++;
                updateCart();
            });

            selector('.cart').append(cartItem);
        });

        desconto = subTotal * 0.1;
        total = subTotal - desconto;

        selector('.subtotal span:last-child').innerHTML = `R$ ${subTotal.toFixed(2)}`;
        selector('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        selector('.total span:last-child').innerHTML    = `R$ ${total.toFixed(2)}`;

    } else {
        selector('aside').classList.remove('show');
        selector('aside').style.left = '100vw';
    }
}

