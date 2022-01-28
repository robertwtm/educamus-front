import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatProfComponent } from './chat-prof.component';

describe('ChatProfComponent', () => {
  let component: ChatProfComponent;
  let fixture: ComponentFixture<ChatProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
