import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-app-button',
  templateUrl: './up-button.component.html',
  styleUrls: ['./up-button.component.scss']
})
export class UpButtonComponent {
  showButton: boolean = false;
  buttonClicked: boolean = false;
  globalDoc: Document = document;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const verticalOffset = document.documentElement.scrollTop || 0;
    if (verticalOffset > 200) {
      setTimeout(() => {
        this.showButton = true
      }, 500)
    } else {
      this.hideButton()
    }
  };

  hideButton(): void {
    this.buttonClicked = true;
    setTimeout(() => {
      this.buttonClicked = false;
      this.showButton = false
    }, 500)
  };
}
