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
  selector: 'app-humidifier',
  standalone: true,
  imports: [],
  templateUrl: './humidifier.component.html',
  styleUrl: './humidifier.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class HumidifierComponent implements AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

  @Input() controllerState: state = {
    isElectricityEnable: false,
    isWindowOpen: false,
    thermometerIndicate: 0,
    hygrometerIndicate: 0,
    dateNow: new Date(),
  };

  public humidifierEnable: boolean = false;

  ngAfterViewInit() {
    if (
      this.controllerState.isElectricityEnable &&
      this.controllerState.hygrometerIndicate >= 40 &&
      this.controllerState.hygrometerIndicate <= 60
    ) {
      this.humidifierEnable = true;
    }
    this.cd.detectChanges();
  }
}
