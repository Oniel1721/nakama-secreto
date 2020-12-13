const d = document
const audios = ['audio/op14.mp3', 'audio/op16.mp3']
const $audio = d.querySelector('audio'), 
$source = d.querySelector('audio source')
let audioIndex = 0
const changeSong = ()=>{
    $audio.pause()
    $audio.src = audios[audioIndex]
    $audio.play()
}

d.addEventListener("DOMContentLoaded", e=>{
    d.addEventListener('click', e=>{
        if(e.target === d.querySelector('.btn-menu')){
            d.querySelector('nav').classList.toggle('active')
            if(e.target.textContent === 'F'){
                e.target.textContent = 'Ñ'
            } 
            else {
                e.target.textContent = 'F'
            }
        }

        if(e.target.classList.contains('link')){
            d.querySelector('nav').classList.remove('active')
            let to = e.target.getAttribute('data-to')
            window.location.assign(`#${to}`)
        }

        if(e.target.classList.contains('back')){
            if(audioIndex === 0){
                audioIndex = audios.length-1
            }
            else{
                audioIndex--;
            }
            changeSong()
        }
        if(e.target.classList.contains('next')){
            if(audioIndex === audios.length-1) {
                audioIndex = 0
            }
            else{
                audioIndex++;
            }
            changeSong()
        }
    })
})
