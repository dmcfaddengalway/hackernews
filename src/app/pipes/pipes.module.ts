import { NgModule } from '@angular/core';
import { PluralisationPipe } from './pluralisation-pipe/comment.pipe';

@NgModule({
  declarations: [
    PluralisationPipe
  ],
  exports: [
    PluralisationPipe
  ]
})
export class PipesModule { }
