 /*jshint esversion: 6 */
 function form() {
    let message = {
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
     }));
 }
 module.exports = form;