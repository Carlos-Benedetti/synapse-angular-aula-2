import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlunoComponent } from './card-aluno.component';

describe('CardAlunoComponent', () => {
  let component: CardAlunoComponent;
  let fixture: ComponentFixture<CardAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
