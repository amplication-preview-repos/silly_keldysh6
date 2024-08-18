import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccommodationModuleBase } from "./base/accommodation.module.base";
import { AccommodationService } from "./accommodation.service";
import { AccommodationController } from "./accommodation.controller";
import { AccommodationResolver } from "./accommodation.resolver";

@Module({
  imports: [AccommodationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccommodationController],
  providers: [AccommodationService, AccommodationResolver],
  exports: [AccommodationService],
})
export class AccommodationModule {}
