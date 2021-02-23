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

    }
}   

type()