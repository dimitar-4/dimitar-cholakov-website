// Scroll spy from Bootstrap
let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#my-nav'
  })

// Go to top button
const btnTop = document.getElementById("toTopBtn");

window.onscroll = function() {scrollingDown()};
function scrollingDown() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function goToTop() {
  window.scrollTo(0,0);
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
