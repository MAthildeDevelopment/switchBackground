const autos = ['contBcg-0.jpeg', 'contBcg-1.jpeg', 'contBcg-2.jpeg', 'contBcg-3.jpeg', 'contBcg-4.jpeg'];
const buttons = document.querySelectorAll('.btn');
let container = document.querySelector('.img-container');


/*----- Default background when the page is loaded -----*/
window.onload = function() {
    let defaultBackground = autos[0];
    container.style = `
        background-image: url(img/${defaultBackground});
    `;
}





const random = () => {
    let randomImg = autos[Math.floor(Math.random() * autos.length)];
    return randomImg;
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        let randomBackground = random();
        container.style = `
            background-image: url(img/${randomBackground});
        `;
    });
});

    
