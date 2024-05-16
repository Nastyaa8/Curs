const bar = document.getElementById("bar"); //кнопка меню
const nav = document.getElementById("navbar"); //само меню, которое должно появляться или исчезать.
const close = document.getElementById("close");//закрытие меню
// Здесь проверяется, существует ли элемент bar. Если элемент существует, то добавляется обработчик события "click", который выполняет следующее:
// - При клике на элемент bar добавляется класс "active" к элементу nav, что, вероятно, делает меню видимым.
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}
//Здесь также проверяется, существует ли элемент close. Если элемент существует, то добавляется обработчик события "click", который выполняет следующее:
// - При клике на элемент close у элемента nav удаляется класс "active", скрывая меню. 

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let cart = {
        items: [],
        addItem: function(item, count) {
            let found = this.items.find(i => i.id === item.id);
            if (found) {
                found.count += count;
            } else {
                this.items.push({...item, count: count});
            }
            localStorage.setItem('cart', JSON.stringify(this.items));
        },
        removeItem: function(item) {
            let found = this.items.find(i => i.id === item.id);
            if (found && found.count > 1) {
                found.count--;
            } else {
                this.items = this.items.filter(i => i.id !== item.id);
            }
            localStorage.setItem('cart', JSON.stringify(this.items));
        },
        getItems: function() {
            return JSON.parse(localStorage.getItem('cart')) || [];
        }
    };

    let itemsData = {
        'add1': {'id': '1', 'марка товара': 'Товар 1', 'цена': '100', 'изображение': 'img1.jpg', 'кнопка удаления': '#'},
        'add2': {'id': '2', 'марка товара': 'Товар 2', 'цена': '200', 'изображение': 'img2.jpg', 'кнопка удаления': '3'},
        'add3': {'id': '3', 'марка товара': 'Товар 3', 'цена': '300', 'изображение': 'img3.jpg', 'кнопка удаления': '3'},
        'add4': {'id': '4', 'марка товара': 'Товар 4', 'цена': '400', 'изображение': 'img4.jpg', 'кнопка удаления': '3'},
        'add5': {'id': '5', 'марка товара': 'Товар 5', 'цена': '500', 'изображение': 'img5.jpg', 'кнопка удаления': '3'}
    };

    for(let id in itemsData) {
        document.getElementById(id).addEventListener('click', function() {
            let count = parseInt(document.getElementById(id + '-count').value);
            cart.addItem(itemsData[id], count);
            updateShop();
        });
    }
});

function removeItem(id) {
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    items = items.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(items));
    updateShop();
}


document.addEventListener('DOMContentLoaded', function() {
    function updateShop() {
        let items = JSON.parse(localStorage.getItem('cart')) || [];
        let vivod = document.getElementById('vivod');
        let totalSum = 0;
        vivod.innerHTML = '';
        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            let sum = item['цена'] * item.count;
            totalSum += sum;
            vivod.innerHTML += `
                <div style="display: flex; gap:80px;  margin-bottom: 20px;">
                    <div><img src="${item['кнопка удаления']}" onclick="removeItem('${item['id']}');" /></div>
                    <div><img src="${item['изображение']}" /></div>
                    <div>${item['марка товара']}</div>
                    <div>${item['цена']}</div>
                    <div>${item.count}</div>
                    <div>${sum}</div>
                </div>
            `;
        }
        document.getElementById('sum').innerText = 'Общая сумма: ' + totalSum;
    }

    updateShop();
});