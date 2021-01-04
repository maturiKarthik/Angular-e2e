import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ListOfSchoolsService {

  ListOfSchools = [
    {
      rank: 52,
      name: 'University of Bologne ',
      fees: '5K',
      country: 'italy',
      courses: ['computer science', 'Biology'],
      type: 'public',
    },
    {
      rank: 52,
      name: 'Université PSL ',
      fees: '5K',
      country: 'France',
      courses: ['computer science','Biology'],
      type: 'public',
    },
    {
      rank: 61,
      name: 'Ecole Polytechnique ',
      country: 'France',
      fees: '5K',
      courses: ['computer science', 'Biology' ,'Human'],
      type: 'public',
    },
    {
      rank: 83,
      name: 'Sorbonne University ',
      country: 'France',
      fees: '5K',
      courses: ['computer science', 'Biology' ,'Human'],
      type: 'public',
    },
    {
      rank: 83,
      name: 'Sorbonne University ',
      country: 'France',
      courses: ['computer science','Biology'],

      fees: '5K',
      type: 'public',
    },
    {
      rank: 138,
      name: 'CentraleSupélec ',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 161,
      name: 'École Normale Supérieure de Lyon ',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 242,
      name: 'Ecole des Ponts ParisTech',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 242,
      name: 'Sciences Po LogoSciences PoMore	',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 275,
      name: 'Université de Paris LogoUniversité de ParisMore	',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',

      fees: '5K',
      type: 'public',
    },
    {
      rank: 287,
      name: 'Université Paris 1 Panthéon-Sorbonne',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 291,
      name: 'ENS Paris-Saclay',
      country: 'France',
      courses: ['computer science','Biology'],

      fees: '5K',
      type: 'public',
    },
    {
      rank: 305,
      name: 'Université Paris-Saclay',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 342,
      name: 'Université Grenoble Alpes',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 398,
      name: 'Université de Strasbourg',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 425,
      name: 'University of Bordeaux',
      country: 'France',
      fees: '5K',
      type: 'public',
      courses: ['computer science','Biology'],
    },
    {
      rank: 520,
      name: 'Aix-Marseille University',
      country: 'France',
      fees: '5K',
      type: 'public',
      courses: ['computer science', 'Biology' ,'Human']
    },
    {
      rank: 550,
      name: 'Institut National des Sciences Appliquées de Lyon (INSA)',
      country: 'France',
      courses: ['computer science', 'Biology' ,'Human'],
      fees: '5K',
      type: 'public',
    },
    {
      rank: 550,
      name: 'University Paris 2 Panthéon-Assas',
      country: 'France',
      courses: ['computer science', 'Biology' ,'Human'],
      fees: '5K',
      type: 'public',
    },
    {
      rank: 560,
      name: 'Université Paul Sabatier Toulouse III',
      country: 'France',
      courses: ['computer science', 'Biology' ,'Human'],
      fees: '5K',
      type: 'public',
    },
    {
      rank: 650,
      name: 'Université Côte d\'Azur',
      country: 'France',
      courses: ['computer science', 'Biology' ,'Human'],
      fees: '5K',
      type: 'public',
    },
    {
      rank: 750,
      name: 'Université Claude Bernard Lyon 1',
      country: 'France',
      courses: ['computer science', 'Biology' ,'Human'],
      fees: '5K',
      type: 'public',
    },
    {
      rank: 800,
      name: 'Université de Lille',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 1000,
      name: 'Université de Lorraine',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 1000,
      name: 'Université de Nantes',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 1000,
      name: 'Université de Rennes 1',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 1000,
      name: 'Université de Versailles Saint-Quentin-en-Yvelines (UVSQ)',
      courses: ['computer science', 'Biology' ,'Human'],
      country: 'France',
      fees: '5K',
      type: 'public',
    },
    {
      rank: 1000,
      name: 'Paul Valéry University Montpellier',
      country: 'France',
      courses: ['computer science', 'Biology' ,'Human'],
      fees: '5K',
      type: 'public',
    },
    {
      rank: 1000,
      name: 'Université Toulouse 1 Capitole ',
      country: 'France',
      fees: '5K',
      courses: ['computer science', 'Biology' ,'Human'],
      type: 'public',
    },
    {
      rank: 52,
      name: 'University of xxx ',
      courses: ['computer science', 'Biology' ,'test'],
      fees: '5K',
      country: 'poland',
      type: 'public',
    },
  ];

  constructor() { }
  dataSource = new MatTableDataSource(this.ListOfSchools);

  applyFilter1(dat : string){
    this.dataSource.filter = dat.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
