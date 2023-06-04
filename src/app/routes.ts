import { Routes } from '@angular/router';
import { HomepageComponent } from './content/pages/homepage/homepage.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserProfileComponent } from './content/pages/user-profile/user-profile.component';

export const appRoutes: Routes = [
    {path: '', component: HomepageComponent},
    {
        path: '',
        children: [
            {path: 'UserProfile', component: UserProfileComponent, canActivate: [AuthGuard]},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];