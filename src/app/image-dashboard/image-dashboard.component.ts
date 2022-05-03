import { ApiService } from '../shared/api.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageModel } from './image-dashboard.model';


@Component({
  selector: 'app-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})
export class ImageDashboardComponent implements OnInit {
  formValue !: FormGroup;
  ImageModelObj : ImageModel = new ImageModel();
  employeeData !: any;
  showAdd : boolean | undefined;
  showUpdate: boolean | undefined;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title : [''],
      url : [''],
      description : [''],
      dimensions : [''],
    })
    this.getAllImages();
  }
  clickAddImage(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postImageDetails(){
    this.ImageModelObj.title = this.formValue.value.title;
    this.ImageModelObj.url = this.formValue.value.url;
    this.ImageModelObj.description = this.formValue.value.description;
    this.ImageModelObj.dimensions = this.formValue.value.dimensions;
  
    this.api.postImage(this.ImageModelObj)
    .subscribe(res => {
      console.log(res);
      // alert("Image Added Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllImages();
    }, err =>{
      alert("Something went wrong")
    })
  }
  getAllImages(){
    this.api.getTheImage()
    .subscribe(res =>{
      this.employeeData = res;
    })
  }
  deleteImage(row : any){
    this.api.deleteImage(row.id)
    .subscribe(res => {
      // alert("Image Deleted")
      this.getAllImages()
    })
  }
  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.ImageModelObj.id = row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['url'].setValue(row.url);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['dimensions'].setValue(row.dimensions);
  }
  updateImageDetails(){
    this.ImageModelObj.title = this.formValue.value.title;
    this.ImageModelObj.url = this.formValue.value.url;
    this.ImageModelObj.description = this.formValue.value.description;
    this.ImageModelObj.dimensions = this.formValue.value.dimensions;
   
    this.api.updateImage(this.ImageModelObj, this.ImageModelObj.id)
    .subscribe(res =>{
      // alert("Updated Successfully");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllImages();
    })
  }

  
}
