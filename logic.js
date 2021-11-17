// ....Global Element environmantel Setup ..........................
window.saveDataAcrossSessions = true 
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//.....All Element Selection & programization...........
const LEFT_CUTOFF = window.innerWidth / 4
const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4

const lookDelay = 1000 //1second
let startLookTime = Number.POSITIVE_INFINITY
let lookingDirection = null

var imageElement = getimageElement()
var nextimageElement = getimageElement(true)
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// .....All EventListener go undernith here...........
webgazer.setGazeListener((data,timestamp)=>{
  if(data == null || lookingDirection == 'STOP') return

  if(data.x < LEFT_CUTOFF && lookingDirection !== 'LEFT' && lookingDirection !== 'RESET'){
     startLookTime = timestamp
     lookingDirection = "LEFT"
  } else if(data.x > RIGHT_CUTOFF && lookingDirection !== 'RIGHT' && lookingDirection !== 'RESET'){
     startLookTime = timestamp
     lookingDirection = "RIGHT"
  } else if(data.x > LEFT_CUTOFF && data.x < RIGHT_CUTOFF){
    startLookTime = Number.POSITIVE_INFINITY
    lookingDirection = null
  }

  

  if(startLookTime + lookDelay < timestamp){
    if(lookingDirection == 'LEFT'){
      imageElement.classList.add('left')
    } else{
      imageElement.classList.add('right')
    }

    startLookTime = Number.POSITIVE_INFINITY
    lookingDirection = 'STOP'
    setTimeout(()=>{
      imageElement.remove()
      nextimageElement.classList.remove('next')
      imageElement = nextimageElement
      nextimageElement = getimageElement(true)
      lookingDirection = 'RESET'
    },200)

  //   // startLookTime = Number.POSITIVE_INFINITY
  //   // lookingDirection = 'STOP'
  //   // setTimeout(()=>{
  //   //   imageElement.remove()
  //   //   nextimageElement.classList.remove('next')
  //   //   imageElement = nextimageElement
  //   //   nextimageElement = getimageElement(true)
  //   //   lookingDirection = 'RESET'
  //   // }, 200)
  // }

  }
}).begin()
// :::::::::::::::::::::::::::::::::::::::::::::::::::
// ......All Function will go here undernith.........................
function getimageElement(next = false){
  const img = document.createElement('img')
  img.src = 'https://picsum.photos/1000?' + Math.random()
  if(next) img.classList.add('next')
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