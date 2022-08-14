import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[myFor]",
})
export class ForDirective {
  // @Input("myForEm") numbers: number[];
  // @Input("myForUsando") texto: string;

  constructor() {}

  // ngOnInit(): void {}
}
