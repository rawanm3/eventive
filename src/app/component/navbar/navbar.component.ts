import { Component, HostListener,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { EventSearchService } from '../../services/event-search.service'; // import the service

@Component({
  selector: 'app-navbar',
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
getUser() {
throw new Error('Method not implemented.');
}

isDropdownOpen = false;
  events: any;
  filtered: any;
  files: any;
  SearchTag: any;
  afAuth: any;
 isActive(route: string): boolean {
    return this.router.url === route; // Compare current URL with route
  }
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

  constructor(private router: Router,private authService: AuthService , private eventSearchService:EventSearchService) {}
  ngOnInit(): void {
  }

  searchEvents(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;

    // Pass the search term to the service
    this.eventSearchService.updateSearchTerm(searchTerm);
  }
  // isLoggedIn: boolean = false;
  userName: string = '';

//  constructor(private authService: AuthService, private router: Router) {}

  // constructor(private authService: AuthService, private router: Router) {}

  // async logout() {
  //   await this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']);// Call the logout method from the auth service
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get userEmail() {
    return this.authService.user?.email; // Get user email if logged in
  }
}
  // constructor(
  //   private router: Router,
  //   private eventSearchService: EventSearchService,
  //   private authService: AuthService // Inject AuthService
  // ) {}

  // ngOnInit(): void {
  //   this.authService['user$'].subscribe((user: { email: string; }) => {
  //     if (user) {
  //       this.isLoggedIn = true;
  //       this.userName = user.email; // or user.displayName if you have it
  //     } else {
  //       this.isLoggedIn = false;
  //       this.userName = '';
  //     }
  //   });
  // }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // @HostListener('document:click', ['$event'])
  // closeDropdown(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('.dropdown')) {
  //     this.isDropdownOpen = false;
  //   }
  // }

  // searchEvents(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const searchTerm = inputElement.value;
  //   this.eventSearchService.updateSearchTerm(searchTerm);
  // }

  // logout() {
  //   this.authService.logout();
  // }
  //  isDropdownOpen = false;
  // isLoggedIn: boolean = false;
  // userName: string = '';
  // user$!: Observable<User | null>; // User observable

  // constructor(
  //   private router: Router,
  //   private eventSearchService: EventSearchService,
  //   private authService: AuthService // Inject AuthService
  // ) {}

  // ngOnInit(): void {
  //   this.user$ = this.authService.user$; // Get user observable from AuthService

  //   // Subscribe to user changes
  //   this.user$.subscribe((user) => {
  //     if (user) {
  //       this.isLoggedIn = true;
  //       this.userName = user.email || ''; // or user.displayName if available
  //     } else {
  //       this.isLoggedIn = false;
  //       this.userName = '';
  //     }
  //   });
  // }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // @HostListener('document:click', ['$event'])
  // closeDropdown(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('.dropdown')) {
  //     this.isDropdownOpen = false;
  //   }
  // }

  // searchEvents(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const searchTerm = inputElement.value;
  //   this.eventSearchService.updateSearchTerm(searchTerm);
  // }

  // logout() {
  //   this.authService.logout();
  // }
  //  isDropdownOpen = false;
  // isLoggedIn: boolean = false;
  // userName: string = '';

  // constructor(private router: Router, private authService: AuthService) {}

  // ngOnInit(): void {
  //   this.authService.user$.subscribe((user: User | null) => {
  //     if (user) {
  //       this.isLoggedIn = true;
  //       this.userName = user.email || ''; // Handle the case where email might be null
  //     } else {
  //       this.isLoggedIn = false;
  //       this.userName = '';
  //     }
  //   });
  // }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // logout() {
  //   this.authService.logout(); // Ensure this method is defined in your AuthService
  //    this.router.navigate(['/home']);
  // }


