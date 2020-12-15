import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-palace',
  templateUrl: './market-palace.component.html',
  styleUrls: ['./market-palace.component.css'],
})
export class MarketPalaceComponent implements OnInit {
  constructor() {}

  productList = [
    {
      id: '23A456',
      title: 'Fridge',
      price: 'Price - 35$',
      description:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.',
    },
    {
      id: '23A456',
      title: 'electric Heater',
      price: 'Price - 35$',
      description:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.',
    },
    {
      id: '23A456',
      title: 'Beds',
      price: 'Price - 35$',
      description:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.',
    },
    {
      id: '23A456',
      title: 'Jackets',
      price: 'Price - 35$',
      description:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.',
    },
    {
      id: '23A456',
      title: 'phones',
      price: 'Price - 35$',
      description:
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.',
    },
  ];

  ngOnInit() {}
}
