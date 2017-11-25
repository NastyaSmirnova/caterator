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
    this.src = '';
    this.src = this.image.api + this.image.message + '?size=' + this.image.fontsize;
  }

}
