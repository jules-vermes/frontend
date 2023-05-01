import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { house } from 'src/types/house';


@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) {
  }

  createHouse(house: house) {
    // Faire une requête HTTP pour envoyer les données du formulaire
    return this.http.post('http://localhost:8080/house', house);
  }

  getAllHouses() {
    var houses: house[] = [];
    this.http.get<any[]>('http://localhost:8080/allHouses').subscribe(data => {
      data.map(houseData => houses.push(new house(houseData.id, houseData.name, houseData.adresse, houseData.owner, houseData.city, houseData.state, houseData.zip)))
    });
    console.log(houses)
    return houses;
  }

  deleteHouseById(id: number) {
    this.http.delete('http://localhost:8080/house?id=' + id).subscribe(() => {
      console.log("Maison " + id + " supprimée avec succès")
    }
    )
  }

}
