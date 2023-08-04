import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MainLayoutComponent} from "./layouts";
import {FooterComponent, HeaderComponent, SideBarComponent, ViewCatsComponent} from './components';
import {CoreModule} from "../core/core.module";
import {ViewPhotoModalComponent} from './components/view-photo-modal/view-photo-modal.component';
import { UpButtonComponent } from './components/up-button/up-button.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ViewCatsComponent,
    ViewPhotoModalComponent,
    UpButtonComponent,
  ],
    exports: [
        SideBarComponent,
        ViewCatsComponent,
        UpButtonComponent
    ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    CoreModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModuleModule {
}
