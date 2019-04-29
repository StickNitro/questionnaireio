import { InjectionToken } from '@angular/core';

export const APP_ENVIRONMENT: InjectionToken<AppEnvironment> = new InjectionToken<AppEnvironment>('questionnaireio_app_environment');

export interface AppEnvironment {
  production: boolean;
}
