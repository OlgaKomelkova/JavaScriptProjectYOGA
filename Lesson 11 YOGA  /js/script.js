 /*jshint esversion: 6 */
 window.addEventListener('DOMContentLoaded', function () {

     'use strict';
     let tab = document.querySelectorAll('.info-header-tab'),
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
     });
 });

 //Timer

 let deadline = '2018-10-21';

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
 setCloack("timer", deadline);

 // Модальное окно

 let more = document.body.getElementsByClassName('more')[0],
     overlay = document.body.getElementsByClassName('overlay')[0],
     close = document.body.getElementsByClassName('popup-close')[0],
     descriptionBtns = document.body.getElementsByClassName('description-btn');

 function showModalPopup() {
     overlay.style.display = 'block';
     more.classList.add('more-splash');
     document.body.style.overflow = 'hidden';
 }

 more.addEventListener('click', showModalPopup);

 for (let i = 0; i < descriptionBtns.length; i++) {
     descriptionBtns[i].addEventListener('click', showModalPopup);
 }

 close.addEventListener('click', evt => {
     overlay.style.display = 'none';
     more.classList.remove('more-spalsh');
     document.body.style.overflow = '';
 });


 //Форма

 let message = {
     loading: 'Загрузка...',
     succes: 'Спасибо! Скоро мы с Вами свяжемся.',
     failure: 'Что-то пошло не так.'
 };

 let form = document.querySelector('.main-form'),
     contactForm = document.getElementById('form'),
     input = document.querySelectorAll('input'),
     statusMessage = document.createElement('div');

 statusMessage.classList.add('status');

 function sendForm(elem) {
     elem.addEventListener('submit', function(e) {
         e.preventDefault();
         elem.appendChild(statusMessage);

         let request = new XMLHttpRequest();
         request.open('POST', 'server.php');

         request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');

         let formData = new FormData(elem);

         let obj = {};
         formData.forEach(function(value, key){
             obj[key] = value;
         });
         let json = JSON.stringify(obj);

         request.send(json);

         request.addEventListener('readystatechange', function() {
             if (request.readyState < 4) {
                 statusMessage.innerHTML = message.loading;
             } else if (request.readyState === 4 && request.status == 200) {
                 statusMessage.innerHTML = message.succes;
             } else {
                    statusMessage.innerHTML = message.failure;
             }
         });
         for (let i = 0; i < input.lenght; i++) {
             input[i].value = '';
         }
     });
    }
    
 sendForm(form);
 sendForm(contactForm);

 let inputsTel = document.querySelectorAll('input[type="tel"]');

 function onlyNumbers(input) {
     input.onkeydown = function () {
         return (this.value = this.value.replace(/[^0-9/+]/g, ""));
     };
 }

 [...inputsTel].forEach(elem => onlyNumbers(elem));
 