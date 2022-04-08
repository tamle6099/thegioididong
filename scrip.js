const adressbtn = document.querySelector("#adress-menu")
const adressCloss = document.querySelector("#adress-closs")
const imgNumber = document.querySelectorAll(".slider-content-left-top img")
let index = 0
// console.log(rightbtn)
adressbtn.addEventListener('click',function(){
    document.querySelector(".adress-menu").style.display = 'flex'
})
adressCloss.addEventListener('click',function(){
    document.querySelector(".adress-closs").style.display = "none"
})
// slider
const rightbtn = document.querySelector(".ti-angle-right")
const leftbtn = document.querySelector(".ti-angle-left")
rightbtn.addEventListener("click",function(){
    index = index+1
    if (index > imgNumber.length - 1) {
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
})
leftbtn.addEventListener("click",function(){
    index = index-1
    if (index <= 0) {
        index = imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index*100 + "%"  
})
// ------------------
const imgNumberli = document.querySelectorAll(".slider-content-left-bottom li")
imgNumberli.forEach(function(image,index){
    image.addEventListener('click',function(){
        document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
        removeActive()
        image.classList.add('active')
    })
})
function removeActive (){
    let imgActice = document.querySelector('.active')
    imgActice.classList.remove("active")
}
// ---------------
function imgAuto () {
    index = index+1
    if (index > imgNumber.length - 1) {
        index = 0
    }
    removeActive()
    document.querySelector(".slider-content-left-top").style.right = index*100 + "%"
    imgNumberli[index].classList.add('active')
}

setInterval(imgAuto,5000)