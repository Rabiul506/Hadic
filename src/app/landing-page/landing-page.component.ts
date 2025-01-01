import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faCoffee, faHashtag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  faCircle = faCircle;
  faHash = faHashtag;


  screenWidth: number;
  showBurgerOptions: boolean = false;
  readonly copyright: string = "Copyright © 2024, Abdul Hadi Consulting Firm. All rights reserved."; 

  @ViewChild('contentWrapper') contentWrapper: ElementRef | any;

  constructor(
  ) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    // console.log(this.screenWidth);
    
  }



  scrollTo(domId: string, isSmallScreen: boolean = false): void {
    this.showBurgerOptions = false;

    setTimeout(() => {
      const element = (document.getElementById(domId) as HTMLInputElement);
      if (!this.isInViewPort(element)) {
        let position: ScrollLogicalPosition = this.screenWidth > 450 ? 'center' : 'start';
        element.scrollIntoView({ block: position, behavior: 'smooth' });
      }
    }, isSmallScreen ? 150 : 0);

  }


  isInViewPort(element: Element) {
    const bounding = element.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      return true;

    } else {
      return false;
    }
  }

  //  menubar 
isMenuOpen: boolean = false;

// toggleMenu(){
//   this.isMenuOpen = !this.isMenuOpen;
// }
closeMenu(){
  this.isMenuOpen = !this.isMenuOpen
}
openMenu(){
  this.isMenuOpen = !this.isMenuOpen
}


}
