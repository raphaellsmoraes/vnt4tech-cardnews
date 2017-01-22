/**
 * Class that represents an Card model
 */
export class Card {
    public title: string;
    public imgSrc: string;
    public description: string;
    public hide: boolean;

    constructor(title: string, imgSrc: string, description: string) {
        this.title = title;
        this.imgSrc = imgSrc;
        this.description = description;
        this.hide = true;
    }

    dismiss() {
        this.hide = !this.hide;
    }
}
