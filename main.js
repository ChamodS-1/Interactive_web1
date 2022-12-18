let inputSet =document.querySelector('input');
let spanSet =document.getElementById('newSet');

inputSet.addEventListener('input',getOutput);


function getOutput(){

    console.log(inputSet.value);
    let newData =inputSet.value;
    let newNumber=60-newData.length;
    spanSet.textContent=60-newData.length;

    if(newNumber<10){
        inputSet.classList.remove('reset');
        inputSet.classList.add('warning');

    }
    else{
       
        inputSet.classList.remove('warning');
        inputSet.classList.add('reset');
    }
    


}