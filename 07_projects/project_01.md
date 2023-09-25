# Projects related to DOM

## project link

[click here](https://dom-project-chaiaurcode-rglzkx.stackblitz.io) 

## using if else

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

## using switch case

```javascript
    const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target.id);
    const ch = e.target.id;
    console.log(ch);    
    switch (ch) {
      case 'grey':
        body.style.backgroundColor = ch;
        break;
      case 'white':
        body.style.backgroundColor = ch;
        break;
      case 'blue':
        body.style.backgroundColor = ch;
        break;
      case 'yellow':
        body.style.backgroundColor = ch;
        break;
      case 'green':
        body.style.backgroundColor = ch;
        break;
      default:
        body.style.backgroundColor = 'white';
    }
  });
});

```