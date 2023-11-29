$(document).ready(function () {
    
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").toggleClass("show");
    });

    let list = $(".product-list");
    let products = $(".product");
    let prevBtn = $(".btn-prev");
    let nextBtn = $(".btn-next");

    let productWidth = products.first().outerWidth();
    let numProducts = products.length;

    let currentIndex = 0;

    prevBtn.on("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            list.css("transform", `translateX(-${currentIndex * productWidth}px)`);
        }
    });

    nextBtn.on("click", function () {
        if (currentIndex < numProducts - 1) {
            currentIndex++;
            list.css("transform", `translateX(-${currentIndex * productWidth}px)`);
        }
    });

});