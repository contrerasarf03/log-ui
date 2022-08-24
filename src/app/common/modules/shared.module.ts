import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog'
import { LayoutModule } from '@angular/cdk/layout'




@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        

    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    ]
})

export class SharedModule {}