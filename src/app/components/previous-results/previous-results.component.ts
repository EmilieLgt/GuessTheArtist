import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artist } from '../../../models/Artist';

@Component({
  selector: 'app-previous-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './previous-results.component.html',
  styleUrl: './previous-results.component.scss',
})
export class PreviousResultsComponent {
  @Input() previousArtists!: any;

  @Input() artistToFind!: Artist;
}
