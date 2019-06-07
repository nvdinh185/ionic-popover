import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Component({
    selector: 'social-card',
    templateUrl: "social-card.html"
})
export class SocialCard {
    @Output() onClickSub = new EventEmitter();

    onClickActions(ev) {
        console.log('ev', ev);
    }
}