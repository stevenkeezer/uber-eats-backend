import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => Boolean)
  @Column()
  isVegan: Boolean;

  @Field((type) => String)
  @Column()
  address: String;

  @Field((type) => String)
  @Column()
  ownersName: String;

  @Field((type) => String)
  @Column()
  categoryName: String;
}
