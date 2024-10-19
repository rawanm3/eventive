import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'eventive-project';
  //  products: Product[] = [];
  // filteredProducts: Product[] = [];

  // constructor(private productService: ProductService) {
  //   this.products = this.productService.getProducts();
  //   this.filteredProducts = this.products; // Start with all products
  // }

  // onFilterChange(filter: { search: string; category: string }) {
  //   this.filteredProducts = this.products.filter(product => {
  //     return (
  //       product.name.toLowerCase().includes(filter.search.toLowerCase()) &&
  //       (filter.category ? product.category === filter.category : true)
  //     );
  //   });
  // }
user: firebase.User | null = null;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit() {
    // Check local storage for user
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }

    // Subscribe to auth state
    this.auth.authState.subscribe(user => {
      this.user = user;
    });
  }
}
