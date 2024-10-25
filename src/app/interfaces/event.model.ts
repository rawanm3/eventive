<<<<<<< HEAD
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
=======
export interface AppEvent {
  title: string;
  price: number;
  id: string;
  name: string;
  host:string;
  description: string;
  date: string; // Add any other properties you need
  liked: boolean;
>>>>>>> 7e7aa8f6d66a6ddfb1bf3dd858ef0e2a0b02a704
}
