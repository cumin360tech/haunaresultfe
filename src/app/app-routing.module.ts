import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: 'result', pathMatch: 'full' },
  { path: 'result', component: LoginComponent },
  { path: 'result/:id', component: ResultComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: '**', redirectTo: 'result', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
