import { Repository } from '../repository/repository';

export class User {
  id: number;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
  location: string;
  repositories?: Repository[];  

  constructor(
    id: number,
    username: string,
    name: string,
    email: string,
    avatarUrl: string,
    role: string,
    location: string,
    repositories?: Repository[]
  ) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.avatarUrl = avatarUrl;
    this.role = role;
    this.location = location;
    this.repositories = repositories;
  }
}
