import { AuthEffects } from './state/effects/auth.effects';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,

    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
  ]
})
export class AuthModule { }
