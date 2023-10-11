// option: 1
/* <button onclick="console.log(1);">click here !</button>  */

// option: 2
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// option: 3
const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeblue;

    function makeblue(){
    document.body.style.backgroundColor = 'blue';
}
// option: 3 antoher
const purpelButton = document.getElementById('make-purple');
    purpelButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}
// option: 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makepink);

function makepink(){
 document.body.style.backgroundColor = 'pink';
}
// option: 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function greenButton (){
    document.body.style.backgroundColor = 'green';
} )
// option: FINAL
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
