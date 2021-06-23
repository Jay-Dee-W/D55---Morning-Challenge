const chips = []
const inputText = document.querySelector('#inputText')
const chipDisplay = document.querySelector('.container')
const addButton = document.getElementById("addChip")


addButton.addEventListener('click' , () => {
    addChip()
})
function displayChips(currentName) {
    const chip = document.createElement('div')
    chip.className = 'chips'
    const img = document.createElement('img')
    img.src = "bBHe98c.png"
    const name = document.createElement('p')
    name.innerText = currentName
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'
    deleteButton.onclick = deleteChip

    chip.appendChild(img)
    chip.appendChild(name)
    chip.appendChild(deleteButton)

    chipDisplay.appendChild(chip)
}

function addChip() {
   if (inputText.value){
        displayChips(inputText.value)
        inputText.value = ''
   }
}

function deleteChip() {
  
    chipDisplay.removeChild(event.target.parentNode)
}