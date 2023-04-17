import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutComponent } from './componentes/about/editabout.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experencia/new-experiencia.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectoComponent } from './componentes/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyecto/new-proyecto.component';
import { ExperenciaComponent } from './componentes/experencia/experencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { HysComponent } from './componentes/hys/hys.component';


const routes: Routes = [ 
{path:'', component: InicioComponent}, 
{path:'login', component: LoginComponent},
{path:'nuevaexp', component: NewExperienciaComponent},
{path:'experiencia/editexp/:id', component: EditExperienciaComponent},
{path:'nuevaedu', component: NeweducacionComponent},
{path:'educacion/editedu/:id', component: EditEducacionComponent},
{path:'newskill', component: NewSkillComponent},
{path:'skill/editskill/:id', component: EditSkillComponent},
{path:'editacercade/:id', component: EditaboutComponent},
{path:'newproyecto', component: NewProyectoComponent},
{path:'proyecto/editproyecto/:id', component: EditProyectoComponent},
{path: 'experiencia', component: ExperenciaComponent},
{path: 'educacion', component: EducacionComponent},
{path: 'skill', component: HysComponent},
{path: 'proyecto', component: ProyectoComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
