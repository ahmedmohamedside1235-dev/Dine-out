let sectionMenu = document.querySelector("#Menu");
menus = document.querySelectorAll("#Menu .nav-content button"),
    products = document.querySelectorAll("#Products .col .item");

products.forEach(function (item) {
    item.addEventListener("click", function () {

        sectionMenu.scrollIntoView();

        setTimeout(function () {
            let show = menus[item.dataset.index];
            show.click();
        }, 500)
    })
})