var salaryOperatoins = {
    basicSalary:0,
    inputSalary(basicSalary){
        this.basicSalary = basicSalary;
    },
    hra(){
        return this.basicSalary * 0.30;
    },
    ta(){
        return this.basicSalary * 0.10;
    },
    da(){
        return this.basicSalary * 0.20;
    },
    pf(){
        return this.basicSalary * 0.05;
    },
    ds(){
        return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
    },
    tax(){
        return this.basicSalary * 0.10;
    },
    ns(){
        return this.basicSalary - this.tax();
    },
}