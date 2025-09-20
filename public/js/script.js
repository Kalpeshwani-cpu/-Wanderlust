// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


// index Script
// After performing a search (?q=...), clear the querystring from the URL
// so that refreshing the page shows all listings again.
if(window.location.search && window.location.search.includes('q=')){
    const cleanUrl = window.location.pathname;
    window.history.replaceState(null, '', cleanUrl);
}

  let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  let priceDisplays = document.getElementsByClassName("price-display");
  let taxPrices = document.getElementsByClassName("tax-price");

taxSwitch.addEventListener("click",()=>{
  const isChecked = taxSwitch.checked;
  
  for(let i = 0; i < priceDisplays.length; i++){
      if(isChecked){
          // Show tax-inclusive price
          priceDisplays[i].style.display = "none";
          taxPrices[i].style.display = "inline";
      }else{
          // Show base price
          priceDisplays[i].style.display = "inline";
          taxPrices[i].style.display = "none";
      }
  }
});

// Filters horizontal scroll buttons
const filters = document.getElementById("filters");
const scrollLeftBtn = document.querySelector('.filters-scroll-left');
const scrollRightBtn = document.querySelector('.filters-scroll-right');

function updateScrollButtons(){
  if(!filters || !scrollLeftBtn || !scrollRightBtn) return;
  const maxScrollLeft = filters.scrollWidth - filters.clientWidth;
  scrollLeftBtn.disabled = filters.scrollLeft <= 0;
  scrollRightBtn.disabled = filters.scrollLeft >= maxScrollLeft - 1;
}

function smoothScrollBy(container, amount){
  container.scrollBy({left: amount, behavior: 'smooth'});
}

if(filters && scrollLeftBtn && scrollRightBtn){
  updateScrollButtons();
  scrollLeftBtn.addEventListener('click', ()=> smoothScrollBy(filters, -Math.max(200, filters.clientWidth * 0.6)));
  scrollRightBtn.addEventListener('click', ()=> smoothScrollBy(filters, Math.max(200, filters.clientWidth * 0.6)));
  filters.addEventListener('scroll', updateScrollButtons, {passive: true});
  window.addEventListener('resize', updateScrollButtons);
}