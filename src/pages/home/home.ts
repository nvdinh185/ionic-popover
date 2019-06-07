import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public popoverCtrl: PopoverController) { }
  onClickAction(ev) {
    console.log(ev)
  }

  presentPopover(myEvent) {
    console.log(myEvent)
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
