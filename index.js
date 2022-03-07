const nameError = document.getElementById('name-error');

function validateName(){
    const fName = document.getElementById('fName').value;

    if (fName==0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if (!fName.match(/^[a-zA-z]/)){
        nameError.innerHTML='Name is only character not Number';
        return false;
    }
        nameError.innerHTML='Valid';
        return true;

}   
getAkan.addEventListener("submit",function generate(a,b){
    // e.preventDefault();
    const userData = document.userform.value;
    var bDate = userData.get("b-Date")
    var gender =userData.get("g-Gender")
    const akanName = document.getElementById("akanName");
    // const bDate = document.getElementById("bDate").value;
    
    var newDate = new Date(bDate); 
    var Day = bDate.getDay()
    
    var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var akanMale = ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    if(bDate==""){
        alert ("Input your date of birth");
        
    }else if(gender==""){
        alert("Select one gender");
    }else{
        if(gender=="Male"){
            akanName.innerHTML = `Your khan name is ${akanMale[Day]}`
        }else{
            akanName.innerHTML = `Your khan name is ${akanFemale[Day]}`
        }
 
    }
});









