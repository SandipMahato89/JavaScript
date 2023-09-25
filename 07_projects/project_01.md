# Projects related to DOM

## project link

[click here](https://dom-project-chaiaurcode-rglzkx.stackblitz.io) 

``` javascript 

const buttons = document.querySelectorAll('.button');
// console.log(b uttons)
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target.id);
    const ch = e.target.id;
    if (ch === 'grey') {
      body.style.backgroundColor = ch;
    }
    if (ch === 'white') {
      body.style.backgroundColor = ch;
    }
    if (ch === 'blue') {
      body.style.backgroundColor = ch;
    }
    if (ch === 'yellow') {
      body.style.backgroundColor = ch;
    }
    if (ch === 'green') {
      body.style.backgroundColor = ch;
    }
  });
});



```