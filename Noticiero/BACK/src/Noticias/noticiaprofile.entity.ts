import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('noticia_profile')
export class noticiaprofile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string 

    @Column()
    lastname: string 
    
    @Column({nullable: true})
    age: number 

}

