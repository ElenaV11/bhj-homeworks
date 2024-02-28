const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener ('readystatechange', () => {
    if (xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        const objectValute = JSON.parse(xhr.response).response.Valute;
       
        for (let element in objectValute) {
            
            items.innerHTML += 
        `<div class="item">
            <div class="item__code">
                ${objectValute[element].CharCode}
            </div>
            <div class="item__value">
                ${objectValute[element].Value}
            </div>
                <div class = "item__currency">
                руб.
             </div>
        </div>`;
        }
    }
});

