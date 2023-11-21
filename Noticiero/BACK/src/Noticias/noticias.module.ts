import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias.controllers';
import { NoticiasService } from './noticias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Noticia} from './noticia.entity'
import { noticiaprofile } from './noticiaprofile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Noticia, noticiaprofile])],
  controllers: [NoticiasController],
  providers: [NoticiasService],
  exports: [NoticiasService],
})
export class NoticiasModule {}
