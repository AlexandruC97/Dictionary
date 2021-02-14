let dictionar=[];

function add_word(){
    dictionar =dictionar.concat(getInputValue());
    //alert(dictionar);
}

function search_word(){
    if(dictionar.includes(getVerifyValue())){
        alert("The word is already in the dictionary!");
    }
}

function getInputValue(){
    let inputVal = document.getElementById("search-word").value;
    return inputVal;
}
function getVerifyValue(){
    let verifyVal = document.getElementById("verify-word").value;
    return verifyVal;
}