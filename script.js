const cardFor = document.getElementById("card-for"),
    cardWhile = document.getElementById("card-while");

const listFor = document.getElementById("list-for");
const listWhile = document.getElementById("list-while")

let isClickFor = false, isClickWhile = false

function showFor() {
    if(isClickFor) {
        cardFor.classList.add("hide");
        listFor.innerHTML = '';

    } else {

        let content = '';
        for( let one = 1; one <= 10; one++) {
            content = content.concat(one, ', '); 
        }
        
        listFor.innerHTML = content;
    
        cardFor.classList.remove("hide");
    }

    isClickFor = !isClickFor;

    /*    console.log("showFor", content) */
}

function showWhile() {
    if(isClickWhile) {
        cardWhile.classList.add("hide");
        listWhile.innerHTML = ''; 

    } else {
        let content = '', two = 1;  
        while(two <= 10) {
            content = content.concat(two, ', ');
            two++;
        }
    
        listWhile.innerHTML = content;
    
        cardWhile.classList.remove("hide")
    }

    isClickWhile = !isClickWhile;
    /* console.log("showWhile", content) */
}

