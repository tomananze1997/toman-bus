import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() showPopup: boolean = false;
  @Input() text: string = '';
  @Output() confirmAction: EventEmitter<void> = new EventEmitter<void>();

  public onConfirm() {
    this.confirmAction.emit();
  }
}
