import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { CreateShoppingComponent } from './create-shopping/create-shopping.component';
import { ListShoppingComponent } from './list-shopping/list-shopping.component';
import { DetailsShoppingComponent } from './details-shopping/details-shopping.component';
import { UpdateShoppingComponent } from './update-shopping/update-shopping.component';
import { DeleteShoppingComponent } from './delete-shopping/delete-shopping.component';
import { ShoppingService } from '../services/shopping/shopping.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShoppingComponent,
    CreateShoppingComponent,
    ListShoppingComponent,
    DetailsShoppingComponent,
    UpdateShoppingComponent,
    DeleteShoppingComponent
  ],
  providers: [ShoppingService]
})
export class ShoppingModule { }
