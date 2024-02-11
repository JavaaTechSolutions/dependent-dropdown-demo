import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from "@angular/core";

const materialModules = [
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
  ];

  @NgModule({
    imports: [CommonModule, ...materialModules],
    exports: [...materialModules],
  })
  export class AngularMaterialModule {}