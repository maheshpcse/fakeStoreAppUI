import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'singup',
        component: SignupComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'product-detail/:id',
        component: ProductDetailComponent
    },
    {
        path: 'my-profile',
        component: MyProfileComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
