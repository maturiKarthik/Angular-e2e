import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ListOfBankService {
  listofbank = [
    {
      name: "Punjab National Bank",
      image:
        "../../../../assets/image/bank/250px-Punjab_national_bank_logo_(standalone).svg.png",
      ir: "7.30% to 9.80% p.a.",
      fees: "1% of loan amount",
      min: 7.3,
      max: 9.8,
    },
    {
      name: "Central Bank of India",
      image:
      "../../../../assets/image/bank/centalbankofindia.png",
      ir: "7.60% to 9.60% p.a.",
      fees: "	Courses in India: Nil",
      min: 7.6,
      max: 9.6,
    },
    {
      name: "Canara Bank",
      image: "../../../../assets/image/bank/120px-Canara_Bank_Logo.svg.png",
      ir: "7.85% to 9.85% p.a.",
      fees: "	Nil",
      min: 7.85,
      max: 9.85,
    },
    {
      name: "State Bank of India",
      image: "../../../../assets/image/bank/statebankofindia.png",
      ir: "	7.95% to 10.05% p.a.",
      fees: "	Up to Rs.10,000",
      min: 7.95,
      max: 10.05,
    },
    {
      name: "Bank of Baroda",
      image:"../../../../assets/image/bank/bob.png",
      ir: "	8.00% to 10.25% p.a.",
      fees: "	1% of loan amount",
      min: 8.0,
      max: 10.25,
    },
    {
      name: "IDBI Bank",
      image:"../../../../assets/image/bank/idbi.png",
      ir: "	8.25% to 10.25% p.a.",
      fees: "	Contact the bank",
      min: 8.25,
      max: 10.25,
    },
    {
      name: "Syndicate Bank",
      image:"../../../../assets/image/bank/sbbank.png",
      ir: "8.25% to 11% p.a.",
      fees: "	Nil",
      min: 8.25,
      max: 11,
    },
    {
      name: "Bank of India",
      image:"../../../../assets/image/bank/boi.png",
      ir: "	8.95% to 9.75% p.a.",
      fees: "	Up to Rs.5,000",
      min: 8.95,
      max: 9.75,
    },
    {
      name: "Tamilnad Mercantile Bank",
      image:"../../../../assets/image/bank/tmb.png",
      ir: "	9.10% to 11.60% p.a.",
      fees: "	Nil",
      min: 9.1,
      max: 11.6,
    },
    {
      name: "Oriental Bank of Commerce",
      image:"../../../../assets/image/bank/obc.png",
      ir: "9.40% to 11.40% p.a.",
      fees: "	Contact the bank",
      min: 9.4,
      max: 11.4,
    },
    {
      name: "HDFC",
      image:"../../../../assets/image/bank/hdfc.png",
      ir: "9.55% to 13.25% p.a.",
      fees: "	Up to 1% of loan amount",
      min: 9.55,
      max: 13.25,
    },
    {
      name: "UCO Bank",
      image:"../../../../assets/image/bank/uco.png",
      ir: "	9.95% to 10.35% p.a.",
      fees: "Nil",
      min: 9.95,
      max: 10.35,
    },

    {
      name: "Karnataka Bank",
      image:"../../../../assets/image/bank/kb.png",
      ir: "10.08% to 13.9% p.a.",
      fees: "	Contact the bank",
      min: 10.08,
      max: 13.9,
    },
    {
      name: "United Bank of India",
      image:"../../../../assets/image/bank/ubi.png",
      ir: "	10.25% to 10.35% p.a.",
      fees: "	Contact the bank",
      min: 10.25,
      max: 10.35,
    },
    {
      name: "Federal Bank",
      image:"../../../../assets/image/bank/fb.png",
      ir: "	10.25% p.a. onwards",
      fees: "Contact the bank",
      min: 10.25,
      max: "n/A",
    },
    {
      name: "Karur Vysya Bank",
      image:"../../../../assets/image/bank/kvb.png",
      ir: "11.25% to 12.95% p.a.",
      fees: "Nil",
      min: 11.25,
      max: 12.95,
    },
    {
      name: "Tata Capital	",
      image:"../../../../assets/image/bank/tc.png",
      ir: "10.99% p.a. onwards",
      fees: "	Contact the bank",
      min: 10.99,
      max: "n/A",
    },
    {
      name: "Jammu and Kashmir Bank",
      image:"../../../../assets/image/bank/jk.png",
      ir: "	11% to 13% p.a.",
      fees: "	1% of loan amount",
      min: 11,
      max: 13,
    },
    {
      name: "Andhra Bank",
      image:"../../../../assets/image/bank/Andhra_bank.svg.png",
      ir: "	11.15% to 11.45% p.a.",
      fees: "	Contact the bank",
      min: 11.15,
      max: 11.45,
    },
    {
      name: "ICICI Bank",
      image:"../../../../assets/image/bank/ICICI_Bank_Logo.svg.png",
      ir: "	11.25% to 14.60% p.a.",
      fees: "	RAAC pricing + GST",
      min: 11.25,
      max: 14.6,
    },
    {
      name: "Dhanalakshmi Bank",
      image:"../../../../assets/image/bank/db.png",
      ir: "	11.45% to 13.60% p.a.",
      fees: "	Nil",
      min: 11.45,
      max: 13.6,
    },
    {
      name: "Axis Bank",
      image:"../../../../assets/image/bank/120px-Axis_Bank_logo.svg.png",
      ir: "	13.70% to 15.20% p.a.",
      fees: "	Rs.15,000 + GST",
      min: 13.7,
      max: 15.2,
    },
    {
      name: "Kotak Mahindra Bank",
      image:"../../../../assets/image/bank/kmb.png",
      ir: "	Up to 16% p.a.",
      fees: "	Nil",
      min: "n/A",
      max: 16,
    },
  ];

  constructor() {}

  calculateEmi(
    rateOfInterest: number,
    loantenureyears: number,
    loanamount: number
  ) {
    // const rateOfInterest = 7.5;
    //const loantenureyears = 10;
    // const loanamount = 1000000;

    var monthlyinterestrateration = rateOfInterest / 100 / 12;
    console.log("mir :::" + monthlyinterestrateration + "--" + rateOfInterest);
    var loantenureinmonths = loantenureyears * 12;
    console.log("loantenureinmonths :::" + loantenureinmonths);
    var top = Math.pow(1 + monthlyinterestrateration, loantenureinmonths);
    var bottom = top - 1;
    var emi = [(loanamount * monthlyinterestrateration * top) / bottom];
    alert("EMI ::" + emi);
    console.log("EMI ::" + emi);
  }
}
