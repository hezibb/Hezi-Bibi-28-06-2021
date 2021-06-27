import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'WeatherHerolo';
  mode = 'Light';

  ngOnInit() {
    document.querySelector('body').style.setProperty('--bg-color', '#f8fafb');
    document.querySelector('body').style.setProperty('--text-color', '#272727');
  }


  switchMode(mode) {
    if (mode === 'Light') {
      document.querySelector('body').style.setProperty('--bg-color', '#272727');
      document.querySelector('body').style.setProperty('--text-color', '#f8fafb');
      this.mode = 'Dark';
    } else {
      document.querySelector('body').style.setProperty('--bg-color', '#f8fafb');
      document.querySelector('body').style.setProperty('--text-color', '#272727');
      this.mode = 'Light';
    }
  }
}
