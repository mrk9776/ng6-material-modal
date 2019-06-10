import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { MatDialogModule, MatIconModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [AlertComponent, ConfirmComponent],
  entryComponents: [AlertComponent, ConfirmComponent]
})
export class ComponentModule { }
