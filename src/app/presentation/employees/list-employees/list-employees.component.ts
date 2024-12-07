import { Component, inject, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { Constants } from '../../../shared/constants/constants';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { EmployeeRepository } from '../../../infraestructure/repositories/employees/employee.repository';
import { EmployeEntity } from '../../../domain/entities/employees/employe.entity';



import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../../enviroments/enviroment.prod'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ListEmployeesUseCase } from '../../../applications/usecase/employe/list-employees.usecase';
import { DeleteEmployeesUseCase } from '../../../applications/usecase/employe/delete-employe.usecase';
import { GetEmployeByIdUseCase } from '../../../applications/usecase/employe/get-employe-by-id.usecase';
import { EmployeeIdService } from '../../../shared/services/employee-id.service';
import { DateFormatFirePipe } from '../../../shared/pipes/dateformat.pipe';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [
  
    AngularFirestoreModule,
    FontAwesomeModule, 
    CommonModule,
    RouterModule, 
    AsyncPipe],
  providers: [DatePipe],  // Agregar DatePipe a los providers del componente
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css',
  //providers: [ListEmployeesUseCase]  
})
export class ListEmployeesComponent {
  router = inject(Router);
  URLCREATE = Constants.URLCREATE;
  //firestore: Firestore = inject(Firestore);
  listEmployeesUseCase:ListEmployeesUseCase = inject(ListEmployeesUseCase);
  deleteEmployeesUseCase:DeleteEmployeesUseCase = inject(DeleteEmployeesUseCase)
  item$: Observable<EmployeEntity[]> | undefined;
  
  private employeeIdService = inject(EmployeeIdService); // Inyectar el servicio
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    //this.item$ = this.listEmployeesUseCase.execute();
    this.getEmployees();  
  }

  getEmployees(){
    //const itemCollection = collection(this.firestore, 'employees');
    //this.item$ = collectionData<any>(itemCollection);
    /* this.item$ = this.listEmployeesUseCase.execute().pipe(
      map((items) => {
        return items.map((item) => {
          if (item.createDate instanceof Timestamp) {
            item.createDate = item.createDate.toDate(); // Convertir Timestamp a Date
          }
          return item;
        });
      })
    ); */
    //this.item$ = this.listEmployeesUseCase.execute();

    this.item$ = this.listEmployeesUseCase.execute().pipe(
      map(items =>
        items.map(item => ({
          ...item,
          createDate: item.createDate
            ? new Date(item.createDate.seconds * 1000 + item.createDate.nanoseconds / 1e6)
            : null // Si createDate es undefined, asigna null
        }))
      )
    );
  }

  trackById(index: number, item: any): string {
    return item.id;
  }

  btnAdd(){
    this.employeeIdService.setEmployeeId('');
    this.router.navigate([this.URLCREATE]);
  }
  btnEdit(id:string){
    this.employeeIdService.setEmployeeId(id);
    this.router.navigate([this.URLCREATE]);
  }
  btnDelet(id:string){
    this.deleteEmployeesUseCase.execute(id);
    this.getEmployees();
  }
}
