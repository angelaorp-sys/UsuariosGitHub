import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepositoryComponent } from './repository.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    RepositoryComponent,
    RepositoryListComponent,
    RepositoryDetailComponent
  ],
  exports: [
    RepositoryListComponent,
    RepositoryDetailComponent
  ]
})
export class RepositoryModule { }
