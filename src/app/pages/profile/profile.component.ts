import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  paletteToggle = false;
  toggleChange(ev: any) {
    this.toggleDarkPalette(ev.detail.checked);
  }
  initializeDarkPalette(isDark: any) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }
  toggleDarkPalette(shouldAdd: any) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
  properties: any[] = [
    {
      n: 'My orders',
      d: 'Already have 12 orders'
    },
    {
      n: 'Shipping addresses',
      d: 'Visa **34'
    },
    {
      n: 'Promocodes',
      d: 'You have special promocodes'
    },
    {
      n: 'My reviews',
      d: 'Reviews for 4 items'
    },
    {
      n: 'Settings',
      d: 'Notifications, password'
    }
  ]
  constructor(private route: Router) { }

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.initializeDarkPalette(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  goToMyorder(i: number) {
    if (i == 0) {
      this.route.navigate(['/profile/orders'])
    }
    if (i == 4) {
      this.route.navigate(['/profile/setting'])
    }
  }
}
