const closebtns = document.getElementsByClassName("close");
for ( let i =0; i < closebtns.length; i++){
    closebtns[i].addEventListener('click', function() {
        this.parentElement.style.display = 'none'
    }); 
}


