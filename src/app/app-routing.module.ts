import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { PanelsComponent } from './components/panels/panels.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MediaComponent } from './components/media/media.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FileComponent } from './components/file/file.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { TreeComponent } from './components/tree/tree.component';
import { CrudComponent } from './components/crud/crud.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { FloatLabelComponent } from './components/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './components/invalidstate/invalidstate.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { IconsComponent } from './components/icons/icons.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';

import { ListThemeComponent } from './components/list-theme/list-theme.component';
import { AuthGuard } from './service/auth.guards';

import { TutorialComponent } from './components/tutorial/tutorial.component';
import { TypeComponent } from './components/type/type.component';
import { ForgotPSWComponent } from './components/forgot-psw/forgot-psw.component';
import { ChangePSWComponent } from './components/change-psw/change-psw.component';
@NgModule({
    imports: [
        RouterModule.forRoot([

           /* {path: '', redirectTo: 'pages/login',pathMatch: 'full' },
            {path:'pages/login', component: LoginComponent},*/

            {
                
                path: 'app', component: AppMainComponent,
             
                
                children: [

                  
                  {path: '', component: DashboardComponent},
                  {path: 'uikit/tutoaril', component: TutorialComponent  , canActivate: [AuthGuard]},
                  {path: 'uikit/type', component: TypeComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/listTheme', component: ListThemeComponent  , canActivate: [AuthGuard]},
                    {path: 'uikit/formlayout', component: FormLayoutComponent  , canActivate: [AuthGuard]},
                    {path: 'uikit/input', component: InputComponent  , canActivate: [AuthGuard]},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/invalidstate', component: InvalidStateComponent, canActivate: [AuthGuard]},
                    {path: 'uikit/button', component: ButtonComponent, canActivate: [AuthGuard]},
                    {path: 'uikit/table', component: TableComponent, canActivate: [AuthGuard]},
                    {path: 'uikit/list', component: ListComponent , canActivate: [AuthGuard] },
                    {path: 'uikit/tree', component: TreeComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/panel', component: PanelsComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/overlay', component: OverlaysComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/media', component: MediaComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/misc', component: MiscComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/charts', component: ChartsComponent , canActivate: [AuthGuard]},
                    {path: 'uikit/file', component: FileComponent },
                    {path: 'pages/crud', component: CrudComponent},
                    {path: 'pages/timeline', component: TimelineComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                    {path: 'icons', component: IconsComponent},
                    {path: 'blocks', component: BlocksComponent},
                    {path: 'documentation', component: DocumentationComponent}
                ],
            },
          //  { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
            {path:'pages/landing', component: LandingComponent   },
            {path:'pages/login', component:LoginComponent},
            {path:'pages/changePSW', component:ChangePSWComponent},
            {path:'pages/forget', component: ForgotPSWComponent},
            {path:'pages/error', component: ErrorComponent  , canActivate: [AuthGuard]},
            {path:'pages/notfound', component: NotfoundComponent  , canActivate: [AuthGuard]},
            {path:'pages/access', component: AccessComponent  , canActivate: [AuthGuard]},
         { path: '**', redirectTo: 'pages/login' }
            // {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule],
  
})
export class AppRoutingModule {
}
