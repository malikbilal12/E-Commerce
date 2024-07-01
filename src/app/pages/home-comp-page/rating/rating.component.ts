import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  img: any[] = [
    { url: 'assets/sale/r1.png' }, { url: 'assets/sale/r2.png' },
    { url: 'assets/sale/r1.png' }, { url: 'assets/sale/r2.png' },
    { url: 'assets/sale/r1.png' }, { url: 'assets/sale/r2.png' },
    { url: 'assets/sale/r1.png' }, { url: 'assets/sale/r2.png' }
  ]
  stars = [0, 1, 2, 3, 4];
  selectedRating = -1;

  selectRating(rating: number) {
    this.selectedRating = rating;
  }
  constructor() { }
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  add_img: any[] = [];

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
          this.add_img.push({ url: reader.result as string });
        };

        reader.readAsDataURL(file);
      });
    }
  }

  ngOnInit() { }

}
