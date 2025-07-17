

// variables


const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const input = document.getElementById('user-input');
const resultsContainer = document.getElementById('results-div');




// button listeners

check.addEventListener('click', ()=>{
    
    if(input.value === ""){
        alert("Please provide a phone number");
        return;
    }else{
        console.log(input.value);
        input.value = "";
    }

});

clear.addEventListener('click',()=>{
    
    resultsContainer.innerHTML = "";

});