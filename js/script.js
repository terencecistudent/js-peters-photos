const displayedImage = document.querySelector('.displayed-img');

const imageLoop = document.querySelector('.image-loop ');

// Looping through images
for(let i = 1; i <= 36; i += 1) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + i + '-min.jpeg');
    newImage.setAttribute('class', 'img-fluid displayed-img');
    newImage.setAttribute('style', 'max-width: 380px; margin: 10px;');
    imageLoop.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
    };
}
