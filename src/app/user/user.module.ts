import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserDetailComponent],
  exports: [UserListComponent]
})
export class UserModule { }
