import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { Noticia } from './noticia.entity'
import { NoticiasService } from './noticias.service';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { profile } from 'console';
import { CreatenoticiaprofileDto } from './dto/create-noticiaprofile.dto';

@Controller('noticias')
export class NoticiasController {

    constructor(private noticiasService: NoticiasService){} 

    @Get()
    getNoticias(): Promise<Noticia[]> {
        return this.noticiasService.getNoticias();
    }

    @Get(':id')
    getNoticia(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        console.log(typeof id)
        return this.noticiasService.getNoticia(id);
    }

    @Post()
    createNoticia(@Body() newNoticia: CreateNoticiaDto) {
        return this.noticiasService.createNoticia(newNoticia); 

    }

    @Delete(':id')
    deleteNoticia(@Param('id', ParseIntPipe) id: number) {
        return this.noticiasService.deleteNoticia(id)
    }

    @Patch(':id')
    updateNoticia(@Param('id', ParseIntPipe) id: number, @Body() noticia: UpdateNoticiaDto) {
        return this.noticiasService.updateNoticia(id, noticia)

    }

    @Post(':id/noticiaprofile')
    createnoticiaprofile(
        @Param('id', ParseIntPipe) id:number,
        @Body() noticiaprofile: CreatenoticiaprofileDto
    ) {
        return this.noticiasService.createnoticiaprofile(id, noticiaprofile)
    }
}
