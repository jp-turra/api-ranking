import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
import { BaseMigration } from '../interfaces/base.dto';

const table_name = 'jogadores';
let columns: TableColumn[] = [];
export class JogadoresMigration1642509892717 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connect();
    columns = await this.setupColumns();
    await queryRunner.addColumns(table_name, columns);
    await queryRunner.release();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connect();
    columns = await this.setupColumns();
    await queryRunner.dropColumns(table_name, columns);
    await queryRunner.release();
  }

  private async setupColumns(): Promise<TableColumn[]> {
    const baseMigration: BaseMigration = new BaseMigration();
    const columnsList = baseMigration.getTableColumns();

    const nome: TableColumn = new TableColumn({
      name: 'nome',
      type: 'text',
      isNullable: false,
    });
    const email: TableColumn = new TableColumn({
      name: 'email',
      type: 'text',
      isNullable: false,
      isUnique: true,
    });
    const telefone: TableColumn = new TableColumn({
      name: 'telefone',
      type: 'text',
      isNullable: false,
      isUnique: true,
    });
    const ranking: TableColumn = new TableColumn({
      name: 'ranking',
      type: 'text',
      isNullable: true,
    });
    const posicaoRanking: TableColumn = new TableColumn({
      name: 'posicaoRanking',
      type: 'number',
      isNullable: true,
    });
    columnsList.concat([nome, email, telefone, ranking, posicaoRanking]);
    return columnsList;
  }
}
