import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

  fechaNaci: Date = new Date();
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Log');
        }
      },
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

  cambioFecha(event: any) {
    console.log(event);
    console.log(event.detail.value);
  }
}
