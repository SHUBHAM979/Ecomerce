import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './EcommerceLayout/footer/footer.component';
import { HeaderComponent } from './EcommerceLayout/header/header.component';
import { HomeComponent } from './EcommerceLayout/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Ecommerce';
}
