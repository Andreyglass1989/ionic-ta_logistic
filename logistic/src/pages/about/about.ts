import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogisticProvider } from '../../providers/logistic/logistic';
import { InvoicePage } from '../invoice/invoice';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	chooseCity = {
          3480: 'Cherkassi', 3481: 'Chernigov',
          3482: 'Chernovtsu', 3483: 'Krim',
          3484: 'Dnepropetrovsk', 3485: 'Donetsk',
          3486: 'Ivano-Frankovsk', 3487: 'Kherson',
          3488: 'Khmelnitskij', 3489: 'Kirovograd',
          3490: 'Kiev', 3491: 'Kievskaya oblast',
          3492: 'Lugansk', 3493: 'Lviv',
          3494: 'Nikolaev', 3495: 'Odessa',
          3496: 'Poltava', 3497: 'Rovno',
          3498: 'Sevastopol', 3499: 'Sumu',
          3500: 'Ternopol', 3501: 'Vinnitsa',
          3502: 'Lutsk', 3503: 'Uzhgorod',     
          3504: "Zaporozh'e", 3505: 'Zhitomir',
          4224: 'Kharkiv'
    };

	packNumberInput: any;
	packNumber :any;
	total :any;
	packHistory : any;
	packInputId :any;
	packProductQuantityId :any;
	listAddressId :any;
	address_id :any;
	full_customer_address :string;
	listBuffer = [];
	list3 = [];
	list4 = [];
	fullPackProduct : any;
  private inputParcel : FormGroup;

  validation_messages = {
      'packNumberInput': [
      { type: 'pattern', message: 'Min value must have 9 digit only.' },
      { type: 'required', message: 'Please enter a parcel number' },
    ]
  }

  constructor(public navCtrl: NavController, private logistic:LogisticProvider, private formBuilder: FormBuilder) {

    this.inputParcel = this.formBuilder.group({
      // packNumberInput: ['', Validators.pattern('[0-9]{9}')],
      packNumberInput: ['', Validators.compose([Validators.pattern('[0-9]{9}'), Validators.required])],
    });

  }

  saveForm(){
    this.listBuffer = []
    this.list3 = []

  	//packNumberInput
    //console.log(this.inputParcel.value.packNumberInput)
	  this.logistic.getPack(this.inputParcel.value.packNumberInput).subscribe(packNumber=>{
		this.packNumber = packNumber[0]
		this.packInputId = packNumber[0].parcel_id
		this.total = packNumber[0].total
  	});
  }

  getHistory(){

  	this.logistic.getPackHistory(this.packInputId).subscribe(packHistory=>{
  		this.packHistory = packHistory
  	});

  	this.logistic.getParcelPackProduct(this.packInputId).subscribe(packProductQuantityId=>{
      console.log(packProductQuantityId)
  		for (var i=0; i<packProductQuantityId.length; i++){
            var packProduct = {
            	quantity: "",
            	packProductId: ""
            };
            packProduct.quantity = packProductQuantityId[i].quantity
            packProduct.packProductId = packProductQuantityId[i].pack_product_id
            this.listBuffer.push(packProduct);
        }
  	});

  	this.logistic.getAddressId(this.packInputId).subscribe(listAddressId=>{
  		this.address_id = listAddressId[0].address_id
  	});
  }

  getCustomers(){
    //console.log(this.listBuffer)
  	this.logistic.getCustomer(this.address_id).subscribe(packProductQuantityId=>{
  		this.full_customer_address = packProductQuantityId[0].firstname + " " + packProductQuantityId[0].lastname + " " + this.chooseCity[packProductQuantityId[0].zone_id] + " obl., " + packProductQuantityId[0].city + ", " + packProductQuantityId[0].address_1 + " " +packProductQuantityId[0].dom
  	});	

  	for (var j=0; j<this.listBuffer.length; j++){
  		this.logistic.getPackProduct(this.listBuffer[j].packProductId).subscribe(fullPackProduct=>{
  			for (var i=0; i<fullPackProduct.length; i++){
                var list1 = {
                  name: "",
                  price: ""
                };
                list1.name = fullPackProduct[i].name
                list1.price = fullPackProduct[i].price
                this.list3.push(list1);
            }
  		});
  	}
  }



  getInvoice0(){
    console.log(this.listBuffer)
    this.navCtrl.push(InvoicePage, { 
      listBuffer: this.listBuffer,
      list3: this.list3,
      total: this.total

    });
  }

}
