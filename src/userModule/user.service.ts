import { Injectable } from "@nestjs/common";

@Injectable()
export class userService{
    createUser(){
        return 'user created successfully'
    }
}