import { NgModule } from '@angular/core';
import { PluralisationPipe } from './pluralisation-pipe/pluralisation.pipe';

@NgModule({
  declarations: [
    PluralisationPipe
  ],
  exports: [
    PluralisationPipe
  ]
})
export class PipesModule { }
