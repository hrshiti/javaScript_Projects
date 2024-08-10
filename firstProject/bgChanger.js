const  btn2 = document.querySelectorAll(".btn")
const body = document.querySelector("body")

btn2.forEach(function(btn){
    btn.addEventListener('click', function(e){
       if (e.target.id=== 'red'){
        body.style.backgroundColor = e.target.id
       }
       if (e.target.id=== 'blue'){
        body.style.backgroundColor = e.target.id
       }
       if (e.target.id=== 'yellow'){
        body.style.backgroundColor = e.target.id
       }
       if (e.target.id=== 'green'){
        body.style.backgroundColor = e.target.id
       }
       if (e.target.id=== 'black'){
        body.style.backgroundColor = e.target.id
        body.style.color = 'white'
       }
    })
})