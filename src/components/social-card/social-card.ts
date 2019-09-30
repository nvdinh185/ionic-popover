import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'social-card',
    templateUrl: "social-card.html"
})
export class SocialCard {
    @Output() onClickSub = new EventEmitter();

    onClickActions(num) {
        this.onClickSub.emit(num)
    }
}