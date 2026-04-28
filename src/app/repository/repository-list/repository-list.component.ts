import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css'],
})
export class RepositoryListComponent implements OnInit {

  repositories: Array<Repository> = [];

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.getRepositories();
  }

  getRepositories(): void {
    this.repositoryService.getRepositories().subscribe({
      next: (repos) => {
        this.repositories = repos;
      },
      error: (err) => {
        console.error('Error loading repositories:', err);
      }
    });
  }

}
