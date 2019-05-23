   /*jshint esversion: 6 */ 
  
   window.addEventListener('DOMContentLoaded', function () {
	"use strict";
	
	 
	 let tabs = require('./parts/tabs.js'),
	     modal = require('./parts/modal.js'),
		 timer = require('./parts/timer.js'),
         form = require('./parts/form.js'),
         slider = require('./parts/slider.js'),
	     calc = require('./parts/calc.js');


    tabs();
    modal();
    timer();
    form();
    slider();
    calc();
});


     /*let tab = document.querySelectorAll('.info-header-tab'),
         info = document.querySelector('.info-header'),
         tabContent = document.querySelectorAll('.info-tabcontent');

     function hideTabContent(a) {
         for (let i = a; i < tabContent.length; i++) {
             tabContent[i].classList.remove('show');
             tabContent[i].classList.add('hide');
         }
     }
     hideTabContent(1);

     function showTabContent(b) {
         if (tabContent[b].classList.contains('hide')) {
             tabContent[b].classList.remove('hide');
             tabContent[b].classList.add('show');
         }
     }
     info.addEventListener('click', function (event) {
         let target = event.target;
         if (target && target.classList.contains('info-header-tab')) {
             for (let i = 0; i < tab.length; i++) {
                 if (target == tab[i]) {
                     hideTabContent(0);
                     showTabContent(i);
                     break;
                 }
             }
         }
 });*/

 //Timer

 /*let deadline = '2019-05-23';

 function getTimeRemaining(endtime) {
     let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t / 1000)),
         minutes = Math.floor((t / 1000 / 60) % 60),
         hours = Math.floor((t / (1000 * 60 * 60)));

     return {
         total: t,
         hours: hours,
         minutes: minutes,
         seconds: seconds
     };
 }

 function setCloack(id, endtime) {
     let timer = document.getElementById(id),
         hours = timer.querySelector(".hours"),
         minutes = timer.querySelector(".minutes"),
         seconds = timer.querySelector(".seconds"),
         timeInterval = setInterval(updateClock, 1000);

     function updateClock() {
         let t = getTimeRemaining(endtime),
             h = t.hours.toString(),
             m = t.minutes.toString(),
             s = t.seconds.toString();

         if (
             t.total <= 0 &&
             t.hours <= 0 &&
             t.minutes <= 0 &&
             t.seconds <= 0
         ) {
             hours.textContent = "00";
             minutes.textContent = "00";
             seconds.textContent = "00";
             clearInterval(timeInterval);
         } else {
             hours.textContent = h.length < 2 ? `0${h}` : h;
             minutes.textContent = m.length < 2 ? `0${m}` : m;
             seconds.textContent = s.length < 2 ? `0${s}` : s;
         }
     }
 }
 setCloack("timer", deadline);*/

 // Модальное окно

 /*let more = document.body.getElementsByClassName('more')[0],
     overlay = document.body.getElementsByClassName('overlay')[0],
     close = document.body.getElementsByClassName('popup-close')[0],
     descriptionBtns = document.body.getElementsByClassName('description-btn');

 function showModalPopup() {
     overlay.style.display = 'block';
     this.classList.add('more-splash');
     document.body.style.overflow = 'hidden';
 }

 more.addEventListener('click', showModalPopup);

 for (let i = 0; i < descriptionBtns.length; i++) {
     descriptionBtns[i].addEventListener('click', showModalPopup);
 }

 close.addEventListener('click', function() {
     overlay.style.display = 'none';
     this.classList.remove('more-spalsh');
     document.body.style.overflow = '';
 });*/


 //Форма

 /*let message = {
     loading: 'Загрузка...',
     succes: 'Спасибо! Скоро мы с Вами свяжемся.',
     failure: 'Что-то пошло не так.'
 };

 let form = document.querySelector('.main-form'),
     contactForm = document.querySelector('#form'),
     input = document.querySelectorAll('input'),
     statusMessage = document.createElement('div');

    statusMessage.classList.add('status');  
 
         input[2].setAttribute("name", "e-mail");
         input[3].setAttribute("name", "tel");

 function sendForm(elem) {
     elem.addEventListener('submit', function (e) {
         e.preventDefault();
         elem.appendChild(statusMessage);

         let formData = new FormData(elem);

         function postData(data) {
             return new Promise(function (resolve, reject) {
                 let request = new XMLHttpRequest();
                 request.open('POST', 'server.php');
                 request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');

                 let obj = {};
                 formData.forEach(function (value, key) {
                     obj[key] = value;
                 });
                 let json = JSON.stringify(obj);

                 request.onreadystatechange = function () {
                     if (request.readyState < 4) {
                         resolve();
                     } else if (request.readyState === 4) {
                         if (request.status == 200 && request.status < 300) {
                             resolve();
                         } else {
                             reject();
                         }
                     }
                 };
                 request.send(json);
             });
         }

         function clearInput() {
             for (let i = 0; i < input.length; i++) {
                 input[i].value = '';
             }
         }

         postData(formData)
             .then(() => statusMessage.innerHTML = message.loading)
             .then(() => statusMessage.innerHTML = message.succes)
             .catch(() => statusMessage.innerHTML = message.failure)
             .then(clearInput);
     });
 }
 sendForm(form);
 sendForm(contactForm);

 let tels = document.querySelectorAll('input[type="tel"]');
  
  [].forEach.call(tels, (el =>{
    el.addEventListener('input', evt =>{
      if ( !el.oldValue ) {el.oldValue = '';} 
      
      if ( /^\+?[()\d \-]*$/.test(el.value) || el.value === '' ){
        el.oldValue = el.value;
      } else {
        el.value = el.oldValue;
      }
    });
  }));*/
 

 //Slider

 /*let slideIndex = 1,
     slides = document.querySelectorAll('.slider-item'),
     prev = document.querySelector('.prev'),
     next = document.querySelector('.next'),
     dotsWrap = document.querySelector('.slider-dots'),
     dots = document.querySelectorAll('.dot');

     showSlides(slideIndex);

     

     function showSlides(n) {
if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}
         slides.forEach((item)=> item.style.display = 'none');
         //for (let i = 0; i < slides.length; i++)
         //slides[i].style.display = none;
     //}
     dots.forEach((item) => item.classList.remove('dot-active'));

     slides[slideIndex - 1].style.display = 'block';
     dots[slideIndex-1].classList.add('dot-active');
     }

     function plusSlides(n) {
         showSlides(slideIndex += n);
     }
     function currentSlide(n) {
         showSlides(slideIndex = n);
     }

     prev.addEventListener('click', function() {
        plusSlides(-1);
     });

     next.addEventListener('click', function() {
        plusSlides(1);
     });

     dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
              currentSlide(i);  
            }
        }
     });*/
     
//Calc

  /*let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if(restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if(persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

    let inputsCounter = document.querySelectorAll('.counter-block-input');


  
    [].forEach.call(inputsCounter, (el =>{
    el.addEventListener('input', evt =>{
      if ( !el.oldValue ) {el.oldValue = '';} 

      if (/^\d+$/.test(el.value) || el.value === ' ' ){
        el.oldValue = el.value;
      } else {
        el.value = el.value;
      }
    });
  }));*/