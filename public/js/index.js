const d = document
const audios = [1,2,3,4,5,6]
const $music = d.querySelector('#music')
let audioIndex = 0
const changeSong = ()=>{
    $music.pause()
    $music.src = `audio/${audios[audioIndex]}.mp3`
    $music.play()
}

const nextSong = ()=>{
    if(audioIndex === audios.length-1) {
        audioIndex = 0
    }
    else{
        audioIndex++;
    }
    changeSong()

}

const previousSong = ()=>{
    if(audioIndex === 0){
        audioIndex = audios.length-1
    }
    else{
        audioIndex--;
    }
    changeSong()
}

const changeVol = (val)=>{
    if(val>0){
        if($music.muted) $music.muted = false
        if($music.volume + val <= 1){
            $music.volume += val
        }
        else{
            $music.volume = 1
        }

    }
    else{
        if($music.volume + val >= 0){
            $music.volume += val
        }
        else{
            $music.muted = true
        }
    }
}

const pausePlaySong = ()=>{
    if($music.paused){
        $music.play()
    }
    else{
        $music.pause()
    }
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
            d.querySelector('.btn-menu').textContent = 'F'
            window.location.assign(`#${to}`)
        }

        if(e.target.classList.contains('back')){
            previousSong()
        }
        if(e.target.classList.contains('next')){
            nextSong()
        }
    })

    d.addEventListener('keydown', e=>{
        if(e.code === "ArrowLeft"){
            e.preventDefault()
            previousSong()
        }
        else if(e.code === "ArrowRight"){
            e.preventDefault()
            nextSong()
        }
        else if(e.code === "ArrowUp"){
            e.preventDefault()
            changeVol(0.1)
        }
        else if(e.code === "ArrowDown"){
            e.preventDefault()
            changeVol(-0.1)
        }
        else if(e.code === "Space"){
            e.preventDefault()
            pausePlaySong()
        }
    })
})
