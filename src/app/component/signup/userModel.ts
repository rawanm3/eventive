import { publishFacade } from "@angular/compiler";

export class USERModel{
  constructor(
    public email : string,
    public password : string,
    public name : string,
    public lastName : string,
   
    public RepeatPassword : string
  ){}
}