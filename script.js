



const start = document.querySelector('button')
const saisi = document.querySelector('.saisi')
const valider  =document.querySelector('.valider')
const chrono = document.querySelector('.chrono')
const nbrMystere = document.querySelector('.mystere')
const msgHelp = document.querySelector('.help')
let count = 10 , mystere , level = 5 

start.addEventListener('click',()=>{
    mystere= Math.floor(Math.random()* level)
    nbrMystere.innerText = level
    chrono.style.color ="#fff"
    start.style.display = "none"
    activeForm()
    Chrono()
})


function activeForm(){document.querySelectorAll('input').forEach(input=>input.removeAttribute("disabled"))}
function desactiveForm(){document.querySelectorAll('input').forEach(input=>input.setAttribute("disabled"))}

function Chrono(){
    const myInterval = setInterval(()=>{
        count--
        chrono.innerText = count
        if(count<=-1){
            clearInterval(myInterval)
            chrono.innerText = 00
            alert('Vous avez perdu ! \n Veuillez essayer à nouveau ')  
            start.style.display = "block"
            level = 5 
            count = 10 
        }
        if(saisi.value === mystere){
            clearInterval(myInterval)
        }
        if(count <= 5 ){
            chrono.style.color = 'red'
        }

    } , 1000)
}


valider.addEventListener('click',(e)=>{
    e.preventDefault() 
    if(saisi.value < mystere) {
        msgHelp.innerText = 'Le nombre mystère est supérieur à  '+saisi.value
        saisi.value =''
    }else if(saisi.value > mystere){
        msgHelp.innerText = 'Le nombre mystère est inférieur à  '+saisi.value
        saisi.value =''
    }else{
        alert('Bravo vous avez gagner ! \n Le nombre mystère est bien : '+ saisi.value + '\n Aller au niveau suivant') 
        msgHelp.innerText = ' '
        level += 5 
        count += 10
        saisi.value = ''
        mystere= Math.floor(Math.random()* level)
        nbrMystere.innerText = level
        chrono.style.color ="#fff"
        
    }
})

