import { IngredientFilterPipe } from './ingredients/ingredient-filter.pipe';
import { DropdownDirective } from './shared/dropdown.directive';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import {ClientService} from './clients/client.service';
import { HeaderComponent } from './core/header/header.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientEditComponent } from './ingredients/ingredient-edit/ingredient-edit.component';
import { IngredientService } from './ingredients/ingredient.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ClientListComponent,
    ClientEditComponent,
    DropdownDirective,
    ClientsComponent,
    IngredientsComponent,
    IngredientListComponent,
    IngredientEditComponent,
    IngredientFilterPipe
  ],
  imports: [
    NgbModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    DropdownDirective
  ],
  providers: [ClientService,IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
