import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      nom : "Desaegher",
      prenom : "Thomas",
      age : 57,
      adresse : {
        numero: 110,
        rue: "du marais",
        ville : "Lille"
      },
      ordinateurs : [
        { marque : "Asus", modele : "TUF GAMING", prix : 899.99 },
        { marque : "HP", modele : "Chromebook", prix : 1899.99 }
      ]
    },
    {
      nom : "Vossough",
      prenom : "Adrien",
      age : 25,
      adresse : {
        numero: 27,
        rue: "du baraquet",
        ville : "Lomme"
      },
      ordinateurs : [
        { marque : "Acer", modele : "Nitro Public", prix : 599.99 }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addUser(user : any) {
    this.users.push(user);
  }

}
