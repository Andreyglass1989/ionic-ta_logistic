import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

	total: any;
	list4 = [];
	@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
    let listBuffer = []
    let list3 = []
    listBuffer = this.navParams.get('listBuffer');
    list3 = this.navParams.get('list3');
    let total0 = this.navParams.get('total');
    console.log(total0)
  	this.list4= []
  	for (var z=0; z< listBuffer.length; z++){
  		// console.log(this.list3[z])
        var todo_last = {
        	quantity: null,
        	name: null,
        	price: null,
        	total: null

        };
        todo_last.quantity = listBuffer[z].quantity
        todo_last.name = list3[z].name
        todo_last.price = list3[z].price
        todo_last.total = todo_last.price * todo_last.quantity
        this.list4.push(todo_last);

    } 
    this.total = total0
   // this.content.scrollToLeft();

  }

}
