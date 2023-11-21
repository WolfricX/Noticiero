import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm'
import { noticiaprofile } from './noticiaprofile.entity'



@Entity({ name: 'noticias'})
 export class Noticia {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    titulo: string;

    @Column()
    resumen: string;

    @Column({nullable: true})
    imagen: string

    @Column()
    contenido: string;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({nullable: true})
    authStrategy: string

    @OneToOne(() => noticiaprofile )
    @JoinColumn()
    noticiaprofile: noticiaprofile

  


}