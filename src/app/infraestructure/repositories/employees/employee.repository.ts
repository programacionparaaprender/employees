import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EmployeeDto } from '../../dtos/employe.dto';
import { firstValueFrom, Observable } from 'rxjs';
import { EmployeEntity } from '../../../domain/entities/employees/employe.entity';
import { provideFirestore, getFirestore, collection, addDoc, collectionData, Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export abstract class EmployeeRepository  {
  abstract addData(collectionName: string, data: any):Observable<any>;
  abstract getEmployees():Observable<any[]>;
}