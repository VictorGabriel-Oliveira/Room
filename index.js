const imagen_hero = document.getElementById('image-hero')
const shopNowConteiner1 = document.getElementById('shopNowConteiner1')
const shopNowConteiner2 = document.getElementById('shopNowConteiner2')
const shopNowConteiner3 = document.getElementById('shopNowConteiner3')
const state = ["imageHero1", 'imageHero2','imageHero3']

let i = 0
imagen_hero.classList.add(state[i])


function pageMove(direction){
   
    imagen_hero.classList.remove(state[i])
    if(direction === 'rigth' && i < state.length -1){
        i+= 1
        
        
    }
    if (direction === 'left' && i > 0){
        i-= 1
        
    }
    let className = state[i]
        
    imagen_hero.classList.add(className)
    if(state[i] === state[0]){
        
        shopNowConteiner1.style.display = 'flex'
        shopNowConteiner2.style.display = 'none'
        shopNowConteiner3.style.display = 'none'
    }
    if(state[i] === state[1]){
       
        shopNowConteiner1.style.display = 'none'
        shopNowConteiner2.style.display = 'flex'
        shopNowConteiner3.style.display = 'none'
    }
    if(state[i] === state[2]){
       
        shopNowConteiner1.style.display = 'none'
        shopNowConteiner2.style.display = 'none'
        shopNowConteiner3.style.display = 'flex'
    }
    
}

function menu(resonse){
    if(resonse === 'open'){
        document.getElementById('logo').style.display = 'none'
        document.getElementById('hamburger').style.display = 'none'
        document.getElementById('list').style.display = 'flex'
        document.getElementById('close').style.display = 'block'
    }
    if (resonse === 'close'){
        document.getElementById('logo').style.display = 'block'
        document.getElementById('hamburger').style.display = 'block'
        document.getElementById('list').style.display = 'none'
        document.getElementById('close').style.display = 'none'
    }
    
}



