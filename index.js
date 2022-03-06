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
var date = document.getElementById('bDate');
var gender = document.getElementById('gender').value;
var fName = document.getElementById('fName').value;
console.log(date,gender,fName)



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


var akanMale =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "kaw", "Kofi", "Kwame"];
var akanFemale =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var Akan;

