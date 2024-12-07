import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc, setDoc, DocumentReference, query, orderBy } from '@angular/fire/firestore';
import { EmployeEntity } from '../../../../domain/entities/employees/employe.entity';
import { Observable, from, map } from 'rxjs';
import { EmployeeRepository } from '../../../repositories/employees/employee.repository';

@Injectable({
  providedIn: 'root'
})
export class EmployeRepositoryImplementation {
    firestore: Firestore = inject(Firestore);
    async addData(collectionName: string, data: any) {
      try {
        const ref = collection(this.firestore, collectionName);
        const docRef = await addDoc(ref, data);
        console.log('Document written with ID:', docRef.id);
        return docRef;
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      return null;
    }

    // Método para obtener un empleado por su ID
    getEmployeeById(employeeId: string): Observable<any> {
      const employeeDocRef = doc(this.firestore, 'employees', employeeId); // Referencia al documento
      const docSnapshot = getDoc(employeeDocRef); // Obtiene el documento

      
      return from(docSnapshot); // Convierte la promesa en un observable para que puedas suscribirte
    }
    
    getEmployees():Observable<EmployeEntity[]>{
        const itemCollection = collection(this.firestore, 'employees');
        let item$ = collectionData<any>(itemCollection, orderBy('createDate', 'asc'));
        item$ = collectionData<EmployeEntity[]>(itemCollection, { idField: 'id' }); 
        //item$ = this.firestore.collection('employees', ref => ref.orderBy('createDate', 'asc')).snapshotChanges();
        //item$ = item$.orderBy('createDate', 'asc');
        /* item$.subscribe((data:any)=>{
          console.log('data');
          console.log(data);
        }) */
        
        return item$;

    }

     // Método para obtener un empleado por su ID
     getEmployeeById2(employeeId: string): Observable<EmployeEntity | null> {
      // Referencia al documento
      const employeeDocRef: DocumentReference = doc(this.firestore, 'employees', employeeId);
  
      // Obtener el documento
      const docSnap = getDoc(employeeDocRef);
      
      return from(docSnap).pipe(
        map((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data() as EmployeEntity;
            return { ...data, id: snapshot.id }; // Devolvemos el empleado con el id
          } else {
            return null; // Si no existe el documento, devolvemos null
          }
        })
      );
    }

    // Método para actualizar un empleado
    async updateEmployee(employeeId: string, employee: EmployeEntity) {
      const employeeDocRef = doc(this.firestore, 'employees', employeeId);
      return setDoc(employeeDocRef, employee); // Actualiza el documento con los nuevos datos
    }

    deleteEmployeeById(employeeId: string): Promise<void> {
      const employeeDocRef = doc(this.firestore, 'employees', employeeId);
      return deleteDoc(employeeDocRef); // Elimina el documento de la colección
    }
    
}