const nameError = document.getElementById('name-error');
const getAkan = document.getElementById("getAkan");

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

getAkan.addEventListener("click",function bday(){
    const bDate = document.getElementById('b-Date').value;
    console.log(bDate)
})






