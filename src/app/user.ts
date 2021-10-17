export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: any,
    public topic: string,
    public timePreference: string,
    public subscribe: boolean
  ) {}
}
