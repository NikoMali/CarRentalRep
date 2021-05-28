import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})


export class OffersComponent implements OnInit {
  title = 'appBootstrap';
  ChosenCarForm!: FormGroup;
  closeResult = "";
  carRentList = [
    {
     id: "1",
     pickUpLocation: "Aiman",
     ReturnLocation: "Rahmat", 
     pickedDateTime: "aimanrahmat",
     returnDateTime: "aimanrahmat@gmail.com",
     email: "aimanrahmat@gmail.com",
     phone: "aimanrahmat@gmail.com"
    },
    {
      id: "2",
      pickUpLocation: "Aiman2",
      ReturnLocation: "Rahmat", 
      pickedDateTime: "aimanrahmat",
      returnDateTime: "aimanrahmat@gmail.com",
      email: "aimanrahmat@gmail.com",
      phone: "aimanrahmat@gmail.com"
    },
    {
     id: "12",
     pickUpLocation: "Aiman3",
     ReturnLocation: "Rahmat", 
     pickedDateTime: "aimanrahmat",
     returnDateTime: "aimanrahmat@gmail.com",
     email: "aimanrahmat@gmail.com",
     phone: "aimanrahmat@gmail.com"
    }];

  constructor(private modalService: NgbModal,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ChosenCarForm = this.fb.group({
      pickUpLocation: [''],
      ReturnLocation: [''],
      pickedDateTime: [''],
      returnDateTime: ['']
     });
  }

  open(content: any, carRent:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(reason);
    });

    this.ChosenCarForm.patchValue({
      pickUpLocation: carRent.pickUpLocation,
      ReturnLocation: carRent.ReturnLocation,
      pickedDateTime: carRent.pickedDateTime,
      returnDateTime: carRent.returnDateTime
     });

     console.log(this.ChosenCarForm);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSubmit() {
    this.modalService.dismissAll();
    console.log("res:", this.ChosenCarForm.getRawValue());
   }

}
