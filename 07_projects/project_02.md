# Projects related to DOM

## project link

[click here](https://dom-project-chaiaurcode-rglzkx.stackblitz.io)  

## Project-2 solution code

```javascript

    const form = document.querySelector('form');
// this usecase will give an empty value
// const height= parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // to stop the default action that is submit

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const status = document.querySelector('#status');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    results.innerHTML = `<span> ${bmi} </span>`;

    //show BMI guide status

    if (bmi < 18.6) {
      status.innerHTML = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status.innerHTML = 'Normal Range';
    } else if (bmi > 24.9) {
      status.innerHTML = 'OverWeight';
    }
  }
});


```

