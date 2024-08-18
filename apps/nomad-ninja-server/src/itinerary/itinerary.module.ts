import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItineraryModuleBase } from "./base/itinerary.module.base";
import { ItineraryService } from "./itinerary.service";
import { ItineraryController } from "./itinerary.controller";
import { ItineraryResolver } from "./itinerary.resolver";

@Module({
  imports: [ItineraryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItineraryController],
  providers: [ItineraryService, ItineraryResolver],
  exports: [ItineraryService],
})
export class ItineraryModule {}
