import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent extends BaseListCtl  {

  constructor( public locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.STUDENT , locator , route);
  }

}
