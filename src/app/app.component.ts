import { Component } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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

}
