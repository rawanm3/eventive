import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showTable: boolean = false;
  borderColor: string = ''; 
  borderVisible: boolean = false; 


  showLastQuarter() {
    this.showTable = false; 
    this.borderVisible = false; 
  }

  
  onFocus(event: FocusEvent) {
    const target = event.target as HTMLElement;
    target.style.borderColor = '#D1410C';
  }

  onBlur(event: FocusEvent) {
    const target = event.target as HTMLElement;
    target.style.borderColor = '';
  }
}
