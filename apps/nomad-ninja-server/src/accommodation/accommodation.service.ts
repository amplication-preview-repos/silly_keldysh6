import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccommodationServiceBase } from "./base/accommodation.service.base";

@Injectable()
export class AccommodationService extends AccommodationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
