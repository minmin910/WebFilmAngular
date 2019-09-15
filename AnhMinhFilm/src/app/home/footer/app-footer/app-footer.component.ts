import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  public config: SwiperConfigInterface = {
    //direction: "horizontal",
    speed: 800,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    grabCursor: true,
    autoplay: {
      delay: 1500
    },
   
    

  };


  slides: any = [
    "./assets/images/app_img/slide1.png",
    "./assets/images/app_img/slide2.png",
    "./assets/images/app_img/slide3.png",
    "./assets/images/app_img/slide5.png",
    "./assets/images/app_img/slide6.png",
    "./assets/images/app_img/slide7.png",
    "./assets/images/app_img/slide8.png",

  ];

  constructor() { }

  ngOnInit() {
  }

}
