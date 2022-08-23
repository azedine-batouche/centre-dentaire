import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/modules/core/components/contact/contact.component';
import { GestionComponent } from 'src/modules/core/components/gestion/gestion.component';
import { HomeComponent } from 'src/modules/core/components/home/home.component';
import { ReferencesComponent } from 'src/modules/core/components/references/references.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "gestion", component: GestionComponent },
  { path: "reference", component: ReferencesComponent },
  {path:'contact', component:ContactComponent},
  {
      path        : '**',
      redirectTo  : 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,  scrollPositionRestoration: 'enabled'  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
