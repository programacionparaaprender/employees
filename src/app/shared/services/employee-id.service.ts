import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeIdService {
  private employeeIdSource = new BehaviorSubject<string | null>(null); // ID inicial vacío
  currentEmployeeId = this.employeeIdSource.asObservable();

  constructor() {}

  setEmployeeId(id: string) {
    this.employeeIdSource.next(id); // Cambiar el ID
  }

  clearEmployeeId() {
    this.employeeIdSource.next(null); // Limpiar el ID
  }
}
