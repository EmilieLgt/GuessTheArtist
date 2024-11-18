import { Component } from '@angular/core';
import { SearchBarComponent } from '../components/search-bar/search-bar/search-bar.component';

@Component({
  selector: 'app-guess-page',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './guess-page.component.html',
  styleUrl: './guess-page.component.scss',
})
export class GuessPageComponent {}
