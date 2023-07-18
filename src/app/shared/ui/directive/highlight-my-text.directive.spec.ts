import {HighlightMyTextDirective} from './highlight-my-text.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  template: `
    <div [appHighlightMyText]="color"></div>`
})
class TestComponent {
  color: 'blue' | 'red' | 'pink' | undefined;
}

describe('HighlightMyTextDirective', () => {
  let directive: HighlightMyTextDirective;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightMyTextDirective, TestComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    elementRef = fixture.debugElement.children[0].injector.get(ElementRef);
    renderer = fixture.debugElement.children[0].injector.get(Renderer2);
    directive = new HighlightMyTextDirective(elementRef, renderer);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set background color to blue', () => {
    const color = 'blue';
    const expectedColorValue = '#0000FF';

    directive.color = color;
    directive.ngOnChanges();
    expect(renderer.setStyle).toHaveBeenCalledWith(
      elementRef.nativeElement,
      'backgroundColor',
      expectedColorValue
    );
  });

  it('should set background color to red', () => {
    const color = 'red';
    const expectedColorValue = '#FF0000';

    directive.color = color;
    directive.ngOnChanges();
    expect(renderer.setStyle).toHaveBeenCalledWith(
      elementRef.nativeElement,
      'backgroundColor',
      expectedColorValue
    );
  });

  it('should set background color to pink', () => {
    const color = 'pink';
    const expectedColorValue = '#FFC0CB';

    directive.color = color;
    directive.ngOnChanges();
    expect(renderer.setStyle).toHaveBeenCalledWith(
      elementRef.nativeElement,
      'backgroundColor',
      expectedColorValue
    );
  });

  it('should set background color to transparent for undefined color', () => {
    const color = undefined;
    const expectedColorValue = 'transparent';

    directive.color = color;
    directive.ngOnChanges();
    expect(renderer.setStyle).toHaveBeenCalledWith(
      elementRef.nativeElement,
      'backgroundColor',
      expectedColorValue
    );
  });
});
