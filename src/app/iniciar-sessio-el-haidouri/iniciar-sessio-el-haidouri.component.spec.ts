import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioElHaidouriComponent } from './iniciar-sessio-el-haidouri.component';

describe('IniciarSessioElHaidouriComponent', () => {
  let component: IniciarSessioElHaidouriComponent;
  let fixture: ComponentFixture<IniciarSessioElHaidouriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioElHaidouriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioElHaidouriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
