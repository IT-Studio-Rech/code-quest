import {Directive, ElementRef, Input, OnChanges, Renderer2,} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlightMyText]',
})
export class HighlightMyTextDirective implements OnChanges {
  @Input('appHighlightMyText') color: 'blue' | 'red' | 'pink' | undefined; // Parameter kann wie directive heißen, oder unterschiedlich

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
  }

  ngOnChanges() {
    this.changeBackgroundColor();
  }

  private changeBackgroundColor(): void {
    let colorValue = '';
    switch (this.color) {
      case 'blue':
        colorValue = '#0000FF';
        break;
      case 'red':
        colorValue = '#FF0000';
        break;
      case 'pink':
        colorValue = '#FFC0CB';
        break;
      default:
        colorValue = 'transparent';
        break;
    }
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      colorValue
    );
  }
}
