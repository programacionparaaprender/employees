import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeRepositoryImplementation } from '../../../infraestructure/users/repositories/employe/employe.repository-implementation';
import { EmployeEntity } from '../../../domain/entities/employees/employe.entity';


@Injectable({
  providedIn: 'root',
})
export class UpdateEmployeUseCase {
  private employeRepositoryImplementation = inject(EmployeRepositoryImplementation);
  async execute(employeeId: string, employee: EmployeEntity) {
    await this.employeRepositoryImplementation.updateEmployee(employeeId, employee);
    return of(employee);
  }
}