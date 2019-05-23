/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/parts/tabs.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/parts/modal.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/parts/timer.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/parts/slider.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js");

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

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
  var inputsCounter = document.querySelectorAll('.counter-block-input');
  [].forEach.call(inputsCounter, function (el) {
    el.addEventListener('input', function (evt) {
      if (!el.oldValue) {
        el.oldValue = '';
      }

      if (/^\d+$/.test(el.value) || el.value === ' ') {
        el.oldValue = el.value;
      } else {
        el.value = el.value;
      }
    });
  });
}

module.exports = calc;

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function form() {
  var message = {
    loading: 'Загрузка...',
    succes: 'Спасибо! Скоро мы с Вами свяжемся.',
    failure: 'Что-то пошло не так.'
  };
  var form = document.querySelector('.main-form'),
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
      var formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset = utf-8');
          var obj = {};
          formData.forEach(function (value, key) {
            obj[key] = value;
          });
          var json = JSON.stringify(obj);

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
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.succes;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form);
  sendForm(contactForm);
  var tels = document.querySelectorAll('input[type="tel"]');
  [].forEach.call(tels, function (el) {
    el.addEventListener('input', function (evt) {
      if (!el.oldValue) {
        el.oldValue = '';
      }

      if (/^\+?[()\d \-]*$/.test(el.value) || el.value === '') {
        el.oldValue = el.value;
      } else {
        el.value = el.oldValue;
      }
    });
  });
}

module.exports = form;

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function timer() {
  var more = document.body.getElementsByClassName('more')[0],
      overlay = document.body.getElementsByClassName('overlay')[0],
      close = document.body.getElementsByClassName('popup-close')[0],
      descriptionBtns = document.body.getElementsByClassName('description-btn');

  function showModalPopup() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  more.addEventListener('click', showModalPopup);

  for (var i = 0; i < descriptionBtns.length; i++) {
    descriptionBtns[i].addEventListener('click', showModalPopup);
  }

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    this.classList.remove('more-spalsh');
    document.body.style.overflow = '';
  });
}

module.exports = timer;

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function slider() {
  var slideIndex = 1,
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

    slides.forEach(function (item) {
      return item.style.display = 'none';
    }); //for (let i = 0; i < slides.length; i++)
    //slides[i].style.display = none;
    //}

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
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
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function timer() {
  var deadline = '2019-05-23';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setCloack(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime),
          h = t.hours.toString(),
          m = t.minutes.toString(),
          s = t.seconds.toString();

      if (t.total <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      } else {
        hours.textContent = h.length < 2 ? "0".concat(h) : h;
        minutes.textContent = m.length < 2 ? "0".concat(m) : m;
        seconds.textContent = s.length < 2 ? "0".concat(s) : s;
      }
    }
  }

  setCloack("timer", deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map