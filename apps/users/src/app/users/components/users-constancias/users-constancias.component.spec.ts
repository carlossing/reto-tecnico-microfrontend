import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersConstanciasComponent } from './users-constancias.component';

describe('UsersConstanciasComponent', () => {
  let component: UsersConstanciasComponent;
  let fixture: ComponentFixture<UsersConstanciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersConstanciasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersConstanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
