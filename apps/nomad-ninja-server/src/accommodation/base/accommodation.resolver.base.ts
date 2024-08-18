/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Accommodation } from "./Accommodation";
import { AccommodationCountArgs } from "./AccommodationCountArgs";
import { AccommodationFindManyArgs } from "./AccommodationFindManyArgs";
import { AccommodationFindUniqueArgs } from "./AccommodationFindUniqueArgs";
import { CreateAccommodationArgs } from "./CreateAccommodationArgs";
import { UpdateAccommodationArgs } from "./UpdateAccommodationArgs";
import { DeleteAccommodationArgs } from "./DeleteAccommodationArgs";
import { ItineraryFindManyArgs } from "../../itinerary/base/ItineraryFindManyArgs";
import { Itinerary } from "../../itinerary/base/Itinerary";
import { AccommodationService } from "../accommodation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Accommodation)
export class AccommodationResolverBase {
  constructor(
    protected readonly service: AccommodationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Accommodation",
    action: "read",
    possession: "any",
  })
  async _accommodationsMeta(
    @graphql.Args() args: AccommodationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Accommodation])
  @nestAccessControl.UseRoles({
    resource: "Accommodation",
    action: "read",
    possession: "any",
  })
  async accommodations(
    @graphql.Args() args: AccommodationFindManyArgs
  ): Promise<Accommodation[]> {
    return this.service.accommodations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Accommodation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Accommodation",
    action: "read",
    possession: "own",
  })
  async accommodation(
    @graphql.Args() args: AccommodationFindUniqueArgs
  ): Promise<Accommodation | null> {
    const result = await this.service.accommodation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Accommodation)
  @nestAccessControl.UseRoles({
    resource: "Accommodation",
    action: "create",
    possession: "any",
  })
  async createAccommodation(
    @graphql.Args() args: CreateAccommodationArgs
  ): Promise<Accommodation> {
    return await this.service.createAccommodation({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Accommodation)
  @nestAccessControl.UseRoles({
    resource: "Accommodation",
    action: "update",
    possession: "any",
  })
  async updateAccommodation(
    @graphql.Args() args: UpdateAccommodationArgs
  ): Promise<Accommodation | null> {
    try {
      return await this.service.updateAccommodation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Accommodation)
  @nestAccessControl.UseRoles({
    resource: "Accommodation",
    action: "delete",
    possession: "any",
  })
  async deleteAccommodation(
    @graphql.Args() args: DeleteAccommodationArgs
  ): Promise<Accommodation | null> {
    try {
      return await this.service.deleteAccommodation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Itinerary], { name: "itineraries" })
  @nestAccessControl.UseRoles({
    resource: "Itinerary",
    action: "read",
    possession: "any",
  })
  async findItineraries(
    @graphql.Parent() parent: Accommodation,
    @graphql.Args() args: ItineraryFindManyArgs
  ): Promise<Itinerary[]> {
    const results = await this.service.findItineraries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
