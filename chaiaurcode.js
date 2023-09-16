const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);

    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target); // tel about the clicked elemnets id everything
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;// grey
        // }

        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
            case 'blue':
                 body.style.backgroundColor = e.target.id;
            case 'white':
                body.style.backgroundColor = e.target.id;
            case 'purple':
                body.style.backgroundColor = e.target.id;
            case 'green':
                body.style.backgroundColor = e.target.id;
            case 'red':
                body.style.backgroundColor = e.target.id;
            case 'pink':
                body.style.backgroundColor = e.target.id;
        }
    });
});