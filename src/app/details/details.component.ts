import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public selectedImage : any;

  constructor(private route: ActivatedRoute, private api: ApiService) { 
  }

  ngOnInit(): void {
    this.getImage(this.route.snapshot.paramMap.get('id'));
  }


  getImage(id:any){
    this.api.getTheImage()
    .subscribe(res =>{
      console.log(res);
      this.selectedImage = res.find((element: any) => element.id == id);
      console.log(this.selectedImage);
    })
  }

}
