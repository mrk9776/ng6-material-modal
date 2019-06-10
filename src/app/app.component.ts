import { ModalService } from './services/modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng6-material-modal';

  constructor(
    private modalService: ModalService
  ) { }

  openInfoModal() {
    this.modalService.openInfoModal('Hello Info');
  }

  openWarningModal() {
    this.modalService.openWarningModal('Hello Warning');
  }

  openErrorModal() {
    this.modalService.openErrorModal('Hello Error');
  }

  openConfirmModal() {
    this.modalService.openConfirmModal('Are you love me?', (answer: boolean) => {
      if (answer) {
        console.log('Yes, I love you.');
        return;
      }
      console.log('No, I\'m sorry.');
    });
  }
}
