import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeRepositoryImplementation } from '../../../infraestructure/users/repositories/employe/employe.repository-implementation';


@Injectable({
  providedIn: 'root',
})
export class GetEmployeByIdUseCase {
  private employeRepositoryImplementation = inject(EmployeRepositoryImplementation);
  execute(id:string):Observable<any> {
    return this.employeRepositoryImplementation.getEmployeeById2(id);
  }
}