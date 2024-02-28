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

btnProduct.forEach((button, index) => {
	button.addEventListener('click', () => {
		product = products[index];
		const productId = product.dataset.id;
		const productImg = product.querySelector('.product__image').getAttribute('src');
		const quantityNumber = parseInt(numberProduct[index].textContent);
	
        const idCartProduct = cartProduct.findIndex(e => e.id === productId);
		
		if (idCartProduct !== -1) {
			cartProduct[idCartProduct].quantity += quantityNumber;
			} else {
			const objProduct = {
				id: productId,
				image: productImg,
				quantity: quantityNumber,
			};
			cartProduct.push(objProduct);
		}
		console.log(cartProduct);
		cartItems();
	});
});

function cartItems() {
	const cartContainer = document.querySelector('.cart__products');
	cartContainer.innerHTML = '';
	cartProduct.forEach(element => {
		const cartProductElement = document.createElement('div')
		cartProductElement.classList.add('cart__product');
		cartProductElement.dataset.id = element.id;

		const productImg = document.createElement('img');
		productImg.classList.add('cart__product-image');
		productImg.src = element.image;
		cartProductElement.appendChild(productImg);
		
		const productCount = document.createElement('div');
		productCount.classList.add('cart__product-count');
		productCount.textContent = element.quantity;
		cartProductElement.appendChild(productCount);
		cartContainer.appendChild(cartProductElement);
	});
}
    


