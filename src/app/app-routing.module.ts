/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./pages/reset/reset.module').then(m => m.ResetPageModule)
  },

  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('./pages/analytics/analytics.module').then(m => m.AnalyticsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'venue-profile',
    loadChildren: () => import('./pages/venue-profile/venue-profile.module').then(m => m.VenueProfilePageModule)
  },

  {
    path: 'maps',
    loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsPageModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./pages/foods/foods.module').then(m => m.FoodsPageModule)
  },
  {
    path: 'add-new-foods',
    loadChildren: () => import('./pages/add-new-foods/add-new-foods.module').then(m => m.AddNewFoodsPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },
  {
    path: 'tracker',
    loadChildren: () => import('./pages/tracker/tracker.module').then(m => m.TrackerPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxPageModule)
  }, {
    path: 'select-drivers',
    loadChildren: () => import('./pages/select-drivers/select-drivers.module').then(m => m.SelectDriversPageModule)
  },
  {
    path: 'new-order',
    loadChildren: () => import('./pages/new-order/new-order.module').then(m => m.NewOrderPageModule)
  },
  {
    path: 'preview',
    loadChildren: () => import('./pages/preview/preview.module').then(m => m.PreviewPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then(m => m.LanguagesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./pages/faqs/faqs.module').then(m => m.FaqsPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
