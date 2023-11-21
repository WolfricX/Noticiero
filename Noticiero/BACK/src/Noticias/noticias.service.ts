import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Noticia } from './noticia.entity';
import { Repository } from 'typeorm';
import { CreateNoticiaDto} from './dto/create-noticia.dto'
import { UpdateNoticiaDto} from './dto/update-noticia.dto'
import { CreatenoticiaprofileDto } from './dto/create-noticiaprofile.dto';
import { noticiaprofile } from './noticiaprofile.entity';


@Injectable()
export class NoticiasService {

    constructor(
        @InjectRepository(Noticia) private noticiaRepository: Repository<Noticia>,
        @InjectRepository(noticiaprofile) private noticiaprofileRepository: Repository<noticiaprofile>
        ) {}

    async createNoticia (noticia: CreateNoticiaDto) { 

        const noticiaFound =  await this.noticiaRepository.findOne({
            where: {
                titulo: noticia.titulo
            } 
        })

        if (noticiaFound) {
            return new HttpException('Noticia already exists', HttpStatus.CONFLICT)
        }

        const newNoticia = this.noticiaRepository.create(noticia);
        return this.noticiaRepository.save(newNoticia);
    }

    getNoticias() {
        return this.noticiaRepository.find() 
    }

     async getNoticia(id: number) {
        const noticiaFound = await this.noticiaRepository.findOne({
            where: {
                id,
            },
        });

        if (!noticiaFound) {
            return new HttpException('Noticia not found', HttpStatus.NOT_FOUND)

        }

        return noticiaFound;

    }

     async deleteNoticia(id: number) {
        const noticiaFound = await this.noticiaRepository.findOne({ 
            where: {
                id
            }
         });

        if (!noticiaFound) {
            return new HttpException('Noticia not found', HttpStatus.NOT_FOUND)
        }

        return this.noticiaRepository.delete({ id });
    }

     async updateNoticia(id: number, noticia:UpdateNoticiaDto ) {
        const noticiaFound = await this.noticiaRepository.findOne({
            where: {
                id
            }
        })

        if (!noticiaFound) {
            return new HttpException('Noticia not found', HttpStatus.NOT_FOUND)
        }

        const updateNoticia = Object.assign(noticiaFound, noticia);
        return this.noticiaRepository.save(updateNoticia); 

    }

     async createnoticiaprofile(id: number, noticiaprofile: CreatenoticiaprofileDto) {
        const noticiaFound = await this.noticiaRepository.findOne({
            where: {
            id
        },
    });

    if(!noticiaFound) {
        return new HttpException('Noticia not found', HttpStatus.NOT_FOUND);
    }
        const newnoticiaprofile  = this.noticiaprofileRepository.create(noticiaprofile)
        const savednoticiaprofile = await this.noticiaprofileRepository.save(newnoticiaprofile)
        noticiaFound.noticiaprofile = savednoticiaprofile

        return this.noticiaRepository.save(noticiaFound)
    }
}
