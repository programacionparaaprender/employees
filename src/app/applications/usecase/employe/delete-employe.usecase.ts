import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeRepositoryImplementation } from '../../../infraestructure/users/repositories/employe/employe.repository-implementation';


@Injectable({
  providedIn: 'root',
})
export class DeleteEmployeesUseCase {
  private employeRepositoryImplementation = inject(EmployeRepositoryImplementation);
  execute(employeeId: string): Promise<void> {
      return this.employeRepositoryImplementation.deleteEmployeeById(employeeId);
    }
}