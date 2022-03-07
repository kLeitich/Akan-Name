const nameError = document.getElementById('name-error');
const fName = document.getElementById('fName').value;

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



const submitBtn = document.getElementById("getAkan");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const myGender = document.userform.gender.value;
    const akanName = document.getElementById("akanName");
    const dayDob = document.getElementById("dob").value;
    var newDob = new Date(dayDob); 
    var day = newDob.getDay()
    var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var mNames = ["Kwasi", "Kwadwo","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    if(dayDob==""){
        alert ("Input your birthday date"); 
    }else if(myGender==""){
        alert("Choose your gender");
    }else{
        if(myGender=="male"){
            akanName.innerHTML = `Your khan name is ${mNames[day]}`
        }else{
            akanName.innerHTML = `Your khan name is ${fNames[day]}`
        }
 
    }
})



