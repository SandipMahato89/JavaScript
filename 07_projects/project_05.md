# Projects related to DOM

## project link

[click here](https://dom-project-chaiaurcode-rglzkx.stackblitz.io) 

## Project 5 solution code

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
    <div id='color'>
    <table>
    <tr>
      <td>Key</td>
      <td>Key Code</td>
      <td>Code</td>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `;
});

```