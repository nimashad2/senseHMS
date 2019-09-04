import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config = {
    paddingAtStart: true,
    classname: 'my-custom-class',
    listBackgroundColor: 'rgb(208, 241, 239)',
    fontColor: 'rgb(8, 54, 71)',
    backgroundColor: 'rgb(208, 241, 239)',
    selectedListFontColor: 'red',
  };

  appitems = [
    {
      label: 'Item 1 (with Font awesome icon)',
      faIcon: 'fab fa-500px',
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
          faIcon: 'fab fa-accusoft'
        },
        {
          label: 'Item 1.2',
          faIcon: 'fab fa-accessible-icon',
          items: [
            {
              label: 'Item 1.2.1',
              link: '/item-1-2-1',
              faIcon: 'fas fa-allergies'
            },
            {
              label: 'Item 1.2.2',
              faIcon: 'fas fa-ambulance',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  link: 'item-1-2-2-1',
                  faIcon: 'fas fa-anchor'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Item 2',
      icon: 'alarm',
      items: [
        {
          label: 'Item 2.1',
          link: '/item-2-1',
          icon: 'favorite'
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    },
    {
      label: 'Item 3',
      link: '/item-3',
      icon: 'offline_pin'
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true
    }
  ];
  constructor(private route : Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.route.navigateByUrl('/user/login');
  }

}
