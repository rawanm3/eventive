import { Component, HostListener,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventSearchService } from '../../services/event-search.service'; // import the service

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
// searchEvents(arg0: any) {
// throw new Error('Method not implemented.');
// }
isDropdownOpen = false;
  events: any;
  filtered: any;
  files: any;
  SearchTag: any;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }
  searchQuery: string = '';

  constructor(private router: Router , private eventSearchService:EventSearchService) {}
  ngOnInit(): void {
  }
  // onSearch(): void {
  //   // Navigate to the search results page, passing the search query as a parameter
  //   this.router.navigate(['/search-event'], { queryParams: { q: this.searchQuery } });
  // }
  searchEvents(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;

    // Pass the search term to the service
    this.eventSearchService.updateSearchTerm(searchTerm);
  }
}

