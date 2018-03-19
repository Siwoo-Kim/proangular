import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from "@angular/core";

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}

  /*
    This directive creates the specified the number (counter) of template
  */
@Directive({
  selector: '[counterOf]'
})
export class CounterDirective implements OnChanges{

  @Input('counterOf') counter: number;

  constructor(private templateRef: TemplateRef<any>,
              private containerRef: ViewContainerRef){}

  ngOnChanges(changes: SimpleChanges): void {
    this.containerRef.clear();
    for(let i=0;i<this.counter;i++){
      /*  Create Templates */
      this.containerRef.createEmbeddedView(this.templateRef,new CounterDirectiveContext(i + 1));
    }
  }
}
