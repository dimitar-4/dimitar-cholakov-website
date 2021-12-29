// Go to top button
const btnTop = document.getElementById("toTopBtn");

window.onscroll = function() {scrollingDown()};
function scrollingDown() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function goToTop() {
  window.scrollTo(0,0);
}

// Bootstrap popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
