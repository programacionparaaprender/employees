import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Constants } from '../../../shared/constants/constants';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddEmployeUseCase } from '../../../applications/usecase/employe/add-employe.usecase';
import { EmployeeDto } from '../../../infraestructure/dtos/employe.dto';
import { ToastrService } from 'ngx-toastr';
import { EmployeeIdService } from '../../../shared/services/employee-id.service';
import { GetEmployeByIdUseCase } from '../../../applications/usecase/employe/get-employe-by-id.usecase';
import { UpdateEmployeUseCase } from '../../../applications/usecase/employe/update-employe.usecase';
import { EmployeEntity } from '../../../domain/entities/employees/employe.entity';


@Component({
  selector: 'app-create-employe',
  standalone: true,
  imports: [ RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-employe.component.html',
  styleUrl: './create-employe.component.css'
})
export class CreateEmployeComponent {
  URLLIST = Constants.URLLIST;
  router = inject(Router);
  createEmploye:FormGroup;
  submitted = false;
  loading = false;

  addEmployeUseCase = inject(AddEmployeUseCase);
  private toastr: ToastrService = inject(ToastrService)
  private employeeIdService = inject(EmployeeIdService); // Inyectar el servicio
  employeeId:string | null = '';
  getEmployeByIdUseCase:GetEmployeByIdUseCase = inject(GetEmployeByIdUseCase)
  updateEmployeUseCase:UpdateEmployeUseCase = inject(UpdateEmployeUseCase)
  employe:EmployeEntity = new EmployeEntity();
  constructor(private fb:FormBuilder){

    this.createEmploye = this.fb.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        document: ['', Validators.required],
        salary: ['', Validators.required]
    });
    this.employeeIdService.currentEmployeeId.subscribe(data=>{
      this.employeeId = data;

      if(this.employeeId){
        
          this.getEmployeByIdUseCase.execute(this.employeeId).subscribe((employee) => {
            if (employee) {
              console.log('employee');
              console.log(employee);
              this.employe = employee;
              this.createEmploye.setValue({
                name: employee.name,
                lastname: employee.lastname,
                document: employee.document,
                salary: employee.salary
              }); 
            }
          });
        
      }

    });
  }
  get f() {
    return this.createEmploye.controls;
  }
  goBack(){
    this.router.navigate([this.URLLIST]);
  }

  async addEmployee(){
    if(this.createEmploye.invalid){
      return;
    }
    try{
      const name = this.createEmploye.getRawValue().name;
      const lastname = this.createEmploye.getRawValue().lastname;
      const document = this.createEmploye.getRawValue().document;
      const salary = this.createEmploye.getRawValue().salary;
      this.loading = true;
      if (this.employeeId) {
        this.employe.name = name;
        this.employe.lastname = lastname;
        this.employe.document = document;
        this.employe.salary = salary;
        this.employe.updateDate = new Date();
        await this.updateEmployeUseCase.execute(this.employeeId, this.employe);
      }else {
        this.employe = {
          id:'',
          name:name,
          lastname:lastname,
          document:document,
          salary:salary,
          createDate:new Date()
        }
        await this.addEmployeUseCase.execute(this.employe); 
      }
      this.showInfo();
      this.createEmploye.reset();
      this.loading = false;
      this.goBack();
    }catch(error){

    }
  }

  showInfo() {
    let texto = '';
    if (this.employeeId) {
      texto = 'Se actualizo de forma correcta el empleado';
    }else {
      texto = 'Se registro de forma correcta el empleado';
    }
    this.toastr.info(texto, 'Información', {
      timeOut: 3000,
    });
    
  }
}
