import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { AuthenticationService } from '../services/shared/authentication.service';
import { PreferenceService } from '../services/shared/preference.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent,
    AuthenticationComponent,
    NotFoundComponent,
    PreferencesComponent
  ],
  providers: [AuthenticationService, PreferenceService]
})
export class SharedModule { }
