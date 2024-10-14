import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventSearchService {
  // BehaviorSubject to store the current search term, initially empty
  private searchTerm = new BehaviorSubject<string>('');
  
  // Observable that can be subscribed to from other components
  currentSearchTerm = this.searchTerm.asObservable();

  constructor() {}

  // Function to update the search term
  updateSearchTerm(term: string) {
    this.searchTerm.next(term);
  }
}
