import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule // agregar siempre para evitar el error NG0303
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule {

}
