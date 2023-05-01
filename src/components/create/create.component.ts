import { Component, Optional } from '@angular/core';
import { HouseService } from 'src/services/HouseService/house.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { house } from 'src/types/house';
import { owner } from 'src/types/owner';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  houseForm: FormGroup;
  toastError: boolean = false;
  sucess: boolean = false;


  constructor(private fb: FormBuilder,
    @Optional() private house: house,private houseService: HouseService) {
    this.houseForm = this.fb.group({
      name: [''],
      owner: [''],
      address: [''],
      city: [''],
      state: [''],
      zip: [''],
    })
  }

  onSubmit() {
      const formData = this.houseForm.value;
      let transitOwner= new owner(1,formData.owner)
      this.house= new house(1, formData.name,formData.address,transitOwner,formData.city,formData.state,formData.zip);
      console.log(this.house);


      this.houseService.createHouse(this.house).subscribe(response => {
        // Traiter la réponse du serveur ici
        console.log('House created:', response);
        this.sucess=true;
        
      }, error => {
        // Traiter les erreurs ici
        console.error('Failed to create house:', error);
        this.toastError = true;
        console.log(this.toastError);
      });
  }
  closeAlert(){
    this.toastError= false;
    this.sucess=false;
  }
}
