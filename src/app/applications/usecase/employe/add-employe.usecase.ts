import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeRepositoryImplementation } from '../../../infraestructure/users/repositories/employe/employe.repository-implementation';


@Injectable({
  providedIn: 'root',
})
export class AddEmployeUseCase {
  private employeRepositoryImplementation = inject(EmployeRepositoryImplementation);
  async execute(employe:any) {
    await this.employeRepositoryImplementation.addData('employees', employe)
    return of(employe);
  }
}