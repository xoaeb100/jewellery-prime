import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { UserModule } from './user/user.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppLayoutComponent,
          children: [
            {
              path: '',
              loadChildren: () =>
                import('./demo/components/dashboard/dashboard.module').then(
                  (m) => m.DashboardModule
                ),
            },

            {
              path: 'sign-up',
              loadChildren: () =>
                import('../app/user/user.module').then((m) => m.UserModule),
            },
            {
              path: 'banks',
              loadChildren: () =>
                import('../app/banks/banks.module').then((m) => m.BanksModule),
            },

            {
              path: 'plans',
              loadChildren: () =>
                import('../app/plans/plans.module').then((m) => m.PlansModule),
            },
            {
              path: 'transaction',
              loadChildren: () =>
                import('../app/transactions/transactions.module').then(
                  (m) => m.TransactionsModule
                ),
            },
            {
              path: 'uikit',
              loadChildren: () =>
                import('./demo/components/uikit/uikit.module').then(
                  (m) => m.UIkitModule
                ),
            },
            {
              path: 'utilities',
              loadChildren: () =>
                import('./demo/components/utilities/utilities.module').then(
                  (m) => m.UtilitiesModule
                ),
            },
            {
              path: 'documentation',
              loadChildren: () =>
                import(
                  './demo/components/documentation/documentation.module'
                ).then((m) => m.DocumentationModule),
            },
            {
              path: 'blocks',
              loadChildren: () =>
                import('./demo/components/primeblocks/primeblocks.module').then(
                  (m) => m.PrimeBlocksModule
                ),
            },
            {
              path: 'pages',
              loadChildren: () =>
                import('./demo/components/pages/pages.module').then(
                  (m) => m.PagesModule
                ),
            },
          ],
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('./demo/components/auth/auth.module').then(
              (m) => m.AuthModule
            ),
        },
        {
          path: 'landing',
          loadChildren: () =>
            import('./demo/components/landing/landing.module').then(
              (m) => m.LandingModule
            ),
        },
        // { path: 'notfound', component: NotfoundComponent },
        { path: '**', redirectTo: '/notfound' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
