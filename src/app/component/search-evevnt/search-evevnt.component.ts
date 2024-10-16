// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';


// interface Event {
//   title: string;
//   date: string;
//   location: string;
//   price: string;
//   image: string;
//   promoted?: boolean;
//   discount?: string;
// }

// @Component({
//   selector: 'app-search-events',
//   templateUrl: './search-evevnt.component.html',
//    styleUrl:'./search-evevnt.component.scss'
// })
// export class SearchEventsComponent implements OnInit {
//   searchQuery: string = '';
//   isDropdownOpen: boolean = false;
//   filteredEvents: Event[] = [];
//   allEvents: Event[] = [
//     {
//       title: 'Event 1',
//       date: 'October 15, 2024',
//       location: 'Cairo, Egypt',
//       price: 'Free',
//       image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F820031459%2F111235949977%2F1%2Foriginal.20240803-221609?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C9000%2C4500&s=c347cab736dd7a2e596e12f410298337',
//       promoted: true
//     },
//     {
//       title: 'Event 2',
//       date: 'October 20, 2024',
//       location: 'Alexandria, Egypt',
//       price: '$20.00',
//       image: 'https://static.wixstatic.com/media/1b1025_4d5b5f2602144136bd130e00fd19d0dc~mv2.png/v1/fill/w_458,h_458,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1b1025_4d5b5f2602144136bd130e00fd19d0dc~mv2.png',
//       promoted: true,
//       discount: '$5.00 off select tickets'
//     },
//     {
//       title: 'Event 3',
//       date: 'November 1, 2024',
//       location: 'Luxor, Egypt',
//       price: '$30.00',
//       image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F864927379%2F2358842013293%2F1%2Foriginal.20241002-170711?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.496212121212&fp-y=0.0359922178988&s=cb29cc16c60289ffd58d9c6a2f1167a3',
//       promoted: true,
//       discount: '$10.00 off'
//     }
//   ];

//   categories: string[] = ['Business', 'Food & Drink', 'Health', 'Music'];
//   selectedCategories: string[] = [];
//   selectedDate: string = '';
//   selectedPrice: string = '';

//   constructor() { }

//   ngOnInit(): void {
//     this.filteredEvents = this.allEvents;
//   }

//   toggleDropdown(): void {
//     this.isDropdownOpen = !this.isDropdownOpen;
//   }

//   searchEvents(): void {
//     this.filteredEvents = this.allEvents.filter(event =>
//       event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
//       event.location.toLowerCase().includes(this.searchQuery.toLowerCase())
//     );
//     this.applyFilters();
//   }

//   toggleCategory(category: string): void {
//     const index = this.selectedCategories.indexOf(category);
//     if (index > -1) {
//       this.selectedCategories.splice(index, 1);
//     } else {
//       this.selectedCategories.push(category);
//     }
//     this.applyFilters();
//   }

//   setDate(date: string): void {
//     this.selectedDate = date;
//     this.applyFilters();
//   }

//   setPrice(price: string): void {
//     this.selectedPrice = price;
//     this.applyFilters();
//   }

//   clearFilters(): void {
//     this.selectedCategories = [];
//     this.selectedDate = '';
//     this.selectedPrice = '';
//     this.filteredEvents = this.allEvents;
//   }

//   private applyFilters(): void {
//     this.filteredEvents = this.allEvents.filter(event => {
//       const matchesSearch = event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
//                             event.location.toLowerCase().includes(this.searchQuery.toLowerCase());
//       const matchesCategory = this.selectedCategories.length === 0 || this.selectedCategories.some(cat => event.title.includes(cat));
//       const matchesDate = !this.selectedDate || event.date.includes(this.selectedDate);
//       const matchesPrice = !this.selectedPrice || 
//                            (this.selectedPrice === 'Free' && event.price === 'Free') ||
//                            (this.selectedPrice === 'Paid' && event.price !== 'Free');
//       return matchesSearch && matchesCategory && matchesDate && matchesPrice;
//     });
//   }
// }
import { Component,OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventSearchService } from '../../services/event-search.service'; // import the service


@Component({
  selector: 'app-search-evevnt',
  templateUrl: './search-evevnt.component.html',

  styleUrl:'./search-evevnt.component.scss'
})
export class SearchEvevntComponent implements OnInit {
  filtersGroup!: FormGroup;
events = [
  {
    title: 'Bat Movie Benefit at the Lark Theater',
    date: 'Tomorrow • 6:30 PM',
    location: 'Lark Theater',
    price: 'Check ticket price',
    discount: null,
    category: 'Business',
    imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F820031459%2F111235949977%2F1%2Foriginal.20240803-221609?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C9000%2C4500&s=c347cab736dd7a2e596e12f410298337'
  },
  {
   title:'Kites in the Sky - World Mental Health Day',
    date: 'Thursday, October 10 · 2:30', 
    location: 'Rodeo Beach', 
    price: 'From 30$',
    discount: "$5.00 off select tickets",
    category: 'Health',
    imageUrl: "https://static.wixstatic.com/media/1b1025_4d5b5f2602144136bd130e00fd19d0dc~mv2.png/v1/fill/w_458,h_458,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1b1025_4d5b5f2602144136bd130e00fd19d0dc~mv2.png"
  },
  {
    title: 'Egypt Journey: An 8 days tour vacation from Cairo',
     date: 'October 20 · 9:00 AM', 
     location: 'Cairo, Egypt',
     price: 'From 1500$' ,
    discount: '$10.00 off',
    category: 'camping',
    imageUrl: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F864927379%2F2358842013293%2F1%2Foriginal.20241002-170711?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.496212121212&fp-y=0.0359922178988&s=cb29cc16c60289ffd58d9c6a2f1167a3'
  }
];

filteredEvents = this.events; 
  

ngOnInit(): void {
  this.eventSearchService.currentSearchTerm.subscribe((searchTerm) => {
    if (searchTerm) {
      // Filter the events based on the search term
      this.filteredEvents = this.events.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
    
      // this.filteredEvents = this.events;
      this.applyFilters();
    }
  });
  this.filtersGroup.valueChanges.subscribe(() => {
    this.applyFilters();
  });
}
applyFilters(): void {
  const { category, date, price } = this.filtersGroup.value;

  this.filteredEvents = this.events.filter(event => {
    const categoryMatches = !category || event.category?.toLowerCase() === category.toLowerCase();
    
    const dateMatches = !date || event.date.toLowerCase().includes(date.toLowerCase());
    
    const priceMatches = !price || 
      (price === 'free' ? Number(event.price.replace(/[^0-9.-]+/g, "")) === 0 : Number(event.price.replace(/[^0-9.-]+/g, "")) > 0);

    return categoryMatches && dateMatches && priceMatches;
  });
}




  constructor(private fb: FormBuilder,private route:ActivatedRoute,private eventSearchService: EventSearchService) {
    this.filtersGroup = this.fb.group({
      category: [''],
      date: [''],
      price: ['']
    });
  }
 
  clearFilters(): void {
    this.filtersGroup.reset();  // Reset the form, clearing all selected filters
    this.filteredEvents = [...this.events]; // Reset to show all events
  }
  
  
}

