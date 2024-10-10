import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-an-event',
  templateUrl: './create-an-event.component.html',
  styleUrl: './create-an-event.component.scss'
})
export class CreateAnEventComponent {
  createEventForm: FormGroup;
  currentStep = 1;
  imageSelected = false;

  constructor(private fb: FormBuilder) {
    this.createEventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      location: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  // Move to the next step
  nextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  // Move to the previous step
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Handle file selection
  onFileSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.createEventForm.patchValue({
        image: event.target.files[0]
      });
      this.imageSelected = true;
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.createEventForm.valid) {
      const formData = new FormData();
      for (const key in this.createEventForm.controls) {
        formData.append(key, this.createEventForm.controls[key].value);
      }

      // Submit your form data here (make an API call or whatever is necessary)
      console.log('Form Data:', formData);
    } else {
      console.log('Form is invalid');
    }
  }
  
}
