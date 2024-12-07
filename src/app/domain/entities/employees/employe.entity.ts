
export class EmployeEntity {
    id:string;
    name:string;
    lastname:string;
    document:string;
    salary:number;
    createDate?:Date
    updateDate?:Date
    constructor(id:string='',
        
        name:string = '',
        lastname:string = '',
        document:string = '',
        salary:number = 0,
        createDate:Date = new Date(),
        updateDate:Date = new Date()){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.document = document;
        this.salary = salary;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
}