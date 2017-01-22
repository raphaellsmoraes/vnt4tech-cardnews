import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../shared/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('card') card: Card;
  @Output() cardDimissed = new EventEmitter();

  constructor() { }

  private onDismiss() {
    this.cardDimissed.emit(this.card);
  }
}
