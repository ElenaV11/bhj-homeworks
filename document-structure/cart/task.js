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
		const productImage = product.querySelector('.product__image').getAttribute('src');
		const quantityNumber = parseInt(numberProduct[index].textContent);
	
        const idCartProduct = cartProduct.findIndex(item => item.id === productId);
		
		if (idCartProduct !== -1) {
			cartProduct[idCartProduct].quantity += quantityNumber;
			} else {
			const objProduct = {
				id: productId,
				image: productImage,
				quantity: quantityNumber,
			};
			cartProduct.push(objProduct);
		}
		console.log(cartProduct);
		renderCartItems();
		animateProductToCart(productImage);
	});
});
    


