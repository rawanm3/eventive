import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage'; // Import for Firebase Storage
import { Router } from '@angular/router'; // Import Router
import { EventService } from '../../services/event.service';

interface CustomEvent {
  eventId?:string;
  eventName: string;
  eventImg: string; // Make sure to define the type for uploaded image URL
  about: string;
  dateEvent: string;
  startTime: string;
  endTime: string;
  eventCapacity: number;
  eventAddress: string;
  eventPrice: number;
  eventType: {
    type: string; // e.g., 'online' or 'offline'
  };
}

// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
// =======
// import { DashboardDataService } from '../../services/dashboard-data.service';
// import { itCreateEvent } from '../../../interface/itCreateEvent';
// >>>>>>> 7e7aa8f6d66a6ddfb1bf3dd858ef0e2a0b02a704
 
@Component({
  selector: 'app-create-an-event',
  templateUrl: './create-an-event.component.html',
  styleUrls: ['./create-an-event.component.scss']
})
export class CreateAnEventComponent implements OnInit {
  createEventForm!: FormGroup;
  currentStep = 1;
  todayDate:any;
  uploadedImageUrl: string | undefined; // URL for the uploaded image
  uploadedImage: File | null = null; // Store the file separately

  // newEvent: CustomEvent | undefined; // Use CustomEvent
eventData: CustomEvent = {
  eventId:'',
  eventName: '',
  eventImg: '',
  about: '',
  dateEvent: '',
  startTime: '',
  endTime: '',
  eventCapacity: 0,
  eventAddress: '',
  eventPrice: 0,
  eventType: {
    type: ''
  }
};
  constructor(
    private fb: FormBuilder,
    private firebaseDatabase: AngularFireDatabase,
    private router: Router,
    private storage: AngularFireStorage,
     private eventService: EventService
  ) {
 
  }

 
 
  ngOnInit() {
    this.createEventForm = this.fb.group({
      eventName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      eventImg: ['', Validators.required],
      about: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      dateEvent: ['', [Validators.required]],
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
   nextStep(){
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
    selectEventType(type: string){
    this.createEventForm.get('eventType.type')?.setValue(type);
  }

  // Upload image function
  async uploadImage(file: File): Promise<string> {
    const filePath = `eventPage/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    await fileRef.put(file);
    return await fileRef.getDownloadURL().toPromise(); // Get the download URL after upload
  }

  onFileSelected(event: Event) {
   const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
}


  async onSubmit() {
    if (this.createEventForm.valid) {
      // First, upload the image and get the URL
      if (this.uploadedImage) {
        this.uploadedImageUrl = await this.uploadImage(this.uploadedImage);
      }

      const newEvent: CustomEvent = {
        eventName: this.createEventForm.value.eventName,
        eventImg: this.uploadedImageUrl ?? '', // Make sure this URL is set correctly after image upload
        about: this.createEventForm.value.about,
        dateEvent: this.createEventForm.value.dateEvent,
        startTime: this.createEventForm.value.startTime,
        endTime: this.createEventForm.value.endTime,
        eventCapacity: this.createEventForm.value.eventCapacity,
        eventAddress: this.createEventForm.value.eventAddress,
        eventPrice: this.createEventForm.value.eventPrice,
        eventType: {
          type: this.createEventForm.value.eventType.type
        },
      };

      console.log(this.createEventForm.value);
      this.firebaseDatabase.list('/eventPage').push(newEvent)
        .then(() => {
          console.log('Event created successfully!');
          this.createEventForm.reset(); // Reset the form after submission
          this.router.navigate(['/eventPage']); // Navigate to the events page
        })
        .catch((error: any) => {
          console.error('Error creating event:', error);
          alert('An error occurred while creating the event. Please try again.');
        });
      }
    }
}