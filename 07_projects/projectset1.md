# Project related to DOM

## Project link
[Click here] (https://stacklitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1
```javascript
let buttons = document.querySelectorAll(".button");
let body = document.querySelector('body')

buttons.forEach((val)=> {
    val.addEventListener('click', function(e) {
        // console.log(e)
        if(e.target.id == 'grey') {
            body.style.backgroundColor = e.target.id
        }
        switch (e.target.id.toString()) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
})
```