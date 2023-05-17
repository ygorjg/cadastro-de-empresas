import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("companys")
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  adress: string;

  @Column({ type: "text" })
  number: string;

  @Column({ type: "text" })
  district: string;

  @Column({ type: "text" })
  city: string;

  @Column({ type: "text" })
  state: string;
}
