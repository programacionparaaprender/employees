import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeRepositoryImplementation } from '../../../infraestructure/users/repositories/employe/employe.repository-implementation';


@Injectable({
  providedIn: 'root',
})
export class ListEmployeesUseCase {
  private employeRepositoryImplementation = inject(EmployeRepositoryImplementation);
  execute():Observable<any[]> {
    return this.employeRepositoryImplementation.getEmployees();
  }
}