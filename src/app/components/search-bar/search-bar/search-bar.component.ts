import { Component, inject } from '@angular/core';
import { Artist } from '../../../../models/Artist';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from '../../results/results.component';
import { PreviousResultsComponent } from '../../previous-results/previous-results.component';
// import { ApiCallService } from '../../../../services/api-call.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, ResultsComponent, PreviousResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  musicArtists: Artist[] = [
    {
      id: 1,
      name: 'Adam Green',
      debut: 2002,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 2,
      name: 'Alain Bashung',
      debut: 1977,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 3,
      name: 'Alain Souchon',
      debut: 1972,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 4,
      name: 'Albert Hammond Jr',
      debut: 2006,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 5,
      name: 'Alex Turner',
      debut: 2002,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 6,
      name: 'Alvvays',
      debut: 2011,
      country: 'Canada',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 7,
      name: 'Angie McMahon',
      debut: 2017,
      country: 'Australia',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 8,
      name: 'Arcade Fire',
      debut: 2001,
      country: 'Canada',
      genre: 'Rock',
      number: 7,
    },
    {
      id: 9,
      name: 'Arctic Monkeys',
      debut: 2002,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 10,
      name: 'Ariel Pink',
      debut: 2004,
      country: 'United States',
      genre: 'Alternatif',
      number: 1,
    },
    {
      id: 11,
      name: 'BB Brunes',
      debut: 2007,
      country: 'France',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 12,
      name: 'Babes In Toyland',
      debut: 1987,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 13,
      name: 'Beach Bunny',
      debut: 2015,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 14,
      name: 'Beach House',
      debut: 2004,
      country: 'United States',
      genre: 'Alternatif',
      number: 2,
    },
    {
      id: 15,
      name: 'Benjamin Biolay',
      debut: 2002,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 16,
      name: 'Bikini Kill',
      debut: 1990,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 17,
      name: 'Billie Eilish',
      debut: 2015,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 18,
      name: 'Black Lips',
      debut: 2002,
      country: 'United States',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 19,
      name: 'Black Rebel Motorcycle Club',
      debut: 1998,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 20,
      name: 'Bloc Party',
      debut: 2003,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 21,
      name: 'Blood Red Shoes',
      debut: 2004,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 22,
      name: 'Blossoms',
      debut: 2013,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 23,
      name: 'Blur',
      debut: 1988,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 24,
      name: 'Bob Dylan',
      debut: 1961,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 25,
      name: 'Brody Dalle',
      debut: 1994,
      country: 'Australia',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 26,
      name: 'Cage The Elephant',
      debut: 2006,
      country: 'United States',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 27,
      name: 'Celeste',
      debut: 2020,
      country: 'United Kingdom',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 28,
      name: 'Chappell Roan',
      debut: 2017,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 29,
      name: 'Cherry Glazerr',
      debut: 2013,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 30,
      name: 'Clara Luciani',
      debut: 2012,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 31,
      name: 'Cold War Kids',
      debut: 2004,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 32,
      name: 'Conan Gray',
      debut: 2017,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 33,
      name: 'Crystal Castles',
      debut: 2006,
      country: 'Canada',
      genre: 'Electro',
      number: 2,
    },
    {
      id: 34,
      name: 'DIIV',
      debut: 2011,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 35,
      name: 'Daft Punk',
      debut: 1993,
      country: 'France',
      genre: 'Electro',
      number: 2,
    },
    {
      id: 36,
      name: 'David Bowie',
      debut: 1962,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 37,
      name: 'Deap Vally',
      debut: 2011,
      country: 'United States',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 38,
      name: 'Django Django',
      debut: 2009,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 39,
      name: 'Dove Cameron',
      debut: 2012,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 40,
      name: 'Drenge',
      debut: 2011,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 41,
      name: 'Eagles Of Death Metal',
      debut: 1998,
      country: 'United States',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 42,
      name: 'Eddy de Pretto',
      debut: 2016,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 43,
      name: 'Elastica',
      debut: 1992,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 44,
      name: 'FINNEAS',
      debut: 2016,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 45,
      name: 'Fishbach',
      debut: 2015,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 46,
      name: 'Florence + The Machine',
      debut: 2007,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 47,
      name: 'Foals',
      debut: 2005,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 48,
      name: 'Foo Fighters',
      debut: 1994,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 49,
      name: 'Foxygen',
      debut: 2005,
      country: 'United States',
      genre: 'Alternatif',
      number: 2,
    },
    {
      id: 50,
      name: 'Frank Carter & The Rattlesnakes',
      debut: 2015,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 51,
      name: 'Franz Ferdinand',
      debut: 2002,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 52,
      name: 'Giant Rooks',
      debut: 2014,
      country: 'Germany',
      genre: 'Alternatif',
      number: 4,
    },
    {
      id: 53,
      name: 'HAIM',
      debut: 2007,
      country: 'United States',
      genre: 'Pop',
      number: 3,
    },
    {
      id: 54,
      name: 'Harry Styles',
      debut: 2017,
      country: 'United Kingdom',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 55,
      name: 'Her',
      debut: 2015,
      country: 'France',
      genre: 'R&B',
      number: 1,
    },
    {
      id: 56,
      name: 'Hinds',
      debut: 2011,
      country: 'Spain',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 57,
      name: 'Hole',
      debut: 1989,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 58,
      name: 'Izïa',
      debut: 2008,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 59,
      name: 'JAWS',
      debut: 2012,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 60,
      name: 'Jack White',
      debut: 1997,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 61,
      name: 'Jagwar Ma',
      debut: 2011,
      country: 'Australia',
      genre: 'Alternatif',
      number: 3,
    },
    {
      id: 62,
      name: 'Jake Bugg',
      debut: 2011,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 63,
      name: 'Jamie T',
      debut: 2007,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 64,
      name: 'Janis Joplin',
      debut: 1962,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 65,
      name: 'Japanese Breakfast',
      debut: 2013,
      country: 'United States',
      genre: 'Alternatif',
      number: 1,
    },
    {
      id: 66,
      name: 'Jimi Hendrix',
      debut: 1963,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 67,
      name: 'John Lennon',
      debut: 1970,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 68,
      name: 'Joy Crookes',
      debut: 2017,
      country: 'United Kingdom',
      genre: 'R&B',
      number: 1,
    },
    {
      id: 69,
      name: 'Joy Division',
      debut: 1976,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 70,
      name: 'Julian Casablancas',
      debut: 2009,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 71,
      name: 'Julien Baker',
      debut: 2015,
      country: 'United States',
      genre: 'Alternatif',
      number: 1,
    },
    {
      id: 72,
      name: 'Juliette Armanet',
      debut: 2017,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 73,
      name: 'Justice',
      debut: 2003,
      country: 'France',
      genre: 'Electro',
      number: 2,
    },
    {
      id: 74,
      name: 'Kaiser Chiefs',
      debut: 2003,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 75,
      name: 'Kap Bambino',
      debut: 2001,
      country: 'France',
      genre: 'Electro',
      number: 2,
    },
    {
      id: 76,
      name: 'Kasabian',
      debut: 1997,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 77,
      name: 'L7',
      debut: 1985,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 78,
      name: 'LCD Soundsystem',
      debut: 2002,
      country: 'United States',
      genre: 'Electro',
      number: 6,
    },
    {
      id: 79,
      name: 'Lana Del Rey',
      debut: 2011,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 80,
      name: 'Le Tigre',
      debut: 1998,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 81,
      name: 'Led Zeppelin',
      debut: 1968,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 82,
      name: 'Les Rita Mitsouko',
      debut: 1980,
      country: 'France',
      genre: 'Chanson Française',
      number: 2,
    },
    {
      id: 83,
      name: 'Lil Nas X',
      debut: 2018,
      country: 'United States',
      genre: 'Rap',
      number: 1,
    },
    {
      id: 84,
      name: 'Lou Reed',
      debut: 1972,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 85,
      name: 'Lucy Dacus',
      debut: 2016,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 86,
      name: 'MGMT',
      debut: 2005,
      country: 'United States',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 87,
      name: 'Mac DeMarco',
      debut: 2012,
      country: 'Canada',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 88,
      name: 'Mademoiselle K',
      debut: 2006,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 89,
      name: 'Maximo Park',
      debut: 2001,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 90,
      name: "Melody's Echo Chamber",
      debut: 2012,
      country: 'France',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 91,
      name: 'Metronomy',
      debut: 2006,
      country: 'United Kingdom',
      genre: 'Electro',
      number: 5,
    },
    {
      id: 92,
      name: 'Miles Kane',
      debut: 2011,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 93,
      name: 'Mini Mansions',
      debut: 2009,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 94,
      name: 'Niall Horan',
      debut: 2016,
      country: 'Ireland',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 95,
      name: "Noel Gallagher's High Flying Birds",
      debut: 2011,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 96,
      name: 'November Ultra',
      debut: 2021,
      country: 'France',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 97,
      name: 'Olivia Dean',
      debut: 2019,
      country: 'United Kingdom',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 98,
      name: 'Olivia Rodrigo',
      debut: 2021,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 99,
      name: 'Palma Violets',
      debut: 2011,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 100,
      name: 'Parquet Courts',
      debut: 2010,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 101,
      name: 'Pat Benatar',
      debut: 1979,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 102,
      name: 'Patti Smith',
      debut: 1975,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 103,
      name: 'Peace',
      debut: 2009,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 104,
      name: 'Peter Doherty',
      debut: 2004,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 105,
      name: 'Phoenix',
      debut: 1999,
      country: 'France',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 106,
      name: 'Pond',
      debut: 2008,
      country: 'Australia',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 107,
      name: 'Pulp',
      debut: 1978,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 6,
    },
    {
      id: 108,
      name: 'Queens of the Stone Age',
      debut: 1996,
      country: 'United States',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 109,
      name: 'Reneé Rapp',
      debut: 2023,
      country: 'United States',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 110,
      name: 'Saez',
      debut: 1999,
      country: 'France',
      genre: 'Chanson Française',
      number: 1,
    },
    {
      id: 111,
      name: 'Sleater-Kinney',
      debut: 1994,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 112,
      name: 'Spoon',
      debut: 1993,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 113,
      name: 'Stereophonics',
      debut: 1992,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 114,
      name: 'Stromae',
      debut: 2009,
      country: 'Belgium',
      genre: 'Electro',
      number: 1,
    },
    {
      id: 115,
      name: 'Suede',
      debut: 1989,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 116,
      name: 'Swim Deep',
      debut: 2011,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 117,
      name: 'System Of A Down',
      debut: 1994,
      country: 'United States',
      genre: 'Metal',
      number: 4,
    },
    {
      id: 118,
      name: 'TV On The Radio',
      debut: 2001,
      country: 'United States',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 119,
      name: 'Tame Impala',
      debut: 2007,
      country: 'Australia',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 120,
      name: 'Temples',
      debut: 2012,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 121,
      name: 'The Beatles',
      debut: 1960,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 122,
      name: 'The Black Keys',
      debut: 2001,
      country: 'United States',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 123,
      name: 'The Cure',
      debut: 1976,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 124,
      name: 'The Dandy Warhols',
      debut: 1994,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 125,
      name: 'The Dead Weather',
      debut: 2009,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 126,
      name: 'The Doors',
      debut: 1965,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 127,
      name: 'The Drums',
      debut: 2008,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 128,
      name: 'The Fratellis',
      debut: 2005,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 129,
      name: 'The Hives',
      debut: 1993,
      country: 'Sweden',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 130,
      name: 'The Horrors',
      debut: 2005,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 131,
      name: 'The Jesus and Mary Chain',
      debut: 1983,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 132,
      name: 'The Kills',
      debut: 2000,
      country: 'United States',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 133,
      name: 'The Last Dinner Party',
      debut: 2023,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 134,
      name: 'The Last Shadow Puppets',
      debut: 2008,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 135,
      name: 'The Lemon Twigs',
      debut: 2014,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 136,
      name: 'The Libertines',
      debut: 1997,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 137,
      name: 'The Maccabees',
      debut: 2004,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 138,
      name: 'The Mamas & The Papas',
      debut: 1965,
      country: 'United States',
      genre: 'Pop',
      number: 4,
    },
    {
      id: 139,
      name: 'The Moldy Peaches',
      debut: 1994,
      country: 'United States',
      genre: 'Alternatif',
      number: 2,
    },
    {
      id: 140,
      name: 'The Raconteurs',
      debut: 2005,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 141,
      name: 'The Rapture',
      debut: 1998,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 142,
      name: 'The Raveonettes',
      debut: 2001,
      country: 'Denmark',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 143,
      name: 'The Stone Roses',
      debut: 1983,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 144,
      name: 'The Strokes',
      debut: 1998,
      country: 'United States',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 145,
      name: 'The Subways',
      debut: 2003,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 146,
      name: 'The Vaccines',
      debut: 2010,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 147,
      name: 'The White Stripes',
      debut: 1997,
      country: 'United States',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 148,
      name: 'The Who',
      debut: 1964,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 149,
      name: 'The Wombats',
      debut: 2003,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 150,
      name: 'Thee Oh Sees',
      debut: 1997,
      country: 'United States',
      genre: 'Rock',
      number: 5,
    },
    {
      id: 151,
      name: 'Therapie TAXI',
      debut: 2013,
      country: 'France',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 152,
      name: 'Ty Segall',
      debut: 2008,
      country: 'United States',
      genre: 'Rock',
      number: 1,
    },
    {
      id: 153,
      name: 'Vampire Weekend',
      debut: 2006,
      country: 'United States',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 154,
      name: 'Wet Leg',
      debut: 2019,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 2,
    },
    {
      id: 155,
      name: 'White Lies',
      debut: 2007,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 156,
      name: 'Wolf Alice',
      debut: 2010,
      country: 'United Kingdom',
      genre: 'Rock',
      number: 4,
    },
    {
      id: 157,
      name: 'Wolfmother',
      debut: 2000,
      country: 'Australia',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 158,
      name: 'Yeah Yeah Yeahs',
      debut: 2000,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 159,
      name: 'ZAYN',
      debut: 2015,
      country: 'United Kingdom',
      genre: 'Pop',
      number: 1,
    },
    {
      id: 160,
      name: 'boygenius',
      debut: 2018,
      country: 'United States',
      genre: 'Rock',
      number: 3,
    },
    {
      id: 161,
      name: 'girl in red',
      debut: 2016,
      country: 'Norway',
      genre: 'Pop',
      number: 1,
    },
  ];

  artistToFind!: Artist;
  triesCounter!: number;
  // donner un artiste au hasard au chargement de la page
  ngOnInit() {
    const randomIndex = Math.floor(Math.random() * this.musicArtists.length);
    this.artistToFind = this.musicArtists[randomIndex];
    console.log(this.artistToFind);
    this.triesCounter = 0;
    // si j'arrive à utiliser l'api spotify un jour
    //  private apiService: ApiCallService = inject(ApiCallService);
    // this.apiService.getAccessToken();
    // this.apiService.getArtists();
  }

  // écrit dans l'input
  guess: string = '';
  // afficher la suite si input rempli
  inputFilled: boolean = false;

  // liste des artistes dont la première lettre correspond à ce qui est écrit dans l'input
  artistsListDisplay: Artist[] = [];
  // quand l'utilisateur tape une lettre dans l'input, recherche les artistes qui correpsondent à la première lettre
  displayArtistList() {
    // prend la première lettre du guess, mise en majuscule
    const firstLetters = this.guess.toUpperCase();

    // filtre les artistes dont le nom commence par cette lettre
    if (firstLetters) {
      this.artistsListDisplay = this.musicArtists
        .filter((artist) => artist.name.toUpperCase().startsWith(firstLetters))
        .slice(0, 5);
    }
    // montrer la liste
    this.inputFilled = true;
  }

  // l'artiste sélectionné dans la liste proposée à l'utilisateur
  selectedArtist: Artist[] = [];
  // si un artiste est sélectionné, pour afficher la suite
  buttonClicked: boolean = false;
  // si l'artiste à deviner correspond à l'artiste sélectionné
  goodAnswer!: boolean;

  // vérifier chaque propriété de l'artiste
  goodCountry!: boolean;
  goodDebut!: boolean;
  goodGenre!: boolean;
  goodNumber!: boolean;

  // gérer affichage des dates et membres (indices plus ou moins)
  debutBefore!: boolean;
  numberInferior!: boolean;

  // artistes déjà guess à afficher
  previousArtists: any = [];

  // quand l'utilisateur clique sur l'artiste sélectionné, le retrouver dans le tableau des artistes et vérifier si les deux correspondent
  selectArtist(artistSelected: Artist) {
    this.triesCounter++;
    this.selectedArtist = this.musicArtists.filter(
      (artist) => artist.name === artistSelected.name
    );
    // verifie si nom correspond (si oui réponse correcte)
    this.selectedArtist[0]?.name === this.artistToFind?.name
      ? (this.goodAnswer = true)
      : (this.goodAnswer = false);

    // Vérifie si le pays correspond (pour affichage ensuite)
    this.selectedArtist[0]?.country === this.artistToFind?.country
      ? (this.goodCountry = true)
      : (this.goodCountry = false);

    // Vérifie si le début correspond
    this.selectedArtist[0]?.debut === this.artistToFind?.debut
      ? (this.goodDebut = true)
      : (this.goodDebut = false);

    this.selectedArtist[0]?.debut! < this.artistToFind?.debut
      ? (this.debutBefore = true)
      : (this.debutBefore = false);

    // Vérifie si le genre correspond
    this.selectedArtist[0]?.genre === this.artistToFind?.genre
      ? (this.goodGenre = true)
      : (this.goodGenre = false);

    // Vérifie si le nombre correspond
    this.selectedArtist[0]?.number === this.artistToFind?.number
      ? (this.goodNumber = true)
      : (this.goodNumber = false);

    this.selectedArtist[0]?.number! < this.artistToFind?.number
      ? (this.numberInferior = true)
      : (this.numberInferior = false);

    // conditionne apparititon composant réponse
    this.buttonClicked = true;

    // ajout de l'artiste sélectionné au tableau des previosu artists pour garder une trace des guess précédents
    this.previousArtists.push(this.selectedArtist);
    console.log(this.previousArtists);

    // cacher la liste de bouttons
    this.inputFilled = false;
  }

  resetGame() {
    const randomIndex = Math.floor(Math.random() * this.musicArtists.length);
    this.artistToFind = this.musicArtists[randomIndex];
    console.log(this.artistToFind);
    this.inputFilled = false;
    this.selectedArtist = [];
    this.artistsListDisplay = [];
    this.guess = '';
    this.buttonClicked = false;
    this.previousArtists = [];
    // Réinitialisation des autres variables si nécessaire
    this.goodAnswer = false;
    this.goodCountry = false;
    this.goodDebut = false;
    this.goodGenre = false;
    this.goodNumber = false;
    this.debutBefore = false;
    this.numberInferior = false;
    this.triesCounter = 0;
  }
}
