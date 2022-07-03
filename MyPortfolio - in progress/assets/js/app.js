window.addEventListener('DOMContentLoaded', (event) => {

    var arr = [
        {
            name: 'John',
            lastName: 'Doe',
            age: '24',
            position: 'Back End Engineer',
            geneder: 'male',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Commodi accusantium ...'
        },
        {
            name: 'Joahn',
            lastName: 'Sims',
            age: '22',
            position: 'Front End Programer',
            geneder: 'female',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
            description:'Reprehenderit autem vero facilis non odio at facere itaque id maxime aperiam ratione reiciendis  ...'
        },
        {
            name: 'Alex',
            lastName: 'Jamson',
            age: '28',
            position: 'UX Designer',
            geneder: 'male',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-10.jpg',
            description: 'Quis debitis culpa cupiditate repudiandae, iusto? Voluptatibus ullam quas '
        },
        {
            name: 'Curtis',
            lastName: 'Black',
            age: '27',
            position: 'UI Designer',
            geneder: 'male',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-15.jpg',
            description:'Reprehenderit autem vero facilis non odio at facere itaque id maxime aperiam ratione reiciendis  ...'

        },
        {
            name: 'Paskal',
            lastName: 'Novakov',
            age: '33',
            position: 'Cleaner',
            geneder: 'male',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-16.jpg',
            description:'Reprehenderit autem vero facilis non odio at facere itaque id maxime aperiam ratione reiciendis  ...'

        }
    ];


    var insert = document.querySelector('#insert');
    arr.forEach(function(person) {
        var cart = createCart(person);
        var x = 1;

        insert.append(cart);
    })


    function createCart(person) {
        // Create Virtual Element
        var cart = document.createElement("div");

        // Add Class
        cart.classList.add('cart');

        // Add HTML Inside
        cart.innerHTML = `
        <div class="personal-information">
            <div class="avatar">
                <img src="${person.avatar}" alt="${person.name} ${person.lastName}">
            </div>
            <h2>${person.position}</h2>
            <h3>${person.name} ${person.lastName} / Age: ${person.age}</h3>
            <h4>Experience: 4 years</h4>
            <p>${person.description}</p>
        </div>
        `

        return cart;
    }


    var box = document.querySelector('.clickMe');


    var eventName = 'mousedown';
    var callBack = function(event) {
        box.classList.add('blue');
    }
    box.addEventListener(eventName, callBack);

    var eventNameUp = 'mouseup';
    var callBackUp = function(event) {
        box.classList.remove('blue')
    }
    box.addEventListener(eventNameUp, callBackUp);


    var eventNameOver = 'mouseover';
    var callBackOver = function(event) {
        box.classList.add('over')
    }
    box.addEventListener(eventNameOver, callBackOver);

    var eventNameOut = 'mouseout';
    var callBackOut = function(event) {
        box.classList.remove('over')
    }
    box.addEventListener(eventNameOut, callBackOut);

});