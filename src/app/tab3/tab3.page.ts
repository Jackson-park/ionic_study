import { Component } from '@angular/core';
import { DateInput } from '@fullcalendar/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  dateRange: { from: Date; to: Date; };
  date: number;
  type: 'string';
  optionsRange: CalendarComponentOptions = {
    monthFormat: 'YYYY 년 MM 월 ',
    color: 'secondary',
    weekdays: ['일', '월', '화', '수', '목', '금', '토'],
    // pickMode: 'range'
  };

  constructor() {

  }

}
