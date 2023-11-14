import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
