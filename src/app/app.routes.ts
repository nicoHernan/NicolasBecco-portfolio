import { Routes } from '@angular/router';
import { SidenavComponent } from './component/sidenav/sidenav.component';

export const routes: Routes = [
    {path:'', redirectTo:'sidenav', pathMatch:'full'},
    {path:'sidenav', component:SidenavComponent},
    {path:'**', redirectTo:'sidenav'},
];
