import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Core Entities
import { User } from './entities/core/user.entity';
import { UserAddress } from './entities/core/user-address.entity';
import { UserDocument } from './entities/core/user-document.entity';
import { RolePermission } from './entities/core/role-permission.entity';
import { UserRole } from './entities/core/user-role.entity';

// Event Entities
import { EventCategory } from './entities/events/event-category.entity';
import { Event } from './entities/events/event.entity';
import { EventVendor } from './entities/events/event-vendor.entity';
import { EventVendorAssignment } from './entities/events/event-vendor-assignment.entity';

// Car Entities
import { CarCategory } from './entities/cars/car-category.entity';
import { Car } from './entities/cars/car.entity';
import { CarLocation } from './entities/cars/car-location.entity';
import { CarRental } from './entities/cars/car-rental.entity';
import { CarMaintenance } from './entities/cars/car-maintenance.entity';

// Property Entities
import { PropertyType } from './entities/properties/property-type.entity';
import { Property } from './entities/properties/property.entity';
import { Lease } from './entities/properties/lease.entity';
import { PropertyMaintenance } from './entities/properties/property-maintenance.entity';

// Shared Entities
import { Invoice } from './entities/shared/invoice.entity';
import { Payment } from './entities/shared/payment.entity';
import { AuditLog } from './entities/shared/audit-log.entity';

// Feature Modules
import { CarouselItemsModule } from './carousel_items/carousel_items.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { ServicesModule } from './services/services.module';
import { TeamMembersModule } from './team_members/team_members.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { EventsModule } from './events/events.module';
import { PropertiesModule } from './properties/properties.module';
import { CarsModule } from './cars/cars.module';
import { PartnersModule } from './partners/partners.module';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [
          // Core
          User, UserAddress, UserDocument, RolePermission, UserRole,
          // Events
          EventCategory, Event, EventVendor, EventVendorAssignment,
          // Cars
          CarCategory, Car, CarLocation, CarRental, CarMaintenance,
          // Properties
          PropertyType, Property, Lease, PropertyMaintenance,
          // Shared
          Invoice, Payment, AuditLog,
        ],
        autoLoadEntities: true,
        synchronize: configService.get('DB_SYNCHRONIZE') === 'true',
        logging: configService.get('DB_LOGGING') === 'true',
      }),
      inject: [ConfigService],
    }),
    // Feature Modules
    CarouselItemsModule,
    FacilitiesModule,
    ServicesModule,
    TeamMembersModule,
    TestimonialsModule,
    EventsModule,
    PropertiesModule,
    CarsModule,
    PartnersModule,
    TypeOrmModule.forFeature([User, CarCategory, PropertyType, CarLocation]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
