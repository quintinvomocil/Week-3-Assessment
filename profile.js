const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

const myFavColor = () =>{

    alert("My favorite color is white because it conatins the entire color spectrum!")
}

const myFavPlace = () => {

    alert("My favorite place that I have been to was Italy. The food was delicious and the art sublime!")
}

const myFavRit = () =>{

    alert("My ritual these days is to go to DevMountain to learn code, go to the gym, and play LOL Wild Rift.")
}

colorBtn.addEventListener("click", myFavColor)
placeBtn.addEventListener("click", myFavPlace)
ritualBtn.addEventListener("click", myFavRit)

const skillsPic = document.getElementById("skills-photo")

const skillsRevealed = () => {
    document.querySelector(".skills").style.visibility = "visible"
    document.querySelector(".skills").style.color = "red"

    document.querySelector(".skills-p").style.visibility = "visible"
    document.querySelector(".skills-p").style.color = "red"

    document.querySelector(".skills-list").style.visibility = "visible"
    document.querySelector(".skills-list").style.color = "red"
}

skillsPic.addEventListener("click", skillsRevealed)

const interestPhoto = document.getElementById("interests-photo")

const interestRevealed = () => {
    document.querySelector(".interests").style.visibility = "visible"
    document.querySelector(".interests").style.fontStyle = "bold"

    document.querySelector(".interests-p").style.visibility = "visible"
    document.querySelector(".interests-p").style.color = "green"
}

interestPhoto.addEventListener("click", interestRevealed)


