// var burgerMenu = document.querySelector('.burger_menu');
// burgerMenu.addEventListener('click', function() {
//     burgerMenu.classList.add('.nikyde');
// })


function myFunction() {
  var x = document.getElementById("burger-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}






























// const burgerBttn = document.querySelector(".burger_button");
// const burgerMenu = document.querySelector('.burger_menu');

// burgerBttn.addEventListener ('click', function () {
//     if (this.classList.contains('active')) {
//         this.classList.remove('active');
//         document.dispatchEvent(new CustomEvent('drop-burger'), {
//             open: false
//         });
//         return;
//     }

//     this.classList.add('active');
//     document.dispatchEvent(new CustomEvent('drop-burger'), {
//         open: true 
//     });
// });

// function toggleBurgerMenu(open) {
//     const burgerMenu = document.querySelector('.burger_menu');
//     if (open && !burgerMenu.classList.contains('active')) {
//         burgerMenu.classList.add('active');
//         return;
//     }
//     if (burgerMenu.classList.contains('active')) {
//         burgerMenu.classList.remove('active');
//         return;  
//     }
//     burgerMenu.classList.add('active');
// } 

// document.addEventListener('drop-burger', function() {
    
// })





