import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DashboardDataService } from '../../services/dashboard-data.service';
import { itCreateEvent } from '../../../interface/itCreateEvent';
 
@Component({
  selector: 'app-create-an-event',
  templateUrl: './create-an-event.component.html',
  styleUrls: ['./create-an-event.component.scss']
})
export class CreateAnEventComponent implements OnInit {
  createEventForm!: FormGroup;
  currentStep = 1;
  todayDate: string;
 
  constructor(private fb: FormBuilder , private dashboardService: DashboardDataService) {
    this.todayDate = new Date().toISOString().split('T')[0];
  }
 
  ngOnInit() {
    this.createEventForm = this.fb.group({
      eventName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      eventImg: ['', Validators.required],
      about: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      dateEvent: ['', [Validators.required, this.dateValidator]],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      eventAddress: ['', Validators.required],
      eventPrice: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      eventCapacity: ['', [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]+$/)]],
      eventType: this.fb.group({
        type: ['', Validators.required]
      })
    });
  }
 
  nextStep() {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }
 
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
 
  dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
 
    if (selectedDate < today) {
      return { 'dateValidator': true };
    }
    return null;
  }
 
  selectEventType(type: string) {
    this.createEventForm.get('eventType.type')?.setValue(type);
  }
 
  @ViewChild('canvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;
        img.onload = () => {
          const ctx = this.canvas.nativeElement.getContext('2d');
          this.canvas.nativeElement.width = img.width;
          this.canvas.nativeElement.height = img.height;
          ctx?.drawImage(img, 0, 0);
        };
      };
      reader.readAsDataURL(file);
    }
  }
  
 
  onSubmit() {
    if (this.createEventForm.valid) {
      const newEvent: itCreateEvent = this.createEventForm.value;
      this.dashboardService.addEvent(newEvent).then(() => {
        // Optionally, reset the form or redirect after submission
        this.createEventForm.reset();
        // Redirect to dashboard or show a success message
      });
    }
  }

}
 