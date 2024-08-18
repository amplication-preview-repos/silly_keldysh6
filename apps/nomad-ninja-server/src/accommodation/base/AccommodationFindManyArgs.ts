/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccommodationWhereInput } from "./AccommodationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AccommodationOrderByInput } from "./AccommodationOrderByInput";

@ArgsType()
class AccommodationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AccommodationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AccommodationWhereInput, { nullable: true })
  @Type(() => AccommodationWhereInput)
  where?: AccommodationWhereInput;

  @ApiProperty({
    required: false,
    type: [AccommodationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AccommodationOrderByInput], { nullable: true })
  @Type(() => AccommodationOrderByInput)
  orderBy?: Array<AccommodationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AccommodationFindManyArgs as AccommodationFindManyArgs };