export interface AppEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  liked?: boolean; // To track if the event is liked
}
