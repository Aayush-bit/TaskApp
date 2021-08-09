import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms"
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

const MaterialComponents = [
  FormsModule,
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule, 
  MatIcon,
  MatFormField,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
