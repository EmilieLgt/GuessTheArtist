import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Artist } from '../../../models/Artist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  // récupère le dernier artiste qui a été deviné
  @Input() newSelectedArtist!: Artist[];
  @Input() artistToFind!: Artist;
  @Input() goodAnswer!: boolean;
  @Input() goodCountry!: boolean;
  @Input() goodDebut!: boolean;
  @Input() goodGenre!: boolean;
  @Input() goodNumber!: boolean;
  @Input() numberInferior!: boolean;
  @Input() debutBefore!: boolean;
}
