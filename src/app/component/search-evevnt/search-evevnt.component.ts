import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Event {
  title: string;
  date: string;
  location: string;
  price: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-search-event',
  templateUrl: './search-evevnt.component.html',
  styleUrls: ['./search-evevnt.component.scss']
})
export class SearchEvevntComponent implements OnInit {
  filtersGroup: FormGroup;
  events: Event[] = [];
  filteredEvents: Event[] = [];
  categories = ['business', 'food', 'health', 'camping'];
  dateOptions = ['today', 'tomorrow', 'weekend', 'pick'];
  priceOptions = ['free', 'paid'];
  selectedCategory: string = '';
  selectedDate: string = '';
  selectedPrice: string = '';

  constructor(private fb: FormBuilder) {
    this.filtersGroup = this.fb.group({});
  }

  ngOnInit(): void {
    this.loadEvents();
    this.filteredEvents = this.events;
  }

  loadEvents() {
    this.events = [
      { title: 'Event 1', date: 'today', location: 'Cairo', price: 'Free', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DNasCvfOLMIxJyQtbNq7EfLkWnMazHE9xw&s', category: 'business' },
      { title: 'Event 2', date: 'today', location: 'Cairo', price: 'paid', imageUrl: 'https://cdn.prod.website-files.com/61f29c609f84a86e418fbcfb/63ecdf6e6df724eab1f0e8ca_20230215T0132-25bece5c-5ab8-4c33-98c7-60ad2668054b.webp', category: 'business' },
      { title: 'Event 3', date: 'tomorrow', location: 'Cairo', price: 'Free', imageUrl: '../../../assets/card1.jpg', category: 'business' },
      { title: 'Event 4', date: 'tomorrow', location: 'Cairo', price: 'paid', imageUrl: '../../../assets/events.jpg', category: 'business' },
      { title: 'Event 5', date: 'weekend', location: 'Cairo', price: 'Free', imageUrl: '../../../assets/events1.jpg', category: 'business' },
      { title: 'Event 6', date: 'weekend', location: 'Cairo', price: 'paid', imageUrl: '../../../assets/events2.jpg', category: 'business' },
      { title: 'Event 7', date: 'pick', location: 'Cairo', price: 'Free', imageUrl: '../../../assets/events3.jpg', category: 'business' },
      { title: 'Event 8', date: 'pick', location: 'Cairo', price: 'paid', imageUrl: '../../../assets/events4.jpg', category: 'business' },

      { title: 'Event 1', date: 'today', location: 'Cairo', price: 'Free', imageUrl: '../../../assets/https___cdn.evbuc.com_images_752316119_290108908841_1_original.jfif', category: 'food' },
      { title: 'Event 2', date: 'today', location: 'Alex', price: 'Paid', imageUrl: '../../../assets/https___cdn.evbuc.com_images_846815099_85600736879_1_original.jfif', category: 'food' },
      { title: 'Event 3', date: 'tomorrow', location: 'Alex', price: 'Free', imageUrl: '../../../assets/https___cdn.evbuc.com_images_858538979_563478348933_1_original.jfif', category: 'food' },
      { title: 'Event 4', date: 'tomorrow', location: 'Alex', price: 'Paid', imageUrl: '../../../assets/jason-goodman-Oalh2MojUuk-unsplash-1-1.jpg', category: 'food' },
      { title: 'Event 5', date: 'weekend', location: 'Alex', price: 'Free', imageUrl: '../../../assets/slide2.jpg', category: 'food' },
      { title: 'Event 6', date: 'weekend', location: 'Alex', price: 'Paid', imageUrl: '../../../assets/slide3.jpg', category: 'food' },
      { title: 'Event 7', date: 'pick', location: 'Alex', price: 'Free', imageUrl: '../../../assets/slide1.jpg', category: 'food' },
      { title: 'Event 8', date: 'pick', location: 'Alex', price: 'Paid', imageUrl: '../../../assets/jason-goodman-Oalh2MojUuk-unsplash-1-1.jpg', category: 'food' },

      { title: 'Event 1', date: 'today', location: 'Giza', price: 'Free', imageUrl: 'https://civilisable.com/wp-content/uploads/2024/05/Abu-Simbel-at-Night-25.5.2024.jpg', category: 'health' },
      { title: 'Event 2', date: 'today', location: 'Giza', price: 'Paid', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a5c896ab7411c8b282cbcce/1547582176280-6UZ1ATII0K11CEH5B3VI/PMI+Marlboro+Launch+byganz+2015', category: 'health' },
      { title: 'Event 3', date: 'tomorrow', location: 'Giza', price: 'Free', imageUrl: 'https://nmec.gov.eg/wp-content/uploads/2021/07/f438e926-1ac3-40a9-b430-c93cfca81fe4-768x575.jpg', category: 'health' },
      { title: 'Event 4', date: 'tomorrow', location: 'Giza', price: 'Paid', imageUrl: 'https://iiotday.com/wp-content/uploads/IIoTDay-Events-in-2024.png', category: 'health' },
      { title: 'Event 5', date: 'weekend', location: 'Giza', price: 'Free', imageUrl: 'https://neuroject.com/wp-content/uploads/2023/07/Top_21_Biggest_Tech_Events_in_the_World_for_2023_Neuroject_01.jpg', category: 'health' },
      { title: 'Event 6', date: 'weekend', location: 'Giza', price: 'Paid', imageUrl: 'https://i.ytimg.com/vi/49mfPFTZsHs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLApGrwv6bI9LDbV3NmyxqAWOyX2ug', category: 'health' },
      { title: 'Event 7', date: 'pick', location: 'Giza', price: 'Free', imageUrl: 'https://mhcsa.org.au/wp-content/uploads/2022/09/Cover-Art.png', category: 'health' },
      { title: 'Event 8', date: 'pick', location: 'Giza', price: 'Paid', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsopcEqTRNlEKAbgssvZdABROVZNyXwY0yJJ3oNX9lq6TzkcrcNZSdMXxfadm8B0SkgpE&usqp=CAU', category: 'health' },

      { title: 'Event 1', date: 'today', location: 'Alex', price: 'Paid', imageUrl: 'https://wttc.org/LinkClick.aspx?fileticket=KPqO2JHIlEc%3D&portalid=0', category: 'camping' },
      { title: 'Event 2', date: 'today', location: 'Alex', price: 'Paid', imageUrl: 'https://thatsallsport.com/wp-content/uploads/2022/08/Multiple-Athletes-From-Different-Sporting-Events.png', category: 'camping' },
      { title: 'Event 3', date: 'tomorrow', location: 'Alex', price: 'Paid', imageUrl: 'https://wmhdofficial.com/wp-content/uploads/cover-top_events.jpg', category: 'camping' },
      { title: 'Event 4', date: 'tomorrow', location: 'Alex', price: 'Paid', imageUrl: 'https://lh3.googleusercontent.com/proxy/nSrhynsLyJWTHRwRZL7lhKJClCbvYOja1pVSR3gfwyMtiTASVj5UbpObhGhcIvH1UKA9a_wcgcLLlEAQfNSnitwmF6afWjJP6D16vNNCZIL1NdkU9_Qtb7ZPvQ', category: 'camping' },
      { title: 'Event 5', date: 'weekend', location: 'Alex', price: 'Paid', imageUrl: 'https://www.eventalways.com/blog/wp-content/uploads/2022/05/top-tech-conference.jpg', category: 'camping' },
      { title: 'Event 6', date: 'weekend', location: 'Alex', price: 'Paid', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyh4eeFxoV-rPHyk7l3zF71whf6T_uvetnAnJVNYPW3QrHMOqDbIi9D1WqtmW_zPCpDw&usqp=CAU', category: 'camping' },
      { title: 'Event 7', date: 'pick', location: 'Alex', price: 'Paid', imageUrl: 'https://www.iottechexpo.com/wp-content/uploads/2021/01/IOT-TECH-EXPO-WS-BLOG-SIZE.jpg', category: 'camping' },
      { title: 'Event 8', date: 'pick', location: 'Alex', price: 'Paid', imageUrl: 'https://cdn.asp.events/CLIENT_CloserSt_D86EA381_5056_B739_5482D50A1A831DDD/sites/DCWS-2023/media/libraries/techtalk/TELECOM-REVIEW-PR-Image.png/fit-in/700x9999/filters:no_upscale()', category: 'camping' },

      // المزيد من الأحداث ...
    ];
  }

  // تغيير الفئة (Category) واختيار واحدة جديدة
  selectCategory(category: string) {
    this.selectedCategory = category; // حذف الفئة السابقة واختيار الفئة الجديدة
    this.applyFilters();
  }

  // تغيير التاريخ (Date) واختيار واحد جديد
  selectDate(date: string) {
    this.selectedDate = date; // حذف التاريخ السابق واختيار التاريخ الجديد
    this.applyFilters();
  }

  // تغيير السعر (Price) واختيار واحد جديد
  selectPrice(price: string) {
    this.selectedPrice = price; // حذف السعر السابق واختيار السعر الجديد
    this.applyFilters();
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event => {
      const matchesCategory = this.selectedCategory === '' || event.category === this.selectedCategory;
      const matchesDate = this.selectedDate === '' || event.date === this.selectedDate;
      const matchesPrice = this.selectedPrice === '' || event.price.toLowerCase() === this.selectedPrice.toLowerCase();
      
      // عرض الأحداث التي تتطابق مع الفلاتر المختارة
      return matchesCategory && matchesDate && matchesPrice;
    });
  }

  // إعادة ضبط الفلاتر
  clearFilters() {
    this.selectedCategory = '';
    this.selectedDate = '';
    this.selectedPrice = '';
    this.filteredEvents = this.events; // إعادة تعيين الأحداث لعرض جميعها
  }
}

