import { adjWordList, nounWordList } from './dict.js'
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
function generateUsername() {
  const adj = capitalizeFirstLetter(
    adjWordList[Math.floor(Math.random() * adjWordList.length)],
  )
  const noun = capitalizeFirstLetter(
    nounWordList[Math.floor(Math.random() * nounWordList.length)],
  )
  
  if (noun === "Cherry") {
    document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/5a/cf/5c/5acf5cf94ba02f8a742fc75d8294937e.jpg')";
    document.getElementById("contentBox").style.backgroundColor= "#f0f8ff"
  } else {
    document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/c9/3b/fa/c93bfaba410d63022a1bbd34483370a9.jpg')";
    document.getElementById("contentBox").style.backgroundColor = "#f0f8ff8f"
  }
  
  return adj + '_' + noun
}

document.getElementById('generate').addEventListener('click', () => {
  const word = document.getElementById('word')
  const username = generateUsername()
  word.innerText = username
})
