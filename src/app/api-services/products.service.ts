import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    public http: HttpClient
  ) { }

  getAllCategoriesData() {
    // return this.http.get(`https://fakestoreapi.com/products/categories`);
    return this.http.get(APIURL.GET_ALL_CATEGORIES);
  }

  getAllProductsData() {
    // return this.http.get(`https://fakestoreapi.com/products`);
    return this.http.get(APIURL.GET_ALL_PRODUCTS);
  }

  getProductsDataByCaterogy(category: any) {
    // return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
    return this.http.get(APIURL.GET_PRODUCTS_BY_CATEGORY + `/${category}`);
  }

  getProductDetailsById(id: any) {
    // return this.http.get(`https://fakestoreapi.com/products/${id}`);
    return this.http.get(APIURL.GET_PRODUCT_DETAILS_BY_ID + `/${id}`);
  }

  getUserCartData(id: any) {
    // return this.http.get(`https://fakestoreapi.com/carts/user/2`);
    return this.http.get(APIURL.GET_USER_CART_DATA + `/${id}`);
  }

  addProductToCart(data: any) {
    // return this.http.post(`https://fakestoreapi.com/carts`, data);
    return this.http.post(APIURL.ADD_PRODUCT_TO_CART, data);
  }
}
