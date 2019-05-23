 /*jshint esversion: 6 */
 function timer() {
 let more = document.body.getElementsByClassName('more')[0],
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

 close.addEventListener('click', function () {
     overlay.style.display = 'none';
     this.classList.remove('more-spalsh');
     document.body.style.overflow = '';
 });
 }

 module.exports = timer;