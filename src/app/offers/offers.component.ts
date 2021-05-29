import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import CarRentData from '../../assets/data.json'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})


export class OffersComponent implements OnInit {
  title = 'appBootstrap';
  ChosenCarForm!: FormGroup;
  closeResult = "";
  isUpdateData: boolean = false;
  public browserLang: any;
  carRentList: any;


  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private translate: TranslateService) { 
      translate.onLangChange.subscribe(lang=>{
        this.browserLang = lang;
        this.carRentList = CarRentData[this.browserLang.lang];
        this.isUpdateData = true;
      })
      
    }

  ngOnInit(): void {
    this.ChosenCarForm = this.fb.group({
      pickUpLocation: [''],
      ReturnLocation: [''],
      pickedDateTime: [''],
      returnDateTime: ['']
     });
    
     if (!this.isUpdateData) {
       this.carRentList = CarRentData[this.translate.currentLang];
     }

     //this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      //this.browserLang = event.lang
     // console.warn(event);
    //});
     
     
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
