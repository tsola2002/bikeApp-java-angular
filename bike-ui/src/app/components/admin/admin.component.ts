import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public bikes;

  constructor(private BikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.BikeService.getBikes().subscribe(
      data => { this.bikes = data },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
