const intro__text = document.querySelector('.intro__text')


let str = intro__text.innerHTML
intro__text.innerHTML = ''

function texts(i = 0) {
    intro__text.innerHTML += str[i]
    i++
    if (i < str.length) {
        setTimeout(() => {
            texts(i)
        }, 20);

    }

}
setTimeout(() => {
    texts()
}, 300);

const petBox = document.querySelector('.pet__box'),
    petCard = document.querySelectorAll('.pet__card'),
    productBox = document.querySelector('.product__box'),
    productCard = document.querySelectorAll('.product__card'),
    shopBox = document.querySelector('.shop__box'),
    shopCard = document.querySelectorAll('.shop__card'),
    docBox = document.querySelector('.doc__box'),
    docCard = document.querySelectorAll('.doc__card'),
    newBox = document.querySelector('.new__wrapper'),
    newCard = document.querySelector('.new__box'),
    newImg = document.querySelectorAll('.new__imgbox')

window.addEventListener("scroll", function scrol() {
    if (scrollY > petBox.offsetTop - petBox.clientHeight / 1.5) {
        petCard.forEach(card => {
            card.classList.add("active")
        })
    }

})

window.addEventListener("scroll", function scrol() {
    if (scrollY > productBox.offsetTop - productBox.clientHeight / 0.5) {
        productCard.forEach(card => {
            card.classList.add("active")
        })
    }
})

window.addEventListener("scroll", function scrol() {
    if (scrollY > shopBox.offsetTop - shopBox.clientHeight / 0.6) {
        shopCard.forEach(card => {
            card.classList.add("active")
        })
    }
})

window.addEventListener("scroll", function scrol() {
    if (scrollY > docBox.offsetTop - 500) {
        docCard.forEach(card => {
            card.classList.add("active")
        })
    }
})



window.addEventListener("scroll", function scrol() {
    if (scrollY > newBox.offsetTop - newBox.clientHeight / 1) {
        newImg.forEach(card => {
            card.classList.add("active")
        })

        newCard.classList.add("active")

    }
})