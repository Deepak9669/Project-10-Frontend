import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-tmetable',
  templateUrl: './timetable.component.html'
})
export class TimetableComponent extends BaseCtl {

  constructor(private locator: ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.TIMETABLE , locator, route);
  }
}
