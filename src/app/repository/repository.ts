export class Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  createdAt: Date;
  ownerId: number;

  constructor(
    id: number,
    name: string,
    description: string,
    language: string,
    stars: number,
    createdAt: Date,
    ownerId: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.language = language;
    this.stars = stars;
    this.createdAt = createdAt;
    this.ownerId = ownerId;
  }
}
