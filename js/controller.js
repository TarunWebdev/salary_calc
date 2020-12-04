document.getElementById('calc_sal').addEventListener('click',function e(){
    console.log('clicked');
    salaryOperatoins.inputSalary(parseInt(document.getElementById('bs').value))
    for(var key in salaryOperatoins){
        if(key == 'basicSalary' || key == 'inputSalary'){
            continue;
        }
        document.getElementById(key).innerText =  salaryOperatoins[key]();
    }
});