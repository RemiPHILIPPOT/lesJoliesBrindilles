// /*!
// * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
// * Copyright 2013-2021 Start Bootstrap
// * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
// */
// //
// // Scripts
// // 

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 74,
//         });
//     };


//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });

// document.addEventListener("scroll", function () {
//     const navbar = document.querySelector(".navbar");
//     const navbarHeight = 100;

//     const distanceFromTop = Math.abs(
//       document.body.getBoundingClientRect().top
//     );
//     if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed");
//     else navbar.classList.remove("fixed");
//   });


//   window.addEventListener('scroll', function() {
//     document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
//   });

//   //Lorsque je scroll le menu apparait et changement de colour du texte

  

  