import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
