 function menu() {

     const header = document.getElementById('header');
     const toggle = document.querySelector("#toggle");
     const navbar = document.querySelector('#navbar');

     toggle.addEventListener('click', () => {


         if (toggle.classList.contains('active')) {
             toggle.classList.remove('active');
             navbar.classList.remove('slide');

         } else {
             toggle.classList.add('active');
             navbar.classList.add('slide')
         }
     })

     document.addEventListener('click', function(e) {
         if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'active') {
             toggle.classList.remove('active');
             navbar.classList.remove('slide');
         }
     })
 }

 export default menu;
