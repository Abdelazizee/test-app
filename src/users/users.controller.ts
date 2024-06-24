import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('')
    getAll(): string {
        return 'test';
    }

    @Get(':id')
    getOne(@Param() id: string): string {
        return '';
    }


}
