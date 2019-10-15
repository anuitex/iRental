// Vendors
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage implements OnInit {
  
  public gender: string = 'Gender';
  public genderArray: string[] = ['Male', 'Female']
  public isShowGender: boolean = false;

  constructor(
  ) {
  }

  ngOnInit() {
  }

  public showDataPicker() {

  }

  public toggleGenderPopup() {
    this.isShowGender = !this.isShowGender;
  }

  public selectGender(selectedGender) {
    this.gender = selectedGender;
    this.isShowGender = !this.isShowGender;
  }

  public regist() {

  }

}
