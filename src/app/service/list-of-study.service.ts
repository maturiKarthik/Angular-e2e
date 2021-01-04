import { Injectable } from "@angular/core";

export interface Dicipline {
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class ListOfStudyService {
  constructor() {}

  /** Job title */
  dicipline: Dicipline[] = [
    { name: "Architecture" },
    { name: "Building & Constrution" },
    { name: "Administration Data processing" },
    { name: "Buisness Data processiog" },
    { name: "Computer Science" },
    { name: "Database" },
    { name: "Internet" },
    { name: "Multimedia" },
    { name: "Network" },
    { name: "Scientific Data Processing" },
    { name: "Database" },
    { name: "Internet" },
    { name: "Multimedia" },
    { name: "Network" },
    { name: "Scientific Data Processing" },
    { name: "Sofware" },
    { name: "System" },
    { name: "Food Service" },
    { name: "Hospitality" },
    { name: "Tourism" },
    { name: "Accountancy" },
    { name: "Audit and consultancy" },
    { name: "Banking" },
    { name: "Buisness Administration" },
    { name: "Finance" },
    { name: "Human Resource Management" },
    { name: "Insurance" },
    { name: "Internation trade" },
    { name: "Management" },
    { name: "Marketing" },
    { name: "Trade and Commercilizaion" },
    { name: "Biotechnology" },
    { name: "Human Biology" },
  ];
}
