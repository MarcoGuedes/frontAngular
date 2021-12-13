import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'admin',
    loadChildren: ()=>
    import('./modules/admin/admin.module').then((m)=> m.AdminModule),
  },
  {path: 'trial',
    loadChildren: ()=>
    import('./modules/trial/trial.module').then((m)=> m.TrialModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
