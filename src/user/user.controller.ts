import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser as CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Get()
  async getAllUser() {
    return JSON.stringify({ test: '12312' });
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<any> {
    return {
      ...user,
      password: undefined,
    };
  }
}
