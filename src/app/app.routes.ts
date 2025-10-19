import { Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { LoginComponent } from './components/forms/login/login.component';
import { CreateAccountComponent } from './components/forms/create-account/create-account.component';
import { ErrPageComponent } from './components/err-page/err-page.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
        title: 'Home Page',
        canActivate: [authGuard],
    },
    {
        path: 'products',
        loadComponent: () => import('./components/products/products.component').then(c => c.ProductsComponent),
        title: 'Products Page',
        canActivate: [authGuard]
    },
    {
        path: 'details/:id',
        loadComponent: () => import('./components/more-details/more-details.component').then(c => c.MoreDetailsComponent),
        title: 'More Details'
    },
    {
        path: 'forms',
        component: FormsComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                title: 'LogIn Form'
            },
            {
                path: 'createAccount',
                component: CreateAccountComponent,
                title: 'Create Account'
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/forms/login'
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/forms'
    },
    {
        path: '**',
        component: ErrPageComponent,
        title: 'Not Found'
    }
];
