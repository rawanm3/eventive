import { publishFacade } from "@angular/compiler";

export class USERModel{
  constructor(
    public name : string,
    public lastName : string,
    public email : string,
    public password : string,
    public RepeatPassword : string
  ){}
}