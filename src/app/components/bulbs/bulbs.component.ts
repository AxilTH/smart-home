import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

type state = {
  isElectricityEnable: boolean;
  isWindowOpen: boolean;
  thermometerIndicate: number;
  hygrometerIndicate: number;
  dateNow: Date;
};

@Component({
  selector: 'app-bulbs',
  standalone: true,
  imports: [],
  templateUrl: './bulbs.component.html',
  styleUrl: './bulbs.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class BulbsComponent implements AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

  @Input() controllerState: state = {
    isElectricityEnable: false,
    isWindowOpen: false,
    thermometerIndicate: 0,
    hygrometerIndicate: 0,
    dateNow: new Date(),
  };

  public bulbsEnable: boolean = false;

  ngAfterViewInit() {
    if (
      this.controllerState.isElectricityEnable &&
      (this.controllerState.dateNow.getHours() <= 9 ||
        this.controllerState.dateNow.getHours() >= 18)
    ) {
      this.bulbsEnable = true;
    }
    this.cd.detectChanges();
  }
}
