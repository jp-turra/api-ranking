import { TableColumn } from 'typeorm';

export class BaseMigration {
  id: TableColumn;
  dataCriacao: TableColumn;
  ultimaMudanca: TableColumn;

  constructor() {
    this.id = new TableColumn({
      name: '_id',
      type: 'string',
      generationStrategy: 'uuid',
      isGenerated: true,
      isNullable: false,
      isPrimary: true,
      isUnique: true,
    });
    this.dataCriacao = new TableColumn({
      name: 'dataCriacao',
      type: 'timestamp',
      isNullable: false,
      isGenerated: true,
    });
    this.ultimaMudanca = new TableColumn({
      name: 'ultimaMudanca',
      type: 'timestamp',
      isNullable: false,
      isGenerated: true,
    });
    return this;
  }

  getTableColumns(): TableColumn[] {
    return [this.id, this.dataCriacao, this.ultimaMudanca];
  }
}
