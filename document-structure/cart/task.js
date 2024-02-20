const products = document.querySelectorAll('.product');     // список продуктов 
const btnMinus = document.querySelectorAll('.product__quantity-control_dec');     // кнопки минус
const btnPlus = document.querySelectorAll('.product__quantity-control_inc');     // кнопки плюс
const numberProduct = document.querySelectorAll('.product__quantity-value');     // число продуктов, положенных в корзину
const btnProduct = document.querySelectorAll('.product__add');     // кнопка добавить в корзину 
const cartProduct = [];     // массив продуктов, положенных в корзину 

btnMinus.forEach((minus, element) => {
	minus.addEventListener('click', () => {
		 let number = parseInt(numberProduct[element].textContent); 
		if (number === 1) {
			numberProduct[element].textContent = 1;
        } else {
			number -= 1;
			numberProduct[element].textContent = number;
		}
	});
});

btnPlus.forEach((plus, element) => {
	plus.addEventListener('click', () => {
		let number = parseInt(numberProduct[element].textContent);
		number += 1;
		numberProduct[element].textContent = number;
	});
});

let templateHTML = `<div class="cart__product" data-id="1">
    <img class="cart__product-image" src="image.png">
    <div class="cart__product-count">20</div>
</div>`
templateHTML = templateHTML.trim();
const template = document.createElement('template');
template.innerHTML = templateHTML;
return template.content.firstChild


btnProduct.addEventListener('click', () => {
   
})
