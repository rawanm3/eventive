import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createEventModel } from './createModel';

@Component({
  selector: 'app-create-an-event',
  templateUrl: './create-an-event.component.html',
  styleUrl: './create-an-event.component.scss'
})
export class CreateAnEventComponent {

  userModel = new createEventModel('', '', '', '', '', '', '', '', '','','', '', false, true);



  createEventForm: FormGroup;
  currentStep = 1;
  imageSelected = false;
  todayDate = new Date().toISOString().slice(0, 10);
  timeInput: any;

  timeOptions = [
    { value: '09:00', label: '9:00 AM' },
    { value: '09:30', label: '9:30 AM' },
    { value: '21:00', label: '9:00 PM' },
  ];


  constructor(private fb: FormBuilder) {
    this.createEventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      about: ['', Validators.required],
      dateEvent: ['', Validators.required],
      startDateEvent: ['', Validators.required],
      timeInput: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      endDateEvent: ['', Validators.required],
      eventAddress: ['', Validators.required],
      eventPrice: ['', Validators.required],
      eventCapacity: ['', Validators.required],
      isOnClicked: ['', Validators.required],
      isOffClicked: ['', Validators.required],
      eventImg: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  // Move to the next step
  nextStep() {
    if (this.currentStep < 7) {
      this.currentStep++;
    }
  }


  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onFileSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.createEventForm.patchValue({
        image: event.target.files[0]
      });
      this.imageSelected = true;
    }
  }

  onSubmit() {
    if (this.createEventForm.valid) {
      const formData = new FormData();
      for (const key in this.createEventForm.controls) {
        formData.append(key, this.createEventForm.controls[key].value);
      }
      console.log('Form Data:', formData);
    } else {
      console.log('Form is invalid');
    }
  }
  
}
