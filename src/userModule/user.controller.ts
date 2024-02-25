import { Body, Controller, Post } from "@nestjs/common";
import { userService } from "./user.service";

@Controller('/user')
export class userController{

constructor( private userService : userService){}

@Post('/create')
createUser() : string {
    return this.userService.createUser();
}


}