import {adjWordList, nounWordList} from './dict.js'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function generateUsername() {
    const adj = capitalizeFirstLetter(adjWordList[Math.floor(Math.random() * adjWordList.length)],)
    const noun = capitalizeFirstLetter(nounWordList[Math.floor(Math.random() * nounWordList.length)],)

    if (noun === "Cherry") {
        document.body.style.backgroundImage = "url('/images/Cherry.jpg')";
        document.getElementById("contentBox").style.backgroundColor = "#f0f8ff"
    } else {
        document.body.style.backgroundImage = "url('/images/Flowers.jpg')";
        document.getElementById("contentBox").style.backgroundColor = "#f0f8ff8f"
    }

    return adj + '_' + noun
}

document.getElementById('generate').addEventListener('click', () => {
    const word = document.getElementById('word')
    word.innerText = generateUsername()
})
