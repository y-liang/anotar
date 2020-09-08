import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTreeComponent } from './record-tree.component';

describe('RecordTreeComponent', () => {
  let component: RecordTreeComponent;
  let fixture: ComponentFixture<RecordTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
