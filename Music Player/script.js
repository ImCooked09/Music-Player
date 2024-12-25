var arr = [
    { songName: "I Wanna Be Yours", url: "./Assests/audio/1.mp3", duration: "3.75", Img: "https://i.pinimg.com/736x/44/dd/ad/44ddadcceebfe889c3fedae5ea1e6629.jpg" },
    { songName: "Someone To You", url: "./Assests/audio/2.mp3", duration: "2.65", Img: "https://i.pinimg.com/736x/78/e0/d0/78e0d09f89bfcf24d175625a539916ba.jpg" },
    { songName: "Freaks", url: "./Assests/audio/4.mp3", duration: "1.92", Img: "https://i.pinimg.com/736x/80/b7/95/80b795019d51b797d735c3a9dff401a5.jpg" },
    { songName: "You Belong To Me", url: "./Assests/audio/3.mp3", duration: "2.35", Img: "https://i.pinimg.com/originals/2c/8d/d3/2c8dd3c9f624ab02e62dec1de74c01f0.png" }
]

var allsongs = document.querySelector(".all-songs")
var selectedSong = 0
var audio = new Audio()
var poster = document.querySelector(".left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

function MainFunction() {
    var demo = ""

    arr.forEach(function (Element, index) {
        demo += `<div class="songs-card" id= ${index}>
                    <div class="part1">
                        <img src= ${Element.Img} alt="">
                        <h2>${Element.songName}</h2>
                    </div>
                    <div class="part2">
                        <h6>${Element.duration}</h6>
                    </div>
                </div>`

    })
    allsongs.innerHTML = demo

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].Img})`
}
MainFunction()


//dets can be any variable
allsongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1
    MainFunction()
    audio.play()
})

var flag = 0
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-line"></i>`
        MainFunction()
        audio.play()
        flag = 1
    }
    else {
        play.innerHTML = `<i class="ri-play-fill"></i>`
        MainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function() {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        MainFunction()
        audio.play()
    }
    else{
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function() {
    if (selectedSong > 0) {
        selectedSong--
        MainFunction()
        audio.play()
    }
    else{
        backward.style.opacity = 0.4
    }
})
