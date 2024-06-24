import { Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello/:test')
  postHello(@Body('name') name: string, @Req() req, @Res() res) {
    //res.send(this.appService.postTestWorld(name));
    res.send(req.body);
    return;


  }

  @Get('/get_test')
  getTest() {

    return this.appService.getTestWorld();
  }



}
