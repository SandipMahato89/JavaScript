# Projects related to DOM

## project link

[click here](https://dom-project-chaiaurcode-rglzkx.stackblitz.io)  

## Project-3 solution code

```javascript

    const clock = document.getElementById('clock')
    // const clock = document.querySelector('#clock')


    setInterval(function() {
        let date = new Date()
        // console.log(date.toLocaleTimeString())
        clock.innerHTML = date.toLocaleTimeString()
    }, 1000)

```