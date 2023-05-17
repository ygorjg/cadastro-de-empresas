import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684339691853 implements MigrationInterface {
    name = 'Default1684339691853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companys" ("id" SERIAL NOT NULL, "name" text NOT NULL, "adress" text NOT NULL, "number" text NOT NULL, "district" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, CONSTRAINT "PK_a4f1caae0b4e0af6fe3315cec31" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companys"`);
    }

}
