import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    { path: 'list', component: AppComponent},
    
    { path: 'add', component: AddComponent },
    { path: 'update/:id', component: UpdateComponent },
];
