const container = document.querySelector(".container")

function createGrid(size){
    container.innerHTML = ''

    const squareSize = 500 / size

    for(let i = 0; i < size * size; i++){
        const div = document.createElement('div')
        div.classList.add("newDiv")

        div.style.width = `${squareSize}px`
        div.style.height = `${squareSize}px`

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "brown"
        })

        container.appendChild(div)

    }

}

createGrid(16)

const add = document.querySelector("#add")




function getButton(){
    add.addEventListener("click", () => {
            let size = prompt("Choose a number please")
            createGrid(size)
    })
}

getButton()


const reset = document.querySelector("#reset")

function resetButton() {
    reset.addEventListener("click", () => {
        // Clear the container
        container.innerHTML = ""; 
        // Call the createGrid function to generate the grid
        createGrid(16);
    });
}

resetButton()