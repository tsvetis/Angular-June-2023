import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  exportAs: 'appMyStructural',
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;
  @Input() myTmpProp: any;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log('------------------');
    console.log('templateRef', this.templateRef);
    console.log('myTmpProp', this.myTmpProp);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    const template = this.templateRef || this.myTmpProp;

    if (!template) {
      return;
    }

    if (this.appMyStructural) {
      this.vcRef.createEmbeddedView(template, {
        value: 'value From NgOnChanges 123',
        $implicit: 'this is implicit data',
      });
    } else {
      this.vcRef.clear();
    }
  }
}
