import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/services/HouseService/house.service';
import { house } from 'src/types/house';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  houses: house[] = [];

  constructor(private houseService: HouseService) {}

  ngOnInit() {
    this.houses=this.houseService.getAllHouses();
  }

  updateData(){
    this.houses=this.houseService.getAllHouses();
  }

  deleteHouse(id:number){
    this.houseService.deleteHouseById(id);
    this.houses.splice(this.houses.findIndex(houseData=>houseData.id==id))
  }
}