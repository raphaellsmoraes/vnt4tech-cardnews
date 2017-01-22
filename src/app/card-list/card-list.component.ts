import { Component, OnInit } from '@angular/core';

import { Card } from '../shared/model/card.model';

import { CardFeedService } from '../shared/services/card-feed.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  private cardList: Array<Card>;
  private _cardFeedService: CardFeedService;

  constructor(_cardFeedService: CardFeedService) {
    this._cardFeedService = _cardFeedService;
   }

  ngOnInit() {
    /**
     * Get feed using service
     */
    this.cardList = this._cardFeedService.getCardFeed();
  }

  getNotification(event: any) {
    this.cardList = this.cardList.filter(item => item !== event);
  }
}
