import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ListOfBankService } from "../../../service/list-of-bank.service";

@Component({
  selector: "app-finance-cnt",
  templateUrl: "./finance-cnt.component.html",
  styleUrls: ["./finance-cnt.component.css"],
})
export class FinanceCntComponent implements OnInit {
  listofbanksource;
  loanamount = 0;
  tenure = 0;
  test = 0;

  constructor(private listofbank: ListOfBankService) {
    this.listofbanksource = listofbank.listofbank;
    this.loanamount = 700000;
    this.tenure = 5;
    console.log(this.calculateEmi(11, 15, 1000000));
  }

  ngOnInit() {}

  /**
   *
   *rateOfInterest : (Loan amount x Interest/12) x [(1+ interest rate/12)^loan tenure in number of months] / ([(1+ interest rate/12) ^ loan tenure in number of months]-1}
   */

  calculateEmi(
    rateOfInterest: number,
    loantenureyears: number,
    loanamount: number
  ) {
    var monthlyinterestrateration = rateOfInterest / 100 / 12;
    var loantenureinmonths = loantenureyears * 12;
    var top = Math.pow(1 + monthlyinterestrateration, loantenureinmonths);
    var bottom = top - 1;
    var emi = ((loanamount * monthlyinterestrateration * top) / bottom).toFixed(
      3
    );
    return emi;
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
