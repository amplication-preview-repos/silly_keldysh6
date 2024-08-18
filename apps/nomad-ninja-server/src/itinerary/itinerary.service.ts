import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItineraryServiceBase } from "./base/itinerary.service.base";

@Injectable()
export class ItineraryService extends ItineraryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
