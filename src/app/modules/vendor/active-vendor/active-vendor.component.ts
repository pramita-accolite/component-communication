import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VendorComponent } from '../vendor.component';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnChanges {

  @Input('parentData') public vendorList: any;
  
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  




 

}
