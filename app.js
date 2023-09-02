

const closebtns = document.getElementsByClassName("close");

for ( let i =0; i < closebtns.length; i++){
    closebtns[i].addEventListener('click', function() {

        const items = document.getElementsByClassName("colour")

        if (items.length > 1 ) {
        this.parentElement.style.display = 'none'
        } else {
        this.style.display = 'none'
        }


    }); 
}



