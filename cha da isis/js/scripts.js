/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    document.addEventListener("DOMContentLoaded", function() {
        loadCounters();
    });

    function loadCounters() {
        const counters = getCounters();
        document.getElementById('counter-p').innerText = counters.P + " pacotes";
        document.getElementById('counter-m').innerText = counters.M + " pacotes";
        document.getElementById('counter-g').innerText = counters.G + " pacotes";
        document.getElementById('counter-gg').innerText = counters.GG + " pacotes";
        document.getElementById('total-counter').innerText = counters.P + counters.M + counters.G + counters.GG;
    }

    function getCounters() {
        return JSON.parse(localStorage.getItem('diaperCounters')) || { P: 0, M: 0, G: 0, GG: 0 };
    }

    function updateCounters(counters) {
        localStorage.setItem('diaperCounters', JSON.stringify(counters));
        loadCounters();
    }

    function confirmDiaper(size) {
        const confirmation = confirm("Você dará de presente um pacote de fralda do tamanho " + size + "?");
        if (confirmation) {
            const counters = getCounters();
            counters[size]++;
            updateCounters(counters);
            alert(`Você confirmou o presente de um pacote de fralda do tamanho ${size}! Muito obrigada!`);

        }
    }

    function resetCounters() {
        if (confirm("Tem certeza que deseja resetar todos os contadores?")) {
            const initialCounters = { P: 0, M: 0, G: 0, GG: 0 };
            updateCounters(initialCounters);
            alert("Os contadores foram resetados!");
        }
    }
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
