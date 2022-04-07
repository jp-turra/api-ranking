import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { isNotEmpty } from 'class-validator';

export class JogadoresValidacaoPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value: ', value, '\nMetadata', metadata);
    if (!isNotEmpty(value))
      throw new BadRequestException(
        `O Valor do parametro ${metadata.data} deve ser informado`,
      );
    return value;
  }
}
