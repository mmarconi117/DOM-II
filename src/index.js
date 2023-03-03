import './less/index.less'

// Your code goes here!

// click
document.body.addEventListener('click', evt =>{
    evt.target.classList.toggle('mirror')
})

//dblClick

document.body.addEventListener('dblclick', event =>{
    event.target.outerHTML = 'GOTCHA!'
})


//keydown

window.addEventListener("keydown", event =>{
    if (event.key == 6){
        document.body.innerHTML = '<h1>GOTCHA!!</h1>'
    }
})


// wheel;\

document.body.addEventListener('wheel', event =>{
    event.target.classList.toggle('wheel')
})


//mouseenter/mouseleave

const destinations = document.querySelectorAll('.destination')

for (let destination of destinations){
    destination.addEventListener('mouseenter', () =>{
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => [
        destination.style.fontWeight = 'initial'
    ])
}
