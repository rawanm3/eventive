
export class createEventModel {
    selectedOption: any;
    selectedTime: any;
    selectedEndTime: any;
    selectedStartTime: any;
    
       constructor(
        public eventName: string,
        public eventImg : string,
        public about : string,
        public dateEvent : string,
        public startDateEvent : string,
        public timeInput :string,
        public endDateEvent : string,
        public endTime : any,
        public startTime : any,
        public eventAddress : string,
        public eventPrice : string,
        public eventCapacity : string,
        public isOnClicked: boolean,
        public isOffClicked:boolean,
       ){}
   
    }