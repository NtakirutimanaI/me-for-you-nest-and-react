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
    // Clear existing to ensure the latest "true contents" are applied
    const existing = await this.testimonialsService.findAll();
    if (existing.length < 15) { // Force refresh for more content
      for (const t of existing) {
        await this.testimonialsService.remove(t.id);
      }
    }

    if ((await this.testimonialsService.findAll()).length === 0) {
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
}
