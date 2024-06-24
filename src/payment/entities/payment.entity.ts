import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('payments')
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

 @Column()
 lastName: string;

    @Column({ nullable: true })
    currency: string;

    @Column()
    amount: string;


    @Column({ default: true })
    isActive: boolean;

}
