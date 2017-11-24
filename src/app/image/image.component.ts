import { Component, OnInit } from '@angular/core';

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  src = '';

  constructor() { }
  ngOnInit() {
    this.generateSrc();
  }
  generateSrc(): void {
    const timestamp = Date.now();
    this.src = this.image.api + this.image.message + // '?width=600&size=50&ts=123123';
      '?size=' + this.image.fontsize +
      '&ts=' + timestamp;
  }

}
