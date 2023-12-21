let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Kuih Ros',
        image: '1.jpg',
        price: 15.00
    },
    {
        id: 2,
        name: 'Angku',
        image: '2.jpg',
        price: 7.50
    },
    {
        id: 3,
        name: 'Kuih Bulan',
        image: '3.png',
        price: 6
    },
    {
        id: 4,
        name: 'Putri Salat',
        image: '4.jpg',
        price: 4.80
    },
    {
        id: 5,
        name: 'Kuih Sagu',
        image: '5.jpg',
        price: 3
    },
    {
        id: 6,
        name: 'Kuih Lapis',
        image: '6.jpg',
        price: 8.40
    },
    {
        id: 7,
        name: 'Muruku',
        image: '7.jpg',
        price: 18.50
    },
    {
        id: 8,
        name: 'Patishapta',
        image: '8.jpg',
        price: 7.90
    },
    {
        id: 9,
        name: 'Medu Vada',
        image: '9.jpg',
        price: 12
    },
    {
        id: 10,
        name: 'Biskut Nanas',
        image: '10.jpg',
        price: 35
    },
    {
        id: 11,
        name: 'Ondeh Ondeh',
        image: '22.jpg',
        price: 3
    },
    {
        id: 12,
        name: 'Kuih Bangkit',
        image: '12.png',
        price: 13.60
    },
    {
        id: 13,
        name: 'Kuih Lidah',
        image: '13.jpg',
        price: 12
    },
    {
        id: 14,
        name: 'Tutu Kueh',
        image: '14.jpg',
        price: 21
    },
    {
        id: 15,
        name: 'Kuih Kapit',
        image: '15.jpg',
        price: 15
    },
    {
        id: 16,
        name: 'Clorot',
        image: '16.jpg',
        price: 7.50
    },
    {
        id: 17,
        name: 'Kuih Bahulu',
        image: '17.jpg',
        price: 20
    },
    {
        id: 18,
        name: 'Samosa',
        image: '18.jpg',
        price: 6.50
    },
    {
        id: 19,
        name: 'Palgova Susu',
        image: '19.jpg',
        price: 13.50
    },
    {
        id: 20,
        name: 'Jalebi',
        image: '20.jpg',
        price: 17
    },
    {
        id: 21,
        name: 'NianGao',
        image: '11.jpg',
        price: 28
    },


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Beli</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}