import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isNavMenuHidden = true;
  isDropdownHidden = true;
  showDropdown() {
    this.isDropdownHidden = false;
  }
  hideDropdown() {
    this.isDropdownHidden = true;
  }
  showNavMenu() {
    this.isNavMenuHidden = !this.isNavMenuHidden;
  }
}
