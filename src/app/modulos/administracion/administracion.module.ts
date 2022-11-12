import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';


@NgModule({
  declarations: [
    EditarPersonaComponent,
    BuscarPersonaComponent,
    EliminarPersonaComponent,
    CrearPersonaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
