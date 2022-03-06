
const nameError = document.getElementById('name-error');
const bDate = document.getElementById('bDate').value;
const gender = document.getElementById('gender').value;
const fName = document.getElementById('fName').value;



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

getAkan.addEventListener("submit", (g)=>
    
    

    {var newDate = new date(bDate)
    var day = newDate.getDay()
    if (bDate==""){
        alert("Enter your birthday correctly");
    }
    if (gender==""){
        alert("Choose your gender");
    }
    else{
        if (gender===Male){
            Container.innerHTML='fname'+" your Akan Name is ${akanMale[day]}";
        }else{
            Container.innerHTML='fname'+" your Akan Name is ${akanFemale[day]}";
        }
    }
    }














)