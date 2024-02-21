var elElement = document.querySelector('.element')
var elWrapper = document.querySelector('.wrapper')
var elP = document.querySelector('.p')

var mode = true
function fn(){
    if(mode == true){
        elElement.classList.add('light') 
        elElement.classList.remove('dark')  
        elWrapper.style.background = '#fff'
        elP.style.color = '#000'

    }else{
        elElement.classList.add('dark')
        elElement.classList.remove('light')
        elWrapper.style.background = '#000'
        elP.style.color = 'white'

    }
    mode=!mode
    console.log(mode);
    console.log(p);
}