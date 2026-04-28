import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository/repository-list/repository-list.component';
import { RepositoryDetailComponent } from './repository/repository-detail/repository-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'repositories', component: RepositoryListComponent },
  { path: 'repositories/:id', component: RepositoryDetailComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
