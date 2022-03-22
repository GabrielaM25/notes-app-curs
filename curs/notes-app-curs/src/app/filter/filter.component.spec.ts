import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterService } from '../filter.service';
import { MockService } from 'ng-mocks';
import { FilterComponent } from './filter.component';
import { Category } from '../category';
describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
//x nu vreau sa ruleze testele pt componenta asta
//f le ruleaza numai pentru aceasta componenta
  beforeEach(async () => {
    const filterServiceStub = MockService(FilterService, {
      getCategories() {
        return undefined;
      },
      getCategoryById() {
        return undefined;
      },
    });
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      providers: [{ provide: FilterService, useValue: filterServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//x nu vreau sa ruleze testul asta
//f  ruleaza numai pentru testul asta
  it('should call getCategories from filterSerice on ngOnInit', () => {
    const categories:Category[] = [
      {name: 'Category1', id:'11'},
      {name: 'Category2', id:'21'},
      {name: 'Category3', id:'31'}
    ] ;
    const filterSerice : FilterService = TestBed.inject(FilterService);
    spyOn(filterSerice,'getCategories').and.returnValue(categories);
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.categories).toEqual(categories);
  });

});
