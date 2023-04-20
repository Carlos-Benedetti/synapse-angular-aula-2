import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardAlunoComponent } from './card-aluno.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CardAlunoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [CardAlunoComponent]
})
export class CardAlunoModule { }
