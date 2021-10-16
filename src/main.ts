import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppModule } from './app/app.module'

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

