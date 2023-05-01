import { owner } from "./owner";

export class house {
  constructor(
    public id: number,
    public name: string, 
    public adresse: string,
    public owner: owner,
    public city: string,
    public state: string,
    public zip: number
  ) {}
}
