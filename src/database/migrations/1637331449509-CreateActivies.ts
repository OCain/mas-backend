import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivies1637331449509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "activies",
            columns: [
              {
                name: "id",
                type: "varchar",
                isPrimary: true,
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "activy_date",
                type: "timestamp",
              },
              {
                name: "course_unit_id",
                type: "varchar",
              },
              {
                name: "grade",
                type: "decimal",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
              {
                name: "updated_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activies");
      }

}
