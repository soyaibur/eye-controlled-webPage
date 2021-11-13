// ....Global Element & setup & variable & function and others......
 window.saveDataAcrossSessions = true
const startLookTime = Number.POSITIVE_INFINITY
let imageElement = getNewImage()
let nextImageElement = getNewImage(true)
// getting the portion where to look to slide
const LEFT_CUTOFF = window.innerWidth / 4  //269
const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4  //782
// Looking delay
const LOOK_DELAY = 1000 //1 second
webgazer.setGazeListener((data,timeStamp)=>{
 
}).begin() 
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//.....All Element Selection will be undernith here...........
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All EventListener go undernith here...........
// :::::::::::::::::::::::::::::::::::::::::::::::::::


// ......All Function will go here undernith.........................
function getNewImage(next = false){
    const img = document.createElement('img')
    img.src = "https://picsum.photos/1000?" + Math.random()
     if(next)img.classList.add('next')
    document.body.appendChild(img)   
    return img
}
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::





//All code will be deleted here.............
function printOut(text){
    const div = document.createElement('div')
    div.innerHTML = text
    document.body.appendChild(div)
}
// addEventListener('click',()=>{
//     alert("this is working")
// })
// :::::::::::::::::::::::::::::::::::::::::