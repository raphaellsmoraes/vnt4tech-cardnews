import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';

@Injectable()
export class CardFeedService {
    private cardFeed: Array<Card> = new Array<Card>();

    /**
     * Initialize the service with 10 cards
     */
    constructor() {
        this.cardFeed = this.createCardFeedMock(10);
     }

    public getCardFeed(){
        return this.cardFeed;
    }

    /**
     * Generates a mocked Card feed
     * @param quantity number of cards to be created
     */
    private createCardFeedMock(quantity: number): any{
        let cards: Array<Card> = new Array<Card>();
        for (let i = 1; i <= quantity; i++) {
            cards.push(
                new Card(
                'Card #' + i,
                'http://lorempixel.com/400/250',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                'Donec vel turpis sit amet urna cursus feugiat. Nam quis quam sed sapien tincidunt placerat eget vel.'
                )
            );
        }
        return cards;
    }
}
