import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  constructor(private service: ServiceService) { }
  data!: string;
  str = ["Race", "Part", "Heart", "Listen"]

  ngOnInit(): void {
  }

  anagram() {
    if (!this.data) {
      return;
    }

    const index = this.str.findIndex(
      (e) => e.split('').sort().join('') === this.data.split('').sort().join('')
    );
    if (index > -1) {
      this.service.getData.next(true);
    } else if (index === -1) {
      this.service.getData.next(false);
    }
  }

}
