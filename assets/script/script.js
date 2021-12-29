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

// Read more button
function moreInfo() {
  let ellipsis = document.getElementById("ellipsis");
  let showMore = document.getElementById("more-text");
  let readBtn = document.getElementById("show-btn");

  if (ellipsis.style.display === "none") {
    ellipsis.style.display = "inline";
    readBtn.innerHTML = "<em>Read more</em> <i class='fas fa-chevron-circle-down'></i>";
    showMore.style.display = "none";
  } else {
    ellipsis.style.display = "none";
    readBtn.innerHTML = "<em>See less</em> <i class='fas fa-chevron-circle-up'></i>";
    showMore.style.display = "inline";
  }
}


// Bootstrap popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
