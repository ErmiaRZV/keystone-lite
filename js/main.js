const sect1 = document.querySelector('#sect1')
const sect2 = document.querySelector('#sect2')
const sect3 = document.querySelector('#sect3')
const sect4 = document.querySelector('#sect4')
const sect5 = document.querySelector('#sect5')
const sect6 = document.querySelector('#sect6')
const sect7 = document.querySelector('#sect7')
const sect8 = document.querySelector('#sect8')
const sect9 = document.querySelector('#sect9')
const sect10 = document.querySelector('#sect10')
const sect11 = document.querySelector('#sect11')
const sect12 = document.querySelector('#sect12')
const header = document.querySelector('header')
const bus = document.querySelector('#bus')
const bus2 = document.querySelector('#bus2')
const busChildren = document.querySelectorAll('#bus>div')
const rightArrow = document.querySelector('#rightArrow')
const leftArrow = document.querySelector('#leftArrow')
const rightArrow2 = document.querySelector('#rightArrow2')
const leftArrow2 = document.querySelector('#leftArrow2')
const dots = document.querySelector('#dots')
const counter = document.querySelector('#counter')
const counterChildren = document.querySelectorAll('#counter>span')
const dotsChildren = document.querySelectorAll('#dots>span')
const boxes = document.querySelectorAll('.box')
const pp = document.querySelector('.p')
const checkBox = document.querySelector('#checkBox')
const menu = document.querySelector('#menu')
const boxMenu = document.querySelector('#boxMenu')
const boxMenuChildren = document.querySelectorAll('#boxMenu>ul>li')
const divs = document.querySelectorAll('section>div')
const helpp = document.querySelector('#help')
const sect2Children = document.querySelectorAll('#sect2>div>div')




let numDots = 0
dots.children[numDots].style.color='gray'
rightArrow.addEventListener('click',()=>{

    dotsChildren.forEach((val)=>{
        val.style.color='black'
    })

    if(numDots< dotsChildren.length - 1){
        numDots++
    }else{
        numDots=0
        bus.style.transform = `translateX(${ -numDots * (bus.children[0].clientWidth ) }px)`;
    }

   
    dotsChildren[numDots].style.color='gray'
    
    bus.style.transform = `translateX(${ -numDots * (bus.children[0].clientWidth ) }px)`;


    
})
leftArrow.addEventListener('click',()=>{
    dotsChildren.forEach((val)=>{
        val.style.color='black'
    })
    
    if(numDots >0){
        numDots--
    }else{
        numDots=5
        bus.style.transform = `translateX(${ -numDots * (bus.children[0].clientWidth ) }px)`;
    }
  
    dotsChildren[numDots].style.color='gray'
    bus.style.transform = `translateX(${ -numDots * (bus.children[0].clientWidth) }px)`;
  

})

counterSlider = 0
counter.children[counterSlider].style.color = 'gray'
rightArrow2.addEventListener('click',()=>{
    counterChildren.forEach((val)=>{
        val.style.color = 'black'
    })
    if(counterSlider<2){
        counterSlider++
        
        bus2.style.transform = `translateX(${ -counterSlider * (bus2.children[0].clientWidth) }px)`;
    }
    counter.children[counterSlider].style.color = 'gray'
})
leftArrow2.addEventListener('click',()=>{
    counterChildren.forEach((val)=>{
        val.style.color = 'black'
    })
    if(counterSlider>0){
        counterSlider--
        
        bus2.style.transform = `translateX(${ -counterSlider * (bus2.children[0].clientWidth) }px)`;
    }
    counter.children[counterSlider].style.color = 'gray'
})


counterChildren.forEach((val,i)=>{
    val.addEventListener('click' , ()=>{
        counterChildren.forEach(v=>{
            v.style.color = 'black'
        })
        counterSlider = i
        counter.children[counterSlider].style.color = 'gray'
        bus2.style.transform = `translateX(${ -counterSlider * (bus2.children[0].clientWidth) }px)`;
    })
})



boxes.forEach((val,i)=>{
    val.setAttribute('data-flag','true')
    val.addEventListener('click',(e)=>{
        



        if(val.getAttribute('data-flag') == 'true'){
            pp.children[i].children[1].style.height=pp.children[i].children[1].children[0].clientHeight+'px'
            pp.children[i].children[0].children[1].children[0].style.transform='rotate(45deg)'
            val.setAttribute('data-flag','false')
           
            
            
        }else{
            pp.children[i].children[1].style.height='0px'
            pp.children[i].children[0].children[1].children[0].style.transform='rotate(0deg)'
            val.setAttribute('data-flag','true')
        }
    })
})


dotsChildren.forEach((val,i)=>{
    val.style.color='black'
    dotsChildren[numDots].style.color='gray'
    val.addEventListener('click',()=>{
        numDots=i
        bus.style.transform = `translateX(${ -numDots * (bus.children[0].clientWidth ) }px)`;
     
        dotsChildren.forEach(v=>{
            v.style.color='black'
            dotsChildren[numDots].style.color='gray'
            
        })
    })

})

checkBox.setAttribute('data-flag','true')
checkBox.parentElement.addEventListener('click',(e)=>{
    
    if(e.target.children[0].getAttribute('data-flag')  == 'true'){
        e.target.children[0].setAttribute('stroke','white')
        e.target.children[0].setAttribute('data-flag','false')
        
        
    }else{
        e.target.children[0].setAttribute('stroke','transparent')
        e.target.children[0].setAttribute('data-flag','true')
    }
})


menu.setAttribute('data-flag','true')
menu.addEventListener('click',()=>{
    if(menu.getAttribute('data-flag') == 'true'){
        boxMenu.style.top='0'
        menu.setAttribute('data-flag','false')
        menu.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        
        `
    }else{
        boxMenu.style.top='-100vh'
        menu.setAttribute('data-flag','true')
        menu.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        
        `
    }
    
})


boxMenuChildren.forEach((val)=>{
    val.addEventListener('click',()=>{
        boxMenu.style.top='-100vh'
        menu.setAttribute('data-flag','true')
        menu.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        `
    })
})









header.classList.remove('swingBottom')
header.classList.remove('opacity')
sect1.children[0].classList.remove('swingRight')
sect1.children[0].classList.remove('opacity')



sect2Children.forEach(val=>{
    val.classList.add(val.getAttribute('data-mode'))
    
    
})

// for (let i = 0; i < 4; i++) {
//     sect6.children[0].children[i].classList.add(sect6.children[0].children[i].getAttribute('data-mode'))
// }
// for (let i = 0; i < 2; i++) {
//     sect9.children[0].children[i].classList.add(sect9.children[0].children[i].getAttribute('data-mode'))
// }
// for (let i = 0; i < 3; i++) {
//     sect5.children[0].children[0].children[i].classList.add(sect5.children[0].children[0].children[i].getAttribute('data-mode'))
// }
// sect7.children[0].children[0].children[0].classList.add(sect7.children[0].children[0].children[0].getAttribute('data-mode'))
// sect7.children[0].children[0].children[1].children[0].classList.add(sect7.children[0].children[0].children[1].children[0].getAttribute('data-mode'))

// for (let i = 0; i < 2; i++) {
//     helpp.children[0].children[i].classList.add(helpp.children[0].children[i].getAttribute('data-mode'))
//     helpp.children[1].children[i].classList.add(helpp.children[1].children[i].getAttribute('data-mode'))
// }




windowHeight = window.innerHeight / 2

window.addEventListener('scroll',()=>{
    scrollWindow = window.scrollY
    
    divs.forEach(val=>{
        val.classList.add(val.getAttribute('data-mode'))
        if(scrollWindow>(val.offsetTop - windowHeight)){
            val.classList.remove(val.getAttribute('data-mode'))
            val.classList.remove('opacity')
        }else{
            val.classList.add(val.getAttribute('data-mode'))
         
        }
        
    })

    sect2Children.forEach((val)=>{
        val.classList.add(val.getAttribute('data-mode'))
        if(scrollWindow > val.offsetTop - windowHeight){
            val.classList.remove(val.getAttribute('data-mode'))
   
        }else{
            val.classList.add(val.getAttribute('data-mode'))
        }
    })
    for (let i = 0; i < 4; i++) {
        sect6.children[0].children[i].classList.add(sect6.children[0].children[i].getAttribute('data-mode'))
        if(scrollWindow > sect6.children[0].children[i].offsetTop - windowHeight){
            sect6.children[0].children[i].classList.remove(sect6.children[0].children[i].getAttribute('data-mode'))
   
        }else{
            sect6.children[0].children[i].classList.add(sect6.children[0].children[i].getAttribute('data-mode'))
        }
    }
    for (let i = 0; i < 2; i++) {
        sect9.children[0].children[i].classList.add(sect9.children[0].children[i].getAttribute('data-mode'))
        if(scrollWindow > sect9.children[0].children[i].offsetTop - windowHeight){
            sect9.children[0].children[i].classList.remove(sect9.children[0].children[i].getAttribute('data-mode'))
   
        }else{
            sect9.children[0].children[i].classList.add(sect9.children[0].children[i].getAttribute('data-mode'))
        }
    }
    for (let i = 0; i < 3; i++) {
        sect5.children[0].children[0].children[i].classList.add(sect5.children[0].children[0].children[i].getAttribute('data-mode'))
        if(scrollWindow > sect5.children[0].children[0].children[i].offsetTop - windowHeight){
            sect5.children[0].children[0].children[i].classList.remove(sect5.children[0].children[0].children[i].getAttribute('data-mode'))
   
        }else{
            sect5.children[0].children[0].children[i].classList.add(sect5.children[0].children[0].children[i].getAttribute('data-mode'))
        }
    }

    if(scrollWindow> sect7.children[0].children[0].children[0].offsetTop - windowHeight){
        sect7.children[0].children[0].children[0].classList.remove(sect7.children[0].children[0].children[0].getAttribute('data-mode'))
    }else{
        sect7.children[0].children[0].children[0].classList.add(sect7.children[0].children[0].children[0].getAttribute('data-mode'))
    }


    if(scrollWindow> sect8.children[0].children[0].children[0].offsetTop - windowHeight){
        sect8.children[0].children[0].children[0].classList.remove(sect8.children[0].children[0].children[0].getAttribute('data-mode'))
    }else{
        sect8.children[0].children[0].children[0].classList.add(sect8.children[0].children[0].children[0].getAttribute('data-mode'))
    }

    if(scrollWindow> sect8.children[0].children[1].offsetTop - windowHeight){
        sect8.children[0].children[1].classList.remove(sect8.children[0].children[1].getAttribute('data-mode'))
    }else{
        sect8.children[0].children[1].classList.add(sect8.children[0].children[1].getAttribute('data-mode'))
    }

    if(scrollWindow> sect8.children[0].children[2].offsetTop - windowHeight){
        sect8.children[0].children[2].classList.remove(sect8.children[0].children[2].getAttribute('data-mode'))
    }else{
        sect8.children[0].children[2].classList.add(sect8.children[0].children[2].getAttribute('data-mode'))
    }



    if(scrollWindow> sect7.children[0].children[0].children[1].children[0].offsetTop - windowHeight){
        sect7.children[0].children[0].children[1].children[0].classList.remove(sect7.children[0].children[0].children[1].children[0].getAttribute('data-mode'))
    }else{
        sect7.children[0].children[0].children[1].children[0].classList.add(sect7.children[0].children[0].children[1].children[0].getAttribute('data-mode'))
    }

    for (let i = 0; i < 2; i++) {
        if( scrollWindow> (helpp.children[0].children[i].offsetTop - windowHeight)){
            helpp.children[0].children[i].classList.remove(helpp.children[0].children[i].getAttribute('data-mode'))
        }else{
            helpp.children[0].children[i].classList.add(helpp.children[0].children[i].getAttribute('data-mode'))
        }
        if( scrollWindow> (helpp.children[1].children[i].offsetTop - windowHeight)){
            helpp.children[1].children[i].classList.remove(helpp.children[1].children[i].getAttribute('data-mode'))
        }else{
            helpp.children[1].children[i].classList.add(helpp.children[1].children[i].getAttribute('data-mode'))
        }
        
        
    }

    
})