import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CarouselItemsService } from './carousel_items/carousel_items.service';
import { FacilitiesService } from './facilities/facilities.service';
import { ServicesService } from './services/services.service';
import { TeamMembersService } from './team_members/team_members.service';
import { TestimonialsService } from './testimonials/testimonials.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly carouselService: CarouselItemsService,
    private readonly facilitiesService: FacilitiesService,
    private readonly servicesService: ServicesService,
    private readonly teamMembersService: TeamMembersService,
    private readonly testimonialsService: TestimonialsService,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async onApplicationBootstrap() {
    console.log('Seeding data...');
    await this.seedCarousel();
    await this.seedFacilities();
    await this.seedServices();
    await this.seedTeam();
    await this.seedTestimonials();
    console.log('Seeding complete.');
  }

  async seedCarousel() {
    if ((await this.carouselService.findAll()).length === 0) {
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
  }

  async seedFacilities() {
    if ((await this.facilitiesService.findAll()).length === 0) {
      await this.facilitiesService.create({ title: 'OUR DREAM', description: 'We aim to lead globally, delivering innovation, empowering clients, and impacting communities positively.', icon_class: 'fa fa-bus-alt', bg_class: 'bg-primary', text_class: 'text-primary' });
      await this.facilitiesService.create({ title: 'Why Choose "Me For You"?', description: 'Our Expertise & Experience, We offer personalized solutions, Our customer-centric approach', icon_class: 'fa fa-futbol', bg_class: 'bg-success', text_class: 'text-success' });
      await this.facilitiesService.create({ title: 'Our Values', description: 'Trustworthiness, Affordability, Professionalism.', icon_class: 'fa fa-home', bg_class: 'bg-warning', text_class: 'text-warning' });
      await this.facilitiesService.create({ title: 'OUR MISSION', description: 'Empowering individuals and businesses through personalized, expert advisory services tailored to each client\'s needs.', icon_class: 'fa fa-chalkboard-teacher', bg_class: 'bg-info', text_class: 'text-info' });
    }
  }

  async seedServices() {
    if ((await this.servicesService.findAll()).length === 0) {
      const services = [
        { title: 'Event Planning & Coordination', image_url: 'img/classes-1.jpg' },
        { title: 'Protocol & Service', image_url: 'img/classes-2.jpg' },
        { title: 'Food & Drink Supply (Catering)', image_url: 'img/classes-3.jpg' },
        { title: 'Professional Sound System & Music Band', image_url: 'img/classes-4.jpg' },
        { title: 'Language Service', image_url: 'img/classes-5.jpg' },
        { title: 'General Knowledge', image_url: 'img/classes-6.jpg' },
      ];
      for (const s of services) {
        await this.servicesService.create(s);
      }
    }
  }

  async seedTeam() {
    if ((await this.teamMembersService.findAll()).length === 0) {
      await this.teamMembersService.create({ name: 'Papy Patrick Ndazigaruye', role: 'Founder & CEO', image_url: 'img/team-1.jpg' });
      await this.teamMembersService.create({ name: 'Faustin Ndazigaruye', role: 'Business Partner', image_url: 'img/team-2.jpg' });
      await this.teamMembersService.create({ name: 'Jamie Proxy Ndazigaruye', role: 'Business Partner', image_url: 'img/team-3.jpg' });
    }
  }

  async seedTestimonials() {
    if ((await this.testimonialsService.findAll()).length === 0) {
      await this.testimonialsService.create({ name: 'Mutesi Emma', profession: 'Event Planner', content: 'The training sessions were not only insightful but also deeply practical; our team walked away empowered and better equipped.', image_url: 'img/testimonial-1.jpg' });
      await this.testimonialsService.create({ name: 'John Kabera', profession: 'Musician', content: 'Me For You Advisory transformed our event into an unforgettable experience — their attention to detail and professionalism were unmatched.', image_url: 'img/testimonial-2.jpg' });
      await this.testimonialsService.create({ name: 'James Musoni', profession: 'Trainer', content: 'Their personalized coaching and language services helped my child thrive academically and boosted their confidence in public speaking.', image_url: 'img/testimonial-3.jpg' });
    }
  }
}
