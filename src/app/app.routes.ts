import { Routes } from '@angular/router';

import { ListEmployeesComponent } from './presentation/employees/list-employees/list-employees.component';
import { CreateEmployeComponent } from './presentation/employees/create-employe/create-employe.component';
import { Constants } from './shared/constants/constants';

export const routes: Routes = [
    { path: '',  redirectTo: '/list-employees', pathMatch: 'full' },
    {path: Constants.URLLIST, component: ListEmployeesComponent},
    {path: Constants.URLCREATE, component: CreateEmployeComponent},
];
