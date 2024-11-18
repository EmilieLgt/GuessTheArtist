import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Artist } from '../../../models/Artist';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  // récupère le dernier artiste qui a été deviné
  @Input() newSelectedArtist!: Artist[];
  @Input() artistToFind!: Artist;
  @Input() goodAnswer!: boolean;
}
