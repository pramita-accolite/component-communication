import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  vendorDetails = [{name:"Pramita",age:30,city:"Kolkata"},{name:"Ram",age:35,city:"Asansol"},{name:"Ita",age:78,city:"Mumbai"}]


}
