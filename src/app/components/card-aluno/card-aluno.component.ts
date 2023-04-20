import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-aluno',
  templateUrl: './card-aluno.component.html',
  styleUrls: ['./card-aluno.component.css']
})
export class CardAlunoComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
}
