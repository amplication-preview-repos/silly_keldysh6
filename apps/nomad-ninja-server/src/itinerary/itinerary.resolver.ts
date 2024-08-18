import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItineraryResolverBase } from "./base/itinerary.resolver.base";
import { Itinerary } from "./base/Itinerary";
import { ItineraryService } from "./itinerary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Itinerary)
export class ItineraryResolver extends ItineraryResolverBase {
  constructor(
    protected readonly service: ItineraryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
