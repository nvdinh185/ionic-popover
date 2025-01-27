import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  
  constructor(public viewCtrl: ViewController) {}
  
  close(n: any) {
    this.viewCtrl.dismiss(n);
  }

}
