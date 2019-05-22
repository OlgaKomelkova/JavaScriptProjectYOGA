 /*jshint esversion: 6 */
 function calc() {
     let persons = document.querySelectorAll('.counter-block-input')[0],
         restDays = document.querySelectorAll('.counter-block-input')[1],
         place = document.getElementById('select'),
         totalValue = document.getElementById('total'),
         counter = document.querySelector('.counter'),
         personsSum = 0,
         daysSum = 0,
         total = 0;

     totalValue.innerHTML = 10;

     persons.addEventListener('change', function () {
         personsSum = +this.value;
         total = (daysSum + personsSum) * 4000;

         if ((restDays.value == '' || daysSum == '' || personsSum == '') || (daysSum == 0 || personsSum == 0)) {
             totalValue.innerHTML = 0;
         } else {
             totalValue.innerHTML = total * place.options[place.selectedIndex].value;
         }
     });

     restDays.addEventListener('change', function () {
         daysSum = +this.value;
         total = (daysSum + personsSum) * 4000;

         if ((daysSum == '' || persons.value == '') || (daysSum == 0 || personsSum == 0)) {
             totalValue.innerHTML = 0;
         } else {
             totalValue.innerHTML = total;
         }
     });

     place.addEventListener('change', function () {
         if ((restDays.value == '' || persons.value == '') || (daysSum == 0 || personsSum == 0)) {
             totalValue.innerHTML = 0;
         } else {
             let a = total;
             totalValue.innerHTML = a * this.options[this.selectedIndex].value;
         }
     });

     let inputsCounter = document.querySelectorAll('.counter-block-input');

     function onlyNumber(input) {
         input.onkeydown = function () {
             return (this.value = this.value.replace(/[^0-9]/g));
         };
     }


     [...inputsCounter].forEach(elem => onlyNumber(elem));
 }

 module.exports = calc;