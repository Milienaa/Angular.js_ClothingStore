import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {
  @Input() url!: string;
  @Input() alt!: string;
  @Input() descr!: string;
  @Input() params!: { size: string, colour: string };
  @Input() price!: number;
  @Input() remains!: number;

  
}
