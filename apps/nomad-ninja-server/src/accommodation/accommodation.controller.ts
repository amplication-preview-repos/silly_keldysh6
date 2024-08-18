import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccommodationService } from "./accommodation.service";
import { AccommodationControllerBase } from "./base/accommodation.controller.base";

@swagger.ApiTags("accommodations")
@common.Controller("accommodations")
export class AccommodationController extends AccommodationControllerBase {
  constructor(
    protected readonly service: AccommodationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
