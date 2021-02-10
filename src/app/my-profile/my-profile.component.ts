import { CustomerDetailsService } from '../services/customer-reg.service';
import { UserDetails, SellerDetailsService } from '../services/seller-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {


  constructor(private auth2: CustomerDetailsService,
    private auth3: SellerDetailsService) { }

  ngOnInit(): void {
    
  }

  details = this.auth2.getUserDetails();
  name = this.auth2.getUserDetails().full_name ==undefined?this.auth3.getUserDetails().shopName:this.auth2.getUserDetails().full_name;
  email = this.auth2.getUserDetails().email;
  address = this.auth2.getUserDetails().address;
  contact = this.auth2.getUserDetails().conatct ==undefined?this.auth3.getUserDetails().officePhone:this.auth2.getUserDetails().conatct;
  

}
