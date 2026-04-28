import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css'],
  standalone: false
})
export class RepositoryDetailComponent implements OnInit {

  repositoryId!: number;
  repositoryDetail!: Repository;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.repositoryId = +id; 
        this.getRepositoryDetail();
      }
    });
  }

  getRepositoryDetail(): void {
    this.repositoryService.getRepositoryById(this.repositoryId).subscribe({
      next: (repository) => {
        this.repositoryDetail = repository;
      },
      error: (err) => {
        console.error('Error loading repository:', err);
      }
    });
  }

}
