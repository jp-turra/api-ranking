import { IsEmail, IsNotEmpty } from 'class-validator';
class JogadorDto {
  @IsNotEmpty()
  readonly telefone: string;
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly nome: string;
}

export default JogadorDto;
