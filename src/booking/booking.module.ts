import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';


@Module({
    imports: [BookingModule],
    controllers: [BookingController],
    providers: [BookingService],
})
export class BookingModule { }
