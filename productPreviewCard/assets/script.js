// Add To Cart Button
let  addToCartBtn = document.querySelector("button.addToCart");
addToCartBtn.addEventListener("click", ()=>{
    addToCartBtn.innerHTML = '<img src="assets/images/icon-check.svg" alt="Cart Icon" class="icon"> Added ';
    addToCartBtn.style.background = "#1c232b";
})

