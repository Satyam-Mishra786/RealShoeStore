const wrapper = document.querySelector(".sliderwrapper");
// wrapper.style.transform = 'translateX(-200vw)';
const menuItem = document.querySelectorAll(".menuItem");



const products = [
    {
        id: 1,
        title: "NIKE",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "Adidas",
        price: 125,
        colors: [
            {
                code: "white",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 3,
        title: "Sporto",
        price: 140,
        colors: [
            {
                code: "black",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            }
        ]
    },
    {
        id: 4,
        title: "Royal",
        price: 110,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    },
    {
        id: 5,
        title: "Red Chief",
        price: 150,
        colors: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "white",
                img: "./img/crater2.png"
            }
        ]
    },
];

let choosenProduct = products[0];
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColor1 = document.querySelector(".color-black");
const currentProductColor2 = document.querySelector(".color-blue");
const currentProductImg = document.querySelector(".product-img");

// const choosenProductImg =

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        // console.log("you clicked" + index);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Updating choosen Product
        choosenProduct = products[index]

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductColor1.style.backgroundColor = choosenProduct.colors[0].code;
        currentProductColor2.style.backgroundColor = choosenProduct.colors[1].code;
    })
});

currentProductColor1.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[0].img;
})

currentProductColor2.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[1].img;
})

const Productsizes = document.querySelectorAll(".size")

Productsizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        Productsizes.forEach((size, index) => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        })
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    })
})

const payment = document.querySelector(".payment");
const buybtn = document.querySelector(".button-buy")

buybtn.addEventListener("click", () => {
    payment.style.display = 'flex';

})

const cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
    payment.style.display = 'none';
})