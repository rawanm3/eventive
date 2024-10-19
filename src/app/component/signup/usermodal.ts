
export class USERModal{
  constructor(
    public uid: string, // Add uid property
    public name : string,
    public lastName : string,
    public email : string,
    public password : string,
    public RepeatPassword : string
  ){}
}