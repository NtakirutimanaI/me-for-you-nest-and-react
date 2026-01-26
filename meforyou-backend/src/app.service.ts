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
    // Clear existing to ensure "true contents" as requested
    const existing = await this.testimonialsService.findAll();
    if (existing.length > 0 && !existing[0].name.includes('&')) {
      for (const t of existing) {
        await this.testimonialsService.remove(t.id);
      }
    }

    if ((await this.testimonialsService.findAll()).length === 0) {
      await this.testimonialsService.create({
        name: 'Alice & Janvier',
        profession: 'Wedding Couple',
        content: 'Celebrating our love across two unforgettable days was a dream come true. Me For You Advisory carried us through every moment with such care and excellence that we could simply enjoy the joy of becoming one.',
        image_url: 'img/testimonial-1.jpg'
      });
      await this.testimonialsService.create({
        name: 'Ziggy & Selya',
        profession: 'Wedding Couple',
        content: 'From the first meeting to the last dance, we felt supported by a team that cared as if it were their own wedding. They gave us laughter, peace of mind, and the freedom to focus on our love.',
        image_url: 'img/testimonial-2.jpg'
      });
      await this.testimonialsService.create({
        name: 'Muhire & Jeanne D’Arc',
        profession: 'Wedding Couple',
        content: 'This was our wedding of a lifetime. Every part of the celebration reflected love and professionalism. Me For You transformed our dreams into perfect memories we will cherish forever.',
        image_url: 'img/testimonial-3.jpg'
      });
      await this.testimonialsService.create({
        name: 'Nadra & Uwera Marie',
        profession: 'Client',
        content: 'Me For You Advisory proved truly reliable and trustworthy. They delivered a perfect day we will remember and cherish forever.',
        image_url: 'img/testimonial-1.jpg'
      });
      await this.testimonialsService.create({
        name: 'Mariza & Adolphe',
        profession: 'Wedding Couple',
        content: 'When we look back, we don’t just remember the beauty of the day—we remember how stress-free and joyful it felt. Me For You gave us more than a wedding; they gave us the perfect beginning.',
        image_url: 'img/testimonial-2.jpg'
      });
      await this.testimonialsService.create({
        name: 'Kigali Tech Hub',
        profession: 'Corporate Client',
        content: 'Providing housing and transport for our international consultants was seamless. Me For You Advisory handled every logistics detail with supreme professionalism.',
        image_url: 'img/testimonial-3.jpg'
      });
      await this.testimonialsService.create({
        name: 'Emmanuel Kwizera',
        profession: 'Real Estate Developer',
        content: 'Their advisory on property management and client relations transformed our business model. Highly recommended for strategic growth.',
        image_url: 'img/testimonial-1.jpg'
      });
      await this.testimonialsService.create({
        name: 'Sandrine Uwase',
        profession: 'Fashion Designer',
        content: 'The event management team brought my runway vision to life. The sound, lighting, and protocol services were world-class.',
        image_url: 'img/testimonial-2.jpg',
        type: 'text'
      });
      await this.testimonialsService.create({
        name: 'RwandAir Support Team',
        profession: 'Partner',
        content: 'A truly reliable partner in logistics and hospitality. Their dedication to excellence matches our own corporate values.',
        image_url: 'img/testimonial-3.jpg',
        type: 'text'
      });
      // Video Testimonials
      await this.testimonialsService.create({
        name: 'The Kigali Grand Wedding',
        profession: 'Wedding Highlights',
        content: 'A beautiful journey of two souls coming together in a spectacular celebration managed by Me For You Advisory.',
        image_url: 'img/DSC_7878.jpg',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        type: 'video'
      });
      await this.testimonialsService.create({
        name: 'Muhire & Jeanne',
        profession: 'Couple',
        content: 'Our special day was made perfect by the team. Watch our reaction to the final decor!',
        image_url: 'img/Pic8.jpg',
        video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        type: 'video'
      });
    }
  }
}
