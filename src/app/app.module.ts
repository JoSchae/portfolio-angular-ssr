import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { TestComponent } from './pages/test/test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TestComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'portfolio-angular-ssr'  }),
    AppRoutingModule,
	SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
