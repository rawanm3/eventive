
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { itCreateEvent } from '../../../interface/itCreateEvent';
import { CreateEventService } from '../../services/create-event.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

 
@Component({
  selector: 'app-create-an-event',
  templateUrl: './create-an-event.component.html',
  styleUrls: ['./create-an-event.component.scss']
})
export class CreateAnEventComponent implements OnInit {
  createEventForm!: FormGroup;  // Using '!' to indicate the form will be initialized in 'ngOnInit'
  currentStep = 1;
  todayDate: string;
  itCreateEvent! :itCreateEvent
 
  constructor(private fb: FormBuilder , private createEventService: CreateEventService) {

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
    return null;
  }
  // this.ticketsService.addTickets(this.ticketBooking).subscribe({
  //   next :data => console.log(data),
  //   error :err => console.log(err)
  // })
  selectEventType(type: string) {
    this.createEventForm.get('eventType.type')?.setValue(type);
  }
 
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.createEventForm.patchValue({ eventImg: file });
    this.createEventForm.get('eventImg')?.updateValueAndValidity();
  }
 
  onSubmit() {
    if (this.createEventForm.valid) {
      console.log(this.createEventForm.value);
      // Here you would typically send the form data to your backend
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.createEventForm.controls).forEach(key => {
        const control = this.createEventForm.get(key);
        control?.markAsTouched();
      });
    }
    this.createEventService.uploadCreatingOnEvent(this.itCreateEvent).subscribe({
      next: data => {console.log(data);},
      error: err => {console.log(err);}
    })

    this.createEventService.uploadCreatingOffEvent(this.itCreateEvent).subscribe({
      next: data => {console.log(data);},
      error: err => {console.log(err);}
    })
  }
}
}

