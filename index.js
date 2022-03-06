// function takeValue(){
//     const name = document.getElementById("name").value;
//     const date = document.getElementById("date").value;
//     const month = document.getElementById("month").value;
//     const year = document.getElementById("year").value;
    
//     console.log(name)
//     console.log(date)
//     console.log(month)
//     console.log(year)
    
// }
var nameError = document.getElementById('name-error');
var dateError = document.getElementById('date-error');
var monthError = document.getElementById('month-error');
var yearError = document.getElementById('year-error');

function validateName(){
    const fName = document.getElementById('fName').value;

    if (fName.length == 0){
        nameError.innerHTML= 
        'Name is required';
        return false;
    }
    if (!fName.match(/^[a-zA-z]/)){
        nameError.innerHTML= 
        'Write name using alphabets';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}
function validateDate(){
    const date = document.getElementById('date').value;

    if (date.length == 0){
        dateError.innerHTML='Date is required';
        return false;
    }
    if ( date.length <=1){
        dateError.innerHTML='Date is two number only';
        return false;
    }
    if (!date.match(/[0-31]/)){
        dateError.innerHTML='write a date between 0-31';
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}