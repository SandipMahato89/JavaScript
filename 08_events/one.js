// document.getElementById('owl').onclick = function() {
//     alert('owl clicked')
// }

// attachEvent()
// jQuery - on

 // type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('click inside ul');
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log('owl clicked');
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('owl clicked');
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('google clicked');
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
}, false)

// With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

// With capturing, the event is first captured by the outermost element and propagated to the inner elements.