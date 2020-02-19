import { Component, OnInit, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef, private route:Router) { } @HostListener('input') oninput() {
    
    

    

    this.searchItems();

  }

  ngOnInit() {

    for (let i = 1; i <= 100; i++) {
      this.elements.push({
        id: i.toString(), first: 'Name ' + i, last: 'Last ' + i, handle: 'Handle ' + i
      });
    }

    this.mdbTable.setDataSource(this.elements);
    this.elements = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
    
  }

  /* =================
        Chart 1
    ==================*/
  public chart1Type: string = 'line';

  public chart1Datasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chart1Colors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chart1Options: any = {
    responsive: true
  };
  public chart1Clicked(e: any): void { }
  public chart1Hovered(e: any): void { }

  /* =================
        Chart 2
    ==================*/

  public chart2Type: string = 'doughnut';

  public chart2Datasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public chart2Labels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chart2Colors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chart2Options: any = {
    responsive: true
  };
  public chart2Clicked(e: any): void { }
  public chart2Hovered(e: any): void { }


  /* =================
          Table
    ==================*/

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  elements: any = [];
  headElements = ['ID', 'First', 'Last', 'Handle'];
  searchText: string = '';
  previous: string;

  

  searchItems() {
    const prev =
      this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous); this.elements =
        this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements =
        this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

  ngAfterViewInit() {
    
  }

  viewUserProfile(){
    this.route.navigate(['/profile']);
  }

}







