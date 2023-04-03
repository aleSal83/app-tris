// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Application imports
import { AppRoutingModule } from './app-routing.module';
//import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// Nebular modules
//import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

// Angular/material modules
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';

// Service worker module
import { SquareComponent } from './component/square/square.component';
import { GameViewComponent } from './component/game-view/game-view.component';
import { TopViewComponent } from './component/top-view/top-view.component';
import { BoardComponent } from './component/board/board.component';
import { RippleOverlayComponent } from './component/ripple-overlay/ripple-overlay.component';

@NgModule({
 
  declarations: [
    AppComponent,
    SquareComponent,
    GameViewComponent,
    BoardComponent,
    RippleOverlayComponent,
    TopViewComponent
  ],
  imports: [
    
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

   
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatRadioModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
