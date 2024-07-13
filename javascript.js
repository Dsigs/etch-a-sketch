const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    div = document.createElement('div');
    div.classList.add('grid'); 
    for (j = 0; j < 16; j++) {
        div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
    container.appendChild(div);
}

let grid = document.querySelectorAll('.grid');

grid.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = 'black';
    });
});

console.log(grid);