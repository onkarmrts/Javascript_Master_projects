const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['green', 'blue', 'yellow', 'pink', 'red', 'sky'];

body.style.backgroundColor = "red";
button.addEventListener('click', changeBackgroundcolor);

function changeBackgroundcolor(){
          const colorIndex = parseInt(Math.random()*colors.length);
          body.style.backgroundColor = colors[colorIndex];

}

