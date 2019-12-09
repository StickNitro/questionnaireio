import * as fromRoot from '@root/state';

import { APP_ENVIRONMENT } from '.';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    /**
     * Register the NGRX Store
     */
    StoreModule.forRoot(fromRoot.reducers, { metaReducers: fromRoot.metaReducers }),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    /**
     * Register Store devtools
     */
    StoreDevtoolsModule.instrument({
      name: 'Questionnaire.io',
      maxAge: 25,
      logOnly: environment.production
    }),

    AuthModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_ENVIRONMENT, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
