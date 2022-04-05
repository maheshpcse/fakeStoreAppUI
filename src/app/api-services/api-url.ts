import { environment } from "src/environments/environment";

export const APIURL = {
  GET_USER_LOGIN: environment.apiUrl + 'auth/login',

  GET_ALL_CATEGORIES: environment.apiUrl + 'products/categories',
  GET_ALL_PRODUCTS: environment.apiUrl + 'products',
  GET_PRODUCTS_BY_CATEGORY: environment.apiUrl + 'products/category',
  GET_PRODUCT_DETAILS_BY_ID: environment.apiUrl + 'products',

  GET_USER_CART_DATA: environment.apiUrl + 'carts/user',
  ADD_PRODUCT_TO_CART: environment.apiUrl + 'carts'
}
