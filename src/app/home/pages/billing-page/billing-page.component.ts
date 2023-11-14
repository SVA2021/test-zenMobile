import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
