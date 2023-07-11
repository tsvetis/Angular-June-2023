import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
})
export class HighlightOnMoveDirective implements OnInit, OnDestroy {
  // (mouseover)="mouseOverHandler($event)"
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log('mouseover', e);
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  unsubscribeFromEvents: (() => void)[] = [];

  ngOnInit(): void {
    console.log(this.elRef);
    // this.elRef.nativeElement.style.backgroundColor = 'yellow';

    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.mouseEnterHandler.bind(this)
      )
    );

    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler.bind(this)
      )
    );
  }

  mouseEnterHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.renderer.addClass(this.elRef.nativeElement, 'highlight');
  }

  mouseLeaveHandler(e: MouseEvent): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
  }

  ngOnDestroy(): void {
    this.unsubscribeFromEvents.forEach((fn) => fn());
  }
}
