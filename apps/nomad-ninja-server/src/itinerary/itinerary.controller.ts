import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItineraryService } from "./itinerary.service";
import { ItineraryControllerBase } from "./base/itinerary.controller.base";

@swagger.ApiTags("itineraries")
@common.Controller("itineraries")
export class ItineraryController extends ItineraryControllerBase {
  constructor(
    protected readonly service: ItineraryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
