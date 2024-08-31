import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [
    { id: 1, name: 'Jhon Doe', phone: '123456' },
    { id: 1, name: 'Jhon Doe', phone: '123456' },
  ];

  getUsers() {
    return this.users;
  }
}
