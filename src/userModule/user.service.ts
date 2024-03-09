import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  createUser() {
    return 'user created successfully';
  }

  getUser(){
    return 'User fetch succesdfully'
  }
}
