import { publishFacade } from "@angular/compiler";

export class USERModel{
  constructor(
    public name : string,
    public phone : string,
    public email : string,
    public password : string,
    public isChecked:Boolean
  ){}
}