import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirInventarioComponent } from './excluir-inventario.component';

describe('ExcluirInventarioComponent', () => {
  let component: ExcluirInventarioComponent;
  let fixture: ComponentFixture<ExcluirInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcluirInventarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
