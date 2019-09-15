import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home.component";
import { AppFooterComponent } from "./footer/app-footer/app-footer.component";
import { MaterialModule } from "../_share/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalComponent } from '../_component/modal/modal.component';

@NgModule({
  declarations: [
    AppFooterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AppFooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class HomeModule {}
