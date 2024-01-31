import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HelpsComponent } from './helps.component';

describe('HelpsComponent', () => {
  let component: HelpsComponent;
  let fixture: ComponentFixture<HelpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
