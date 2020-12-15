import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog-pg',
  templateUrl: './blog-pg.component.html',
  styleUrls: ['./blog-pg.component.css'],
})
export class BlogPgComponent implements OnInit {
  constructor() {}

  @Output()list = [
    {
      title: 'How To Save Content From Paris Water',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image1.jpg',
      author: 'karthik',
      tag: 'popular',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'Security In Paris ',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image2.svg',
      tag: 'popular',
      author: 'karthik',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'Is Working in France Good',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image3.jpg',
      author: 'karthik',
      tag: 'popular',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'How To Get Your Spouse To france',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image1.jpg',
      author: 'karthik',
      tag: 'popular',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'What are the Tax Benefits we Have',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image1.jpg',
      author: 'karthik',
      tag: 'popular',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'Student Life in France',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image1.jpg',
      author: 'karthik',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'Prefecture In FRance',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image1.jpg',
      author: 'karthik',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'Racism IN France',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image1.jpg',
      author: 'karthik',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    },
    {
      title: 'Expenses & Cost Of Living In France And How To make budget',
      subtitle:
        'Making an Offer Yours Customers Will Love ❤️ Courtesy of @dfinnegan_⠀Creating a good offer is...',
      img: '../../../assets/image/image1.jpg',
      author: 'karthik',
      description:
        // tslint:disable-next-line: max-line-length
        'Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism. After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid. Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life! Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!Hello, my name is Maite and I am the Head of New Business Development at Back Market . I come from Málaga, a city in the south of Spain where I studied journalism.After my studies, I moved to Ireland to improve my English and I soon got a job at Apple, where I stayed for 3 years and a half . After that, I felt the need to pursue new adventures at the IE Business School in Madrid.Towards the end of my master\'s degree, I started applying again and that\'s how I discovered Back Market . Since the very first interview, I felt totally involved in the project . I decided to join the team and move to Paris. Best decision of my life!',
      date: 'September 19,2019',
    }
  ];

  ngOnInit() {}
}
