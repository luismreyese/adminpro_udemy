import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagenpipes.pipe';
// import { CommonModule } from '@angular/common';
// import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
  ImagenPipe
],
  imports: [
    // CommonModule
  ],
  exports: [
    ImagenPipe
  ]
})
export class PipesModule { }
