/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DestinationService } from "../destination.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DestinationCreateInput } from "./DestinationCreateInput";
import { Destination } from "./Destination";
import { DestinationFindManyArgs } from "./DestinationFindManyArgs";
import { DestinationWhereUniqueInput } from "./DestinationWhereUniqueInput";
import { DestinationUpdateInput } from "./DestinationUpdateInput";
import { ItineraryFindManyArgs } from "../../itinerary/base/ItineraryFindManyArgs";
import { Itinerary } from "../../itinerary/base/Itinerary";
import { ItineraryWhereUniqueInput } from "../../itinerary/base/ItineraryWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DestinationControllerBase {
  constructor(
    protected readonly service: DestinationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Destination })
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDestination(
    @common.Body() data: DestinationCreateInput
  ): Promise<Destination> {
    return await this.service.createDestination({
      data: data,
      select: {
        airQuality: true,
        city: true,
        costOfLiving: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        safetyRating: true,
        scenicViews: true,
        updatedAt: true,
        wifiReliability: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Destination] })
  @ApiNestedQuery(DestinationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async destinations(@common.Req() request: Request): Promise<Destination[]> {
    const args = plainToClass(DestinationFindManyArgs, request.query);
    return this.service.destinations({
      ...args,
      select: {
        airQuality: true,
        city: true,
        costOfLiving: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        safetyRating: true,
        scenicViews: true,
        updatedAt: true,
        wifiReliability: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Destination })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async destination(
    @common.Param() params: DestinationWhereUniqueInput
  ): Promise<Destination | null> {
    const result = await this.service.destination({
      where: params,
      select: {
        airQuality: true,
        city: true,
        costOfLiving: true,
        country: true,
        createdAt: true,
        id: true,
        name: true,
        safetyRating: true,
        scenicViews: true,
        updatedAt: true,
        wifiReliability: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Destination })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDestination(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() data: DestinationUpdateInput
  ): Promise<Destination | null> {
    try {
      return await this.service.updateDestination({
        where: params,
        data: data,
        select: {
          airQuality: true,
          city: true,
          costOfLiving: true,
          country: true,
          createdAt: true,
          id: true,
          name: true,
          safetyRating: true,
          scenicViews: true,
          updatedAt: true,
          wifiReliability: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Destination })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDestination(
    @common.Param() params: DestinationWhereUniqueInput
  ): Promise<Destination | null> {
    try {
      return await this.service.deleteDestination({
        where: params,
        select: {
          airQuality: true,
          city: true,
          costOfLiving: true,
          country: true,
          createdAt: true,
          id: true,
          name: true,
          safetyRating: true,
          scenicViews: true,
          updatedAt: true,
          wifiReliability: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/itineraries")
  @ApiNestedQuery(ItineraryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Itinerary",
    action: "read",
    possession: "any",
  })
  async findItineraries(
    @common.Req() request: Request,
    @common.Param() params: DestinationWhereUniqueInput
  ): Promise<Itinerary[]> {
    const query = plainToClass(ItineraryFindManyArgs, request.query);
    const results = await this.service.findItineraries(params.id, {
      ...query,
      select: {
        accommodation: {
          select: {
            id: true,
          },
        },

        activities: true,
        createdAt: true,

        destination: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        startDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itineraries")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  async connectItineraries(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() body: ItineraryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itineraries: {
        connect: body,
      },
    };
    await this.service.updateDestination({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itineraries")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  async updateItineraries(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() body: ItineraryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itineraries: {
        set: body,
      },
    };
    await this.service.updateDestination({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itineraries")
  @nestAccessControl.UseRoles({
    resource: "Destination",
    action: "update",
    possession: "any",
  })
  async disconnectItineraries(
    @common.Param() params: DestinationWhereUniqueInput,
    @common.Body() body: ItineraryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itineraries: {
        disconnect: body,
      },
    };
    await this.service.updateDestination({
      where: params,
      data,
      select: { id: true },
    });
  }
}