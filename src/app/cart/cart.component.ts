import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../api-services/products.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as _ from 'underscore';
declare var $: any;

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartList: any = [];
    userCartList: any = [];
    cartItemsTotal: any = 0;
    cartTotal: any = 0;
    productsList: any = [];
    productsListStatic: any = [];
    productSpinner: any = false;
    filterQuery: any = '';
    searchSpinner: any = false;
    showDiv: any = false;
    href: any = '';

    constructor(
        public router: Router,
        public route: ActivatedRoute,
        public productsService: ProductsService,
        public toastr: ToastrManager
    ) { }

    ngOnInit() {
        this.href = this.router.url;
        this.getUserCartDataList();
    }

    getUserCartDataList() {
        this.productSpinner = true;
        this.productsService.getUserCartData(2).subscribe(async (response: any) => {
            console.log('Get all cart list response isss', response);
            if (response) {
                this.cartList = response && response.length ? response : [];
            } else {
                this.toastr.errorToastr('Error while getting all cart list');
            }
            this.getAllProductsList();
        }, (error: any) => {
            this.toastr.errorToastr('Network failed. Please try again.');
            this.productSpinner = false;
        });
    }

    getAllProductsList() {
        this.productSpinner = true;
        this.productsService.getAllProductsData().subscribe(async (response: any) => {
            console.log('Get all products list response isss', response);
            if (response) {
                this.productsList = response;
                this.productsListStatic = response;
                if (this.cartList && this.cartList.length) {
                    const userProducts = this.cartList[0].products;
                    for (const item of this.productsList) {
                        for (const data of userProducts) {
                            if (Number(data.productId) === Number(item.id)) {
                                const newItem = Object.assign({}, item);
                                newItem.quantity = Number(data.quantity);
                                this.cartItemsTotal += Number(item.price) * Number(data.quantity);
                                this.cartTotal += this.cartItemsTotal;
                                this.userCartList.push(newItem);
                            }
                        }
                    }
                }
                console.log('Final userCartList isss', this.userCartList);
            } else {
                this.toastr.errorToastr('Error while getting all products list');
            }
            this.productSpinner = false;
        }, (error: any) => {
            this.toastr.errorToastr('Network failed. Please try again.');
            this.productSpinner = false;
        });
    }

}
