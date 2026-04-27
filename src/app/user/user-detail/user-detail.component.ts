import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../user';
import { Repository } from '../../repository/repository';
import { RepositoryService } from '../../repository/repository.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  standalone: false
})
export class UserDetailComponent implements OnInit, OnChanges {

  @Input() userDetail!: User;
  repositories: Array<Repository> = [];

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.getUserRepositories();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userDetail'] && !changes['userDetail'].firstChange) {
      this.getUserRepositories();
    }
  }

  getUserRepositories(): void {
    if (this.userDetail && this.userDetail.id) {
      this.repositoryService.getRepositoriesByOwner(this.userDetail.id).subscribe((repos) => {
        this.repositories = repos;
      });
    }
  }

}
