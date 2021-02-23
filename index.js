const typed_text = document.querySelector('.typed-text')

const text_array = ['a competitve programmer' , 'and a web developer']

const typing_delay = 200
const erase_delay = 100
const new_text_delay = 2000

let array_idx = 0
let char_idx = 0


function type(){
    if(char_idx < text_array[array_idx].length){
        typed_text.textContent += text_array[array_idx].charAt(char_idx)
        char_idx++
        setTimeout(type,typing_delay)
    }else{
        setTimeout(erase,new_text_delay)
    }
}   

function erase(){
    if(char_idx > 0){
        typed_text.textContent = text_array[array_idx].substring(0,char_idx-1)
        char_idx-=1
        setTimeout(erase,erase_delay)
    }else{
        array_idx+=1
        if(array_idx >= text_array.length){
            array_idx=0
        }
        setTimeout(type,typing_delay + 1100)
    }
}

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(type,new_text_delay + 250)
})