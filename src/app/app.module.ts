import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { CricketComponent } from "./cricket/cricket.component";
import { SectorsComponent } from "./cricket/sectors/sectors.component";
const appRoutes: Routes = [{ path: "cricket", component: CricketComponent }];
@NgModule({
  declarations: [AppComponent, CricketComponent, SectorsComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
