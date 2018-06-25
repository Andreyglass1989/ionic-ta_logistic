// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LogisticProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogisticProvider {
	url;
	url2;
	url3;
	url4;
	url5;
	url6;
	parcel_number;
	//parcel_id;
	//addressId;

  constructor(public http: Http) {
    this.url = 'http://swiftaviagroup.com/api/LK/search_parcel/';
    this.url2 = 'http://swiftaviagroup.com/api/LK/parcel_history/';
    this.url3 = 'http://swiftaviagroup.com/api/LK/parcel_pack_product/';
    this.url4 = 'http://swiftaviagroup.com/api/LK/parcel/';
    this.url5 = 'http://swiftaviagroup.com/api/LK/address/';
    this.url6 = 'http://swiftaviagroup.com/api/LK/packproduct/';
  }

  getPack(parcelNum){
  	return this.http.get(this.url + parcelNum + '/')
  	.map(res => res.json())

  }

  getPackHistory(parcelId){
  	return this.http.get(this.url2 + parcelId + '/')
  	.map(res => res.json())
  }

  getParcelPackProduct(parcelId){
  	return this.http.get(this.url3 + parcelId + '/')
  	.map(res => res.json())
  }

  getAddressId(parcelId){
  	return this.http.get(this.url4 + parcelId + '/')
  	.map(res => res.json())
  }

  getCustomer(addressId){
  	return this.http.get(this.url5 + addressId + '/')
  	.map(res => res.json())
  }

  getPackProduct(packProductId){
  	return this.http.get(this.url6 + packProductId + '/')
  	.map(res => res.json())
  }

  

}
