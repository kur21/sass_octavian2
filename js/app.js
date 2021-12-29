document.addEventListener('DOMContentLoaded', function() {
   // Function getOffset
   function getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
         left: rect.left + window.scrollX,
         top: rect.top + window.scrollY
      };
   }

   // Hover button effect
   const btnList = [...document.querySelectorAll(".btn")]
   btnList.forEach(function(btn) {
      btn.appendChild(document.createElement('span'));
      btn.onmouseenter = function(e) {
         var span = btn.querySelector('span')
         span.style.left = (e.pageX - getOffset(btn).left) + 'px'
         span.style.top = (e.pageY - getOffset(btn).top) + 'px'
      }
      btn.onmouseout = function(e) {
         var span = btn.querySelector('span')
         span.style.left = (e.pageX - getOffset(btn).left) + 'px'
         span.style.top = (e.pageY - getOffset(btn).top) + 'px'
      }
   })

   // Menu toggle
   const menuOpen = document.querySelector('.icon-menu')
   const menu = document.querySelector('.menu')
   if (!menuOpen || !menuOpen) return;
   menuOpen.onclick = function() {
      menu.classList.add('is-active')
   }
   this.onclick = function(e) {
      if (!menu.contains(e.target) && !e.target.matches('.icon-menu')) {
         menu.classList.remove('is-active')
      }
   }

   // Locomotive Scroll
   // const scroller = new LocomotiveScroll({
   //    el: document.querySelector('[data-scroll-container]'),
   //    smooth: true
   // });
})

// Slick slider

$(document).ready(function(){
   $('.review-list').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      dots: false,
  		infinite: true,
  		speed: 500,
  		arrows: false,
  		variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
   });
});