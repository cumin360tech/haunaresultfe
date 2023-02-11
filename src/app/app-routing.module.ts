import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ResultComponent } from './result/result.component';
import { UploadComponent } from './upload/upload.component';
import { Result2Component } from './result2/result2.component';

const routes: Routes = [
  { path: '', redirectTo: 'result', pathMatch: 'full' },
  { path: 'result', component: LoginComponent },
  { path: 'result23-24', component: Login2Component },
  { path: 'result/:id', component: ResultComponent },
  { path: 'result2/:id', component: Result2Component },
  { path: 'upload', component: UploadComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: '**', redirectTo: 'result', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
