import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-ville-not-found',
  templateUrl: './ville-not-found.component.html',
  styleUrls: ['./ville-not-found.component.scss'],
  standalone: true,
})
export class VilleNotFoundComponent  implements OnInit {


  constructor() { }

  ngOnInit() {}

  @Input() isVisible: boolean = false;
  @Input() message: string = '';

  closePopup() {
    this.isVisible = false;
  }

}
