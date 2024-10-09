import { Component } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search-evevnt',
  templateUrl: './search-evevnt.component.html',

  styleUrl: './search-evevnt.component.scss'
})
export class SearchEvevntComponent {
filtersGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filtersGroup = this.fb.group({
      category: [''],
      date: [''],
      price: ['']
    });
  }

  clearFilters() {
    this.filtersGroup.reset();  // Reset the form, clearing all selected filters
  }
}
