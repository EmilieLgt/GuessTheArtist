import { Component } from '@angular/core';
import { Artist } from '../../../../models/Artist';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from '../../results/results.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, ResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  musicArtists: Artist[] = [
    {
      id: 1,
      name: 'Harry Styles',
      debut: 2017,
      country: 'United Kingdom',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 2,
      name: 'Arctic Monkeys',
      debut: 2006,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 3,
      name: 'Billie Eilish',
      debut: 2017,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 4,
      name: 'Oasis',
      debut: 1994,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 5,
      name: 'Lambrini Girls',
      debut: 2021,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 6,
      name: 'Coldplay',
      debut: 2000,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 7,
      name: 'Beyoncé',
      debut: 2003,
      country: 'United States',
      genre: 'R&B',
      number: 1,
    },
    {
      id: 8,
      name: 'The Strokes',
      debut: 2001,
      country: 'United States',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 9,
      name: 'Radiohead',
      debut: 1993,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 10,
      name: 'Adele',
      debut: 2008,
      country: 'United Kingdom',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 11,
      name: 'Drake',
      debut: 2010,
      country: 'Canada',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 12,
      name: 'Taylor Swift',
      debut: 2006,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 13,
      name: 'The Weeknd',
      debut: 2013,
      country: 'Canada',
      genre: 'R&B',
      number: 1,
    },
    {
      id: 14,
      name: 'Eminem',
      debut: 1996,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 15,
      name: 'Paramore',
      debut: 2005,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 16,
      name: 'Kendrick Lamar',
      debut: 2011,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 17,
      name: 'Imagine Dragons',
      debut: 2012,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 18,
      name: 'Rihanna',
      debut: 2005,
      country: 'Barbados',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 19,
      name: 'Green Day',
      debut: 1994,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 20,
      name: 'Lil Nas X',
      debut: 2019,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 21,
      name: 'The Beatles',
      debut: 1963,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 22,
      name: 'The Rolling Stones',
      debut: 1964,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 23,
      name: 'Led Zeppelin',
      debut: 1969,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 24,
      name: 'Pink Floyd',
      debut: 1967,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 25,
      name: 'The Who',
      debut: 1965,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 26,
      name: 'Queen',
      debut: 1973,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 27,
      name: 'AC/DC',
      debut: 1975,
      country: 'Australia',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 28,
      name: 'Black Sabbath',
      debut: 1970,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 29,
      name: 'The Doors',
      debut: 1967,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 30,
      name: 'Fleetwood Mac',
      debut: 1968,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 31,
      name: 'Tupac Shakur',
      debut: 1991,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 32,
      name: 'Notorious B.I.G.',
      debut: 1994,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 33,
      name: 'Jay-Z',
      debut: 1996,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 34,
      name: 'Nas',
      debut: 1994,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 35,
      name: 'Snoop Dogg',
      debut: 1993,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 36,
      name: 'Kanye West',
      debut: 2004,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 37,
      name: 'Wu-Tang Clan',
      debut: 1993,
      country: 'United States',
      genre: 'Rap',
      number: 9,
    },
    {
      id: 38,
      name: 'Ice Cube',
      debut: 1990,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 39,
      name: 'Run-D.M.C.',
      debut: 1984,
      country: 'United States',
      genre: 'Rap',
      number: 3,
    },
    {
      id: 40,
      name: 'Public Enemy',
      debut: 1987,
      country: 'United States',
      genre: 'Rap',
      number: 5,
    },
    {
      id: 41,
      name: 'Madonna',
      debut: 1983,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 42,
      name: 'Britney Spears',
      debut: 1999,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 43,
      name: 'Lady Gaga',
      debut: 2008,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 44,
      name: 'Katy Perry',
      debut: 2008,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 45,
      name: 'Ariana Grande',
      debut: 2013,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 46,
      name: 'Selena Gomez',
      debut: 2009,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 47,
      name: 'Dua Lipa',
      debut: 2015,
      country: 'United Kingdom',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 48,
      name: 'Céline Dion',
      debut: 1981,
      country: 'Canada',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 49,
      name: 'Shakira',
      debut: 1990,
      country: 'Colombia',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 50,
      name: 'Pink',
      debut: 2000,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 51,
      name: 'Christina Aguilera',
      debut: 1999,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 52,
      name: 'Mariah Carey',
      debut: 1990,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 53,
      name: 'Avril Lavigne',
      debut: 2002,
      country: 'Canada',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 54,
      name: 'Sia',
      debut: 1997,
      country: 'Australia',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 55,
      name: 'Ellie Goulding',
      debut: 2010,
      country: 'United Kingdom',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 56,
      name: 'Miley Cyrus',
      debut: 2007,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 57,
      name: 'Camila Cabello',
      debut: 2018,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
  ];

  artistToFind!: Artist;
  // fonction pour donenr un artiste au hasard au chargement de la page
  ngOnInit() {
    const randomIndex = Math.floor(Math.random() * this.musicArtists.length);
    this.artistToFind = this.musicArtists[randomIndex];
    console.log(this.artistToFind);
  }

  // ce qui est écrit dans l'input
  guess: string = '';
  // pour afficher la suite si input rempli

  inputFilled: boolean = false;
  // la liste des artistes dont la première lettre correspond à ce qui est écrit dans l'input
  artistsListDisplay: Artist[] = [];
  // fonction quand l'utilisateur tape une lettre dans l'input, recherche les artistes qui correpsondent à la première lettre
  displayArtistList() {
    console.log(this.guess);
    // on prend la première lettre du guess, mise en majuscule
    const firstLetter = this.guess.charAt(0).toUpperCase();
    // on filtre les artistes dont le nom commence par cette lettre
    this.artistsListDisplay = this.musicArtists.filter(
      (artist) => artist.name.charAt(0).toUpperCase() === firstLetter
    );
    this.inputFilled = true;
  }

  // l'artiste sélectionné dans la liste proposée à l'utilisateur une fois qu'il a écrit une lettre dans l'input
  selectedArtist: Artist[] = [];
  // si un artiste est sélectionné, pour afficher la suite
  buttonClicked: boolean = false;
  // verifier l'artiste correspond à l'artiste sélectionné
  goodAnswer!: boolean;

  // quand l'utilisateur clique sur l'artiste qu'il pense, le retrouver dans la liste des artiste
  selectArtist(nameSelected: string) {
    this.selectedArtist = this.musicArtists.filter(
      (artist) => artist.name === nameSelected
    );

    this.selectedArtist[0]?.name === this.artistToFind?.name
      ? (this.goodAnswer = true)
      : (this.goodAnswer = false);

    this.buttonClicked = true;
  }
}
