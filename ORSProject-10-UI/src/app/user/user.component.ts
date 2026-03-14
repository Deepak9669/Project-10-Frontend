import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent extends BaseCtl {

  constructor(private locator: ServiceLocatorService , route : ActivatedRoute) { 
    super(locator.endpoints.USER , locator , route);
} 

}
