

let all =document.querySelector(".hamisi-button")
let fri =document.querySelector(".fri-button")
let marakon =document.querySelector(".marakon-button")
let burger =document.querySelector(".burger-button")
let pizza =document.querySelector(".pizza-button")
let array = [
    {
        ad: "Delicious Pizza",
        id: 1,
        qiymet: 20 +"$",
        tip: "Pizza",
        sekil:"./images/f1.jpg"

    },
    {
        ad: "Delicious Burger",
        id: 2,
        qiymet: 15 +"$",
        tip: "Burger",
        sekil:"./images/f2.png"
    },
    {
        ad: "Cheesy Pizza",
        id: 3,
        qiymet: 17 +"$",
        tip: "Pizza",
        sekil:"./images/f3.png"
    },
    {
        ad: "Delicious Pasta",
        id: 4,
        qiymet: 18 +"$",
        tip: "Pasta",
        sekil:"./images/f4.png"
    },
    {
        ad: "French Fries",
        id: 5,
        qiymet: 10 +"$",
        tip: "Fries",
        sekil:"./images/f5.png"
    },
    {
        ad: "Nuhu Pizza",
        id: 6,
        qiymet: 15 +"$",
        tip: "Pizza",
        sekil:"./images/f6.png"
    },
    {
        ad: "Chicken Burger",
        id: 7,
        qiymet: 12 +"$",
        tip: "Burger",
        sekil:"./images/f7.png"
    },
    {
        ad: "Tasty Burger",
        id: 8,
        qiymet: 14 +"$",
        tip: "Burger",
        sekil:"./images/f8.png"
    },
    {
        ad: "Cheesy Pasta",
        id: 9,
        qiymet: 10 +"$",
        tip: "Pasta",
        sekil:"./images/f9.png"
    }
];

let bigDiv =document.querySelector(".menu-item")
function updateItems(arr) {
    bigDiv.innerHTML = "";
    arr.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("js-div")
        div.id=item.id
        let div1 = document.createElement("div");
        div1.classList.add("js-div1")
        div.append(div1);
        let img = document.createElement("img");
        img.classList.add("js-img")
        img.src = item.sekil;
        div1.append(img);
        let isim =document.createElement("p");
        isim.innerText = item.ad;
        div.append(isim);
        let div2 = document.createElement("div");
        div2.classList.add("js-div2")
        div.append(div2);
        let h2 = document.createElement("h3");
        div2.append(h2);
        h2.innerText=item.qiymet
        let span = document.createElement("div");
        span.classList.add("js-span")
        span.innerText=("+")
        div2.append(span);
        bigDiv.append(div);
       
    })
    pizza.addEventListener("click" ,(e)=>{
        e.preventDefault
        let pizzas = array.filter((item)=>{
            return item.tip == "pizza";
        })
        
    }
    )
}

updateItems(array);
all.addEventListener("click",(e) => {
    e.preventDefault();
    updateItems(array)
})

fri.addEventListener("click",(e) => {
    e.preventDefault()
    updateItems(array.filter(a => a.tip=="Fries"))
})
marakon.addEventListener("click",(e) => {
    e.preventDefault()
    updateItems(array.filter(a => a.tip=="Pasta"))
})
pizza.addEventListener("click",(e) => {
    e.preventDefault()
    updateItems(array.filter(a => a.tip=="Pizza"))
})
burger.addEventListener("click",(e) => {
    e.preventDefault()
    updateItems(array.filter(a => a.tip=="Burger"))
})

