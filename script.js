

// variables


const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const input = document.getElementById('user-input');
const resultsContainer = document.getElementById('results-div');


//functions

function logicDoer(value){

     if(value === ""){
        alert("Please provide a phone number");
        return;
    }else{
        const validated = numberValidate(value);
        htmlAdd(validated, value);
    }

    input.value = "";

}

const numberValidate = (input) => {

    const regex = /^(1\s?)?((\(\d{3}\))|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    if(regex.test(input)){
        return "Valid";
    }else{
        return "Invalid";
    }
    
}

const htmlAdd = (string, input) => {
    resultsContainer.innerHTML += `<p id="results-text">${string} US number: ${input}</p>`
}



// button listeners

check.addEventListener('click', ()=>{
    logicDoer(input.value);
});

clear.addEventListener('click',()=>{
    resultsContainer.innerHTML = "";
});

document.addEventListener('keydown', function(button){

    if(button.code === "Enter"){
        logicDoer(input.value);
    }

});