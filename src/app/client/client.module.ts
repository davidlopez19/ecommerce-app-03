import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientService } from '../services/client/client.service';



@NgModule({
  declarations: [
    CreateClientComponent,
    ListClientComponent,
    DetailsClientComponent,
    UpdateClientComponent
  ],
  providers: [ClientService],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
