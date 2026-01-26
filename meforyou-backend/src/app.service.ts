import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CarouselItemsService } from './carousel_items/carousel_items.service';
import { FacilitiesService } from './facilities/facilities.service';
import { ServicesService } from './services/services.service';
import { TeamMembersService } from './team_members/team_members.service';
import { TestimonialsService } from './testimonials/testimonials.service';
import { PartnersService } from './partners/partners.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserType } from './entities/core/user.entity';
import { Repository } from 'typeorm';
import { Transmission, FuelType } from './entities/cars/car.entity';
import { CarCategory } from './entities/cars/car-category.entity';
import { PropertyType } from './entities/properties/property-type.entity';
import { CarsService } from './cars/cars.service';
import { PropertiesService } from './properties/properties.service';
import { CarLocation } from './entities/cars/car-location.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly carouselService: CarouselItemsService,
    private readonly facilitiesService: FacilitiesService,
    private readonly servicesService: ServicesService,
    private readonly teamMembersService: TeamMembersService,
    private readonly testimonialsService: TestimonialsService,
    private readonly partnersService: PartnersService,
    private readonly carsService: CarsService,
    private readonly propertiesService: PropertiesService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(CarCategory)
    private readonly carCategoryRepository: Repository<CarCategory>,
    @InjectRepository(PropertyType)
    private readonly propertyTypeRepository: Repository<PropertyType>,
    @InjectRepository(CarLocation)
    private readonly carLocationRepository: Repository<CarLocation>,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async onApplicationBootstrap() {
    console.log('Seeding data...');
    await this.seedUsers();
    await this.seedCarousel();
    await this.seedFacilities();
    await this.seedServices();
    await this.seedTeam();
    await this.seedTestimonials();
    await this.seedPartners();
    await this.seedCars();
    await this.seedLocations();
    await this.seedProperties();
    console.log('Seeding complete.');
  }

  async seedCarousel() {
    const existing = await this.carouselService.findAll();
    for (const item of existing) {
      await this.carouselService.remove(item.id);
    }

    await this.carouselService.create({
      title: 'Welcome to Me For You Advisory',
      description: 'Me For You Advisory is dedicated to providing top-notch services that cater to the diverse needs of our clients.',
      image_url: 'img/carousel-1.jpg',
      primary_button_text: 'Learn More',
      primary_button_link: '',
      secondary_button_text: 'Our Strength',
      secondary_button_link: ''
    });
    await this.carouselService.create({
      title: 'Make A Brighter Day With Us Today',
      description: 'Our offerings span Event Management, Learning Coaching and Mentoring, and comprehensive Language Services. We are committed to delivering excellence and helping you achieve your personal and professional goals.',
      image_url: 'img/carousel-2.jpg',
      primary_button_text: 'Learn More',
      primary_button_link: '',
      secondary_button_text: 'Our Facts',
      secondary_button_link: ''
    });
  }

  async seedFacilities() {
    const existing = await this.facilitiesService.findAll();
    for (const item of existing) {
      await this.facilitiesService.remove(item.id);
    }

    await this.facilitiesService.create({ title: 'OUR DREAM', description: 'We aim to lead globally, delivering innovation, empowering clients, and impacting communities positively.', icon_class: 'fa fa-bus-alt', bg_class: 'bg-primary', text_class: 'text-primary' });
    await this.facilitiesService.create({ title: 'Why Choose "Me For You"?', description: 'Our Expertise & Experience, We offer personalized solutions, Our customer-centric approach', icon_class: 'fa fa-futbol', bg_class: 'bg-success', text_class: 'text-success' });
    await this.facilitiesService.create({ title: 'Our Values', description: 'Trustworthiness, Affordability, Professionalism.', icon_class: 'fa fa-home', bg_class: 'bg-warning', text_class: 'text-warning' });
    await this.facilitiesService.create({ title: 'OUR MISSION', description: 'Empowering individuals and businesses through personalized, expert advisory services tailored to each client\'s needs.', icon_class: 'fa fa-chalkboard-teacher', bg_class: 'bg-info', text_class: 'text-info' });
  }

  async seedServices() {
    const existing = await this.servicesService.findAll();
    for (const s of existing) {
      await this.servicesService.remove(s.id);
    }

    const services = [
      {
        title: 'Event Planning & Coordination',
        description: 'Full-cycle planning for weddings, corporate retreats, and private parties.',
        image_url: 'img/classes-1.jpg',
        category: 'Events',
        price: 500
      },
      {
        title: 'Protocol & Service',
        description: 'Professional hosting and protocol services for high-profile gatherings.',
        image_url: 'img/classes-2.jpg',
        category: 'Hospitality',
        price: 150
      },
      {
        title: 'Food & Drink Supply (Catering)',
        description: 'Authentic Rwandan and international cuisines tailored to your guest list.',
        image_url: 'img/classes-3.jpg',
        category: 'Catering',
        price: 25
      },
      {
        title: 'Professional Sound & Music',
        description: 'State-of-the-art sound systems and live bands for any event size.',
        image_url: 'img/classes-4.jpg',
        category: 'Entertainment',
        price: 300
      },
      {
        title: 'Language Service',
        description: 'Translation, interpretation, and language training in EN, FR, KN, and SW.',
        image_url: 'img/classes-5.jpg',
        category: 'Consulting',
        price: 100
      },
      {
        title: 'General Advisory',
        description: 'Strategic coaching and mentoring for personal and business growth.',
        image_url: 'img/classes-6.jpg',
        category: 'Consulting',
        price: 80
      },
    ];
    for (const s of services) {
      await this.servicesService.create(s);
    }
  }

  async seedTeam() {
    const existing = await this.teamMembersService.findAll();
    for (const member of existing) {
      await this.teamMembersService.remove(member.id);
    }

    const team = [
      { name: 'Stephano Niyonsenga', role: 'Programs Manager', image_url: 'https://me-for-you.org/img/stephen.jpg' },
      { name: 'Marie Jeanne Ndazigaruye', role: 'Customer Engagement Manager', image_url: 'https://me-for-you.org/img/Jeanne.jpg' },
      { name: 'Yvette Kumi', role: 'Operations & Finance Manager', image_url: 'https://me-for-you.org/img/Yvette.jpg' },
      { name: 'Claudine Igiraneza', role: 'CEO Office Assistant', image_url: 'https://me-for-you.org/img/igiraneza.jpg' },
      { name: 'Keren Gisubizo', role: 'Regional Coordinator', image_url: 'https://me-for-you.org/img/keren.jpg' },
      { name: 'Bosco Nshizirungu', role: 'Regional Coordinator', image_url: 'https://me-for-you.org/img/Bosco.jpg' },
      { name: 'Louise Uwase', role: 'Coordinator', image_url: 'https://me-for-you.org/img/louise.png' },
      { name: 'Joseph Nsengiyumva', role: 'Team Leader', image_url: 'https://me-for-you.org/img/Joseph.jpg' },
      { name: 'Aline Uwera', role: 'Team Leader', image_url: 'https://me-for-you.org/img/aline.jpeg' },
      { name: 'Fred Izabayo Shumbusho', role: 'Customer Engagement Assistant', image_url: 'https://me-for-you.org/img/shumbusho.png' },
    ];

    for (const member of team) {
      await this.teamMembersService.create(member);
    }
  }

  async seedTestimonials() {
    const existing = await this.testimonialsService.findAll();
    if (existing.length === 0) { // Only seed if empty to allow permanent data persistence
      // WEDDING CATEGORY
      await this.testimonialsService.create({ name: 'Alice & Janvier', profession: 'Wedding Couple', content: 'Celebrating our love across two unforgettable days was a dream come true. Me For You Advisory carried us through every moment with care.', image_url: 'img/testimonial-1.jpg', type: 'text' });
      await this.testimonialsService.create({ name: 'Ziggy & Selya', profession: 'Wedding Couple', content: 'From the first meeting to the last dance, we felt supported by a team that cared as if it were their own wedding.', image_url: 'img/testimonial-2.jpg', type: 'text' });
      await this.testimonialsService.create({ name: 'Muhire & Jeanne', profession: 'Wedding Couple', content: 'Me For You transformed our dreams into perfect memories we will cherish forever.', image_url: 'img/testimonial-3.jpg', type: 'text' });

      // CORPORATE CATEGORY
      await this.testimonialsService.create({ name: 'Kigali Tech Hub', profession: 'Corporate Partner', content: 'Providing housing and transport for our international consultants was seamless. Logistics were handled with supreme professionalism.', image_url: 'img/testimonial-1.jpg', type: 'text' });
      await this.testimonialsService.create({ name: 'RwandAir Support', profession: 'Corporate Client', content: 'A truly reliable partner in logistics and hospitality. Their dedication matches our own corporate values.', image_url: 'img/testimonial-2.jpg', type: 'text' });
      await this.testimonialsService.create({ name: 'I&M Bank HR', profession: 'Business Partner', content: 'The event management team handled our staff retreat with amazing attention to detail. Every protocol was perfect.', image_url: 'img/testimonial-3.jpg', type: 'text' });

      // SERVICES CATEGORY
      await this.testimonialsService.create({ name: 'Dr. Jean Bosco', profession: 'Language Service User', content: 'The translation and interpretation services provided for our medical conference were top-tier. Extremely professional linguists.', image_url: 'img/testimonial-1.jpg', type: 'text' });
      await this.testimonialsService.create({ name: 'Umutoni Grace', profession: 'Protocol Service User', content: 'Their protocol team for our gala dinner was exceptional. The students and staff were well-trained and very polite.', image_url: 'img/testimonial-2.jpg', type: 'text' });
      await this.testimonialsService.create({ name: 'DJ Focus Rwanda', profession: 'Sound System Service', content: 'Working with the sound team from Me For You is always a pleasure. The equipment is modern and the setup is fast.', image_url: 'img/testimonial-3.jpg', type: 'text' });
      await this.testimonialsService.create({ name: 'Kalisa Eric', profession: 'Housing Service User', content: 'Found a perfect short-term rental in Kigali through them. The house was clean, secure, and exactly as described.', image_url: 'img/testimonial-1.jpg', type: 'text' });

      // VIDEO TESTIMONIALS
      await this.testimonialsService.create({
        name: 'The Grand Wedding',
        profession: 'Wedding Highlight',
        content: 'Experience the magic of a 500-guest wedding coordinated perfectly by our team.',
        image_url: 'img/DSC_7878.jpg',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        type: 'video'
      });
      await this.testimonialsService.create({
        name: 'Corporate Logistics',
        profession: 'Corporate Service',
        content: 'A deep dive into how we manage airport transfers and hotel stays for VIP guests.',
        image_url: 'img/classes-1.jpg',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        type: 'video'
      });
      await this.testimonialsService.create({
        name: 'Language & Translation',
        profession: 'Professional Service',
        content: 'Our team providing real-time interpretation for an international conference.',
        image_url: 'img/classes-5.jpg',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        type: 'video'
      });
    }
  }

  async seedPartners() {
    const existing = await this.partnersService.findAll();
    for (const p of existing) {
      await this.partnersService.remove(p.id);
    }

    const partners = [
      {
        name: 'Papy Patrick Ndazigaruye',
        role: 'Founder & CEO',
        description: 'Visionary leader managing Me For You Advisory operations and strategic growth.',
        logo_url: 'img/founder.jpg'
      },
      {
        name: 'Faustin Ndazigaruye',
        role: 'Business Partner',
        description: 'Key strategic partner contributing to the development of our cultural and housing projects.',
        logo_url: 'img/partner11.png'
      },
      {
        name: 'Jamie Proxy Ndazigaruye',
        role: 'Business Partner',
        description: 'Operations and logistics partner specializing in transport and service excellence.',
        logo_url: 'img/partner12.png'
      },
      {
        name: 'Emmanuel Ngamije Ndazigaruye',
        role: 'Business Partner',
        description: 'Liaison partner for language services and international relations within the advisory.',
        logo_url: 'img/teamLast.png'
      }
    ];

    for (const p of partners) {
      await this.partnersService.create(p);
    }
  }

  async seedUsers() {
    if ((await this.userRepository.count()) === 0) {
      const salt = await bcrypt.genSalt();
      const password_hash = await bcrypt.hash('password123', salt);

      await this.userRepository.save([
        {
          username: 'admin',
          email: 'admin@meforyou.org',
          password_hash,
          first_name: 'Admin',
          last_name: 'User',
          user_type: UserType.ADMIN
        },
        {
          username: 'client',
          email: 'client@meforyou.org',
          password_hash,
          first_name: 'Client',
          last_name: 'User',
          user_type: UserType.CLIENT
        }
      ]);
    }
  }

  async seedCars() {
    // Clear existing cars to ensure new images are applied
    const existing = await this.carsService.findAll();
    for (const c of existing) {
      await this.carsService.remove(c.car_id);
    }

    // Seed Categories first
    let luxury = await this.carCategoryRepository.findOneBy({ category_name: 'luxury' });
    if (!luxury) { luxury = await this.carCategoryRepository.save({ category_name: 'luxury', daily_rate_min: 150, daily_rate_max: 500 }); }

    let suv = await this.carCategoryRepository.findOneBy({ category_name: 'suv' });
    if (!suv) { suv = await this.carCategoryRepository.save({ category_name: 'suv', daily_rate_min: 80, daily_rate_max: 200 }); }

    let economy = await this.carCategoryRepository.findOneBy({ category_name: 'economy' });
    if (!economy) { economy = await this.carCategoryRepository.save({ category_name: 'economy', daily_rate_min: 30, daily_rate_max: 80 }); }

    let van = await this.carCategoryRepository.findOneBy({ category_name: 'van' });
    if (!van) { van = await this.carCategoryRepository.save({ category_name: 'van', daily_rate_min: 70, daily_rate_max: 150 }); }

    await this.carsService.create({
      make: 'Range Rover',
      model: 'Vogue',
      year: 2023,
      daily_rate: 250,
      car_status: 'available' as any,
      category: luxury!,
      photos_urls: ['img/car-vogue.png'],
      features: { 'A/C': true, 'Bluetooth': true, 'Chauffeur': true },
      seats: 5,
      transmission: Transmission.AUTOMATIC,
      fuel_type: FuelType.DIESEL,
      license_plate: 'RAB 123 A'
    });

    await this.carsService.create({
      make: 'Toyota',
      model: 'Prado',
      year: 2022,
      daily_rate: 150,
      car_status: 'available' as any,
      category: suv!,
      photos_urls: ['img/car-prado.png'],
      features: { '4x4': true, 'A/C': true },
      seats: 7,
      transmission: Transmission.AUTOMATIC,
      fuel_type: FuelType.DIESEL,
      license_plate: 'RAC 456 B'
    });

    await this.carsService.create({
      make: 'Toyota',
      model: 'Corolla',
      year: 2021,
      daily_rate: 50,
      car_status: 'available' as any,
      category: economy!,
      photos_urls: ['img/car-corolla.png'],
      features: { 'A/C': true, 'Bluetooth': true },
      seats: 5,
      transmission: Transmission.AUTOMATIC,
      fuel_type: FuelType.GASOLINE,
      license_plate: 'RAD 789 C'
    });

    await this.carsService.create({
      make: 'Toyota',
      model: 'Hiace',
      year: 2020,
      daily_rate: 120,
      car_status: 'available' as any,
      category: van!,
      photos_urls: ['img/car-hiace.png'],
      features: { 'A/C': true, '14 Seats': true },
      seats: 14,
      transmission: Transmission.MANUAL,
      fuel_type: FuelType.DIESEL,
      license_plate: 'RAE 012 D'
    });

    await this.carsService.create({
      make: 'Mercedes-Benz',
      model: 'S-Class',
      year: 2023,
      daily_rate: 300,
      car_status: 'available' as any,
      category: luxury!,
      photos_urls: ['img/car-mercedes.png'],
      features: { 'A/C': true, 'Leather': true, 'Chauffeur': true },
      seats: 5,
      transmission: Transmission.AUTOMATIC,
      fuel_type: FuelType.HYBRID,
      license_plate: 'RAF 345 E'
    });
  }

  async seedProperties() {
    // Seed Types first
    let apartment = await this.propertyTypeRepository.findOneBy({ type_name: 'Apartment' });
    if (!apartment) { apartment = await this.propertyTypeRepository.save({ type_name: 'Apartment' }); }

    let villa = await this.propertyTypeRepository.findOneBy({ type_name: 'Villa' });
    if (!villa) { villa = await this.propertyTypeRepository.save({ type_name: 'Villa' }); }

    const admin = await this.userRepository.findOneBy({ username: 'admin' });

    // Check if properties exist and update them, or create new ones
    const existingProperties = await this.propertiesService.findAll();

    if (existingProperties.length === 0) {
      await this.propertiesService.create({
        property_name: 'Kigali Heights Apartment',
        property_type: apartment!,
        owner: admin!,
        street_address: 'KN 2 St',
        city: 'Kigali',
        country: 'Rwanda',
        bedrooms: 2,
        bathrooms: 2,
        monthly_rent: 1200,
        property_status: 'available' as any,
        photos_urls: ['img/Pic9.jpg']
      });

      await this.propertiesService.create({
        property_name: 'Gisozi Royal Villa',
        property_type: villa!,
        owner: admin!,
        street_address: 'KG 667 St',
        city: 'Kigali',
        country: 'Rwanda',
        bedrooms: 4,
        bathrooms: 3,
        monthly_rent: 2500,
        property_status: 'available' as any,
        photos_urls: ['img/about-1.jpg']
      });
    } else {
      // Update existing properties with correct image paths
      for (const prop of existingProperties) {
        if (prop.property_name === 'Kigali Heights Apartment') {
          await this.propertiesService.update(prop.property_id, { photos_urls: ['img/Pic9.jpg'] });
        } else if (prop.property_name === 'Gisozi Royal Villa') {
          await this.propertiesService.update(prop.property_id, { photos_urls: ['img/about-1.jpg'] });
        }
      }
    }
  }

  async seedLocations() {
    if ((await this.carLocationRepository.count()) === 0) {
      await this.carLocationRepository.save({
        location_name: 'Kigali International Airport',
        address: 'H6VQ+93C, Kigali',
        city: 'Kigali',
        is_active: true
      });
      await this.carLocationRepository.save({
        location_name: 'Me For You Advisory Hub',
        address: 'KN 3 Rd, Kigali',
        city: 'Kigali',
        is_active: true
      });
    }
  }
}
