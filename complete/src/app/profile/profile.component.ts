import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  moduleId: module.id,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: Profile;

  public feedback = {
    title: 'Amazing Results',
    score: 5,
    date: new Date(),
    component: 'DataForm',
    note: `This looks really great, 
I was really amazed how little effort it took to implement it.
I can't wait to see other components`,
    test: false
  }

  public components: string[] = [
    'DataForm',
    'SideDrawer',
    'Calendar',
    'ListView',
    'Gauge',
    'AutoComplete'
  ];

  constructor() {
    this.profile = {
      name: 'Joe',
      password: 'bl0gs',
      angularPro: false,
      dob: new Date(),
      codingPower: 1
    }
  }

  save() {
    console.log(JSON.stringify(this.profile, null, 2));
  }

  clear() {
    this.profile.name = '';
    this.profile.password = '';
    this.profile.angularPro = false;
    this.profile.dob = new Date();
    this.profile.codingPower = 1;
  }

  clearForm() {
    this.profile = {
      name: '',
      password: '',
      angularPro: false,
      dob: new Date(),
      codingPower: 1
    }
  }
}

export interface Profile {
  name: string;
  password: string;
  angularPro: boolean;
  dob: Date;
  codingPower: number;
}
