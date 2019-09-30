import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public popoverCtrl: PopoverController) { }

  /**
   * Popup cửa sổ menu để chọn
   * @param myEvent 
   */
  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);

    popover.present({ ev: event }); //Lấy sự kiện event để xác định vị trí hiện popup

    popover.onDidDismiss(data => {
      console.log(data)
    })
  }

  /**
   * Định nghĩa một thuộc tính của một đối tượng
   */
  objectDefineProperty() {
    const object1 = {};
    Object.defineProperty(object1, 'property1', {
      value: 42,
      writable: true, //cho phep sua du lieu sau khi gan gia tri vao
      enumerable: true,
      configurable: true
    });

    console.log(object1)
    object1.property1 = 12;
    console.log(object1)
  }

  /**
   * Nhận giá trị từ social-card trả về để hiển thị ra
   * @param num 
   */
  onClickAction(num) {
    console.log(num)
  }
}
