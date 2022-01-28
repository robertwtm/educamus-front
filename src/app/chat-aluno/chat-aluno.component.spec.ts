import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAlunoComponent } from './chat-aluno.component';

describe('ChatAlunoComponent', () => {
  let component: ChatAlunoComponent;
  let fixture: ComponentFixture<ChatAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
