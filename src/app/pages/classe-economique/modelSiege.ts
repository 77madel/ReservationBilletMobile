export class Seat {
  constructor(
    public number: string,  // Le numéro du siège, ex : "1A"
    public status: 'free' | 'occupied' | 'selected'  // Le statut du siège
  ) {}
}
