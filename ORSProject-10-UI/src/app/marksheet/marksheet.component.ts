import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html'
})
export class MarksheetComponent extends BaseCtl {

  constructor(private locator : ServiceLocatorService , route : ActivatedRoute) {
    super(locator.endpoints.MARKSHEET , locator , route);
  }

}
