import { Component, ViewEncapsulation } from '@angular/core';
import { ConditionerComponent } from '../components/conditioner/conditioner.component';
import { HumidifierComponent } from '../components/humidifier/humidifier.component';
import { BulbsComponent } from '../components/bulbs/bulbs.component';

type state = {
  isElectricityEnable: boolean;
  isWindowOpen: boolean;
  thermometerIndicate: number;
  hygrometerIndicate: number;
  dateNow: Date;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ConditionerComponent, HumidifierComponent, BulbsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  controller: state = {
    isElectricityEnable: true,
    isWindowOpen: false,
    thermometerIndicate: 30,
    hygrometerIndicate: 45,
    dateNow: new Date(),
  };
}
