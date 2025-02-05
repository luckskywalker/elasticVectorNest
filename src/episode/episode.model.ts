import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Episode {
  @Field(() => String)
  id: string;

  @Field()
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  score: number;
}
