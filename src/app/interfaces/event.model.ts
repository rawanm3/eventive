// export interface AppEvent {
//   liked: boolean;
//    eventName: string;
//     eventImg: string;
//     about: string;
//     dateEvent: string;
//     startTime: string;
//     endTime: string;
//     eventCapacity: number;
//     eventAddress: string;
//     eventPrice: number;
//     eventType: {
//       type: string;
//     }
// }
export interface CustomEvent {
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
