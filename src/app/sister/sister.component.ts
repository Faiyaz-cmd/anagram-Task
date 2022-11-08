import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sister',
  templateUrl: './sister.component.html',
  styleUrls: ['./sister.component.css']
})
export class SisterComponent implements OnInit {

  constructor(private service: ServiceService) { }
  values = ["Race", "Part", "Heart", "Listen"];
  data!:boolean
  ngOnInit(): void {
    this.service.returnData().subscribe((res) => {
      console.log(res);
      this.data = res
    });
  }

  }
