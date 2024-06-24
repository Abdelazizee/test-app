import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTestWorld(): string {
    return 'test world';
  }

  postTestWorld(name: string): string {
    return name;
  }
}
