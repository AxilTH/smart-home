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
  selector: 'app-conditioner',
  standalone: true,
  imports: [],
  templateUrl: './conditioner.component.html',
  styleUrl: './conditioner.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ConditionerComponent implements AfterViewInit {
  constructor(private cd: ChangeDetectorRef) {}

  @Input() controllerState: state = {
    isElectricityEnable: false,
    isWindowOpen: false,
    thermometerIndicate: 0,
    hygrometerIndicate: 0,
    dateNow: new Date(),
  };

  public conditionerEnable: boolean = false;

  ngAfterViewInit() {
    if (
      this.controllerState.isElectricityEnable &&
      !this.controllerState.isWindowOpen &&
      this.controllerState.thermometerIndicate >= -5 &&
      this.controllerState.thermometerIndicate <= 35
    ) {
      this.conditionerEnable = true;
    }
    this.cd.detectChanges();
  }
}
