import { RouterModule, Routes } from '@angular/router';
import { UserHomePageComponent } from './Pages/user page/user-home-page/user-home-page.component';
import { TutorServicePageComponent } from './Pages/user page/tutor-service-page/tutor-service-page.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlumberServicePageComponent } from './Pages/user page/plumber-service-page/plumber-service-page.component';
import { ElectricianServicePageComponent } from './Pages/user page/electrician-service-page/electrician-service-page.component';
import { AdminHomePageComponent } from './Pages/Admin/admin-home-page/admin-home-page.component';
import { RegLoginPageComponent } from './Pages/Registeration/reg-login-page/reg-login-page.component';
import { UserNavBarComponent } from './Pages/user page/user-nav-bar/user-nav-bar.component';
import { AdminListUserDetailsComponent } from './Pages/Admin/admin-list-user-details/admin-list-user-details.component';
import { AdminListProfessionalDetailsComponent } from './Pages/Admin/admin-list-professional-details/admin-list-professional-details.component';
import { AdmiSummaryComponent } from './Pages/Admin/admi-summary/admi-summary.component';

export const routes: Routes = 
[
    {path:"nav" , component:UserNavBarComponent},
    {path:"",redirectTo:"user",pathMatch:'full'},
    {path:'user',component:UserHomePageComponent},
    {path:"tutor",component:TutorServicePageComponent},
    {path:"plumber",component:PlumberServicePageComponent},
    {path:"electrician",component:ElectricianServicePageComponent},
    {path:"admin",component:AdminHomePageComponent,
children:[
    {
        path:"aduser",component:AdminListUserDetailsComponent
    },
    {
        path:"adproffesional",component:AdminListProfessionalDetailsComponent
    },
    {
        path:"adsummary",component:AdmiSummaryComponent
    }
    ]},
    {path:"register",component:RegLoginPageComponent}
    
   
    
    

];
