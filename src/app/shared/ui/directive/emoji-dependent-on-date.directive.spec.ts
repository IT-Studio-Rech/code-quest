import {EmojiDependentOnDateDirective} from './emoji-dependent-on-date.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  template: `
    <div [appEmojiDependentOnDate]="dateInput"></div>`
})
class TestComponent {
  dateInput: string | undefined;
}

describe('EmojiDependentOnDateDirective', () => {
  let directive: EmojiDependentOnDateDirective;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [EmojiDependentOnDateDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    elementRef = fixture.debugElement.children[0].injector.get(ElementRef);
    renderer = fixture.debugElement.children[0].injector.get(Renderer2);
    directive = new EmojiDependentOnDateDirective(elementRef, renderer);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set happy emoji when the date is within the threshold', () => {
    const currentDate = new Date();
    const inputDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2);
    const expectedEmoji = '😃';

    directive.dateInput = inputDate.toISOString();
    directive.ngOnInit();
    expect(renderer.setProperty).toHaveBeenCalledWith(elementRef.nativeElement, 'textContent', expectedEmoji);
  });

  it('should set sad emoji when the date is beyond the threshold', () => {
    const currentDate = new Date();
    const inputDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 4);
    const expectedEmoji = '😞';

    directive.dateInput = inputDate.toISOString();
    directive.ngOnInit();
    expect(renderer.setProperty).toHaveBeenCalledWith(elementRef.nativeElement, 'textContent', expectedEmoji);
  });

  it('should not set any emoji when dateInput is not provided', () => {
    directive.ngOnInit();
    expect(renderer.setProperty).not.toHaveBeenCalled();
  });
});
