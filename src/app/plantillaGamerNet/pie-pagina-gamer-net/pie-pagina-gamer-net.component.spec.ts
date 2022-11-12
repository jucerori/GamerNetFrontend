import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePaginaGamerNetComponent } from './pie-pagina-gamer-net.component';

describe('PiePaginaGamerNetComponent', () => {
  let component: PiePaginaGamerNetComponent;
  let fixture: ComponentFixture<PiePaginaGamerNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePaginaGamerNetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiePaginaGamerNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
