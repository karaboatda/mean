import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.scss']
})
export class InternsComponent implements OnInit {

  constructor(private internService: InternService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this.internService.getAllProfiles().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
