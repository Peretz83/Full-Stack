import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  @Input() showNotification = false;
  @Input() text = ''

    @Output() buttonClicked = new EventEmitter<boolean>();

    onButtonClick() {
        this.buttonClicked.emit(false);
    }

}
