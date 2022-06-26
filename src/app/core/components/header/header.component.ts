import { Theme } from './enum/Theme.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = Theme.ICON_MOON;
  public textTheme: string = Theme.TEXT_MOON;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if(theme){
      this.textTheme = Theme.TEXT_SUN;
      return (this.icon =  Theme.ICON_SUN);

    }
    this.textTheme = Theme.TEXT_MOON;
    return (this.icon =  Theme.ICON_MOON);

  }

}
