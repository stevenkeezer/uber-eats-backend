import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  name: string;

  @Field((type) => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan: Boolean;

  @Field((type) => String)
  @Column()
  @IsString()
  address: String;

  @Field((type) => String)
  @Column()
  @IsString()
  ownersName: String;

  @Field((type) => String)
  @Column()
  @IsString()
  categoryName: String;
}
