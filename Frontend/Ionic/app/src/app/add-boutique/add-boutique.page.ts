import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.page.html',
  styleUrls: ['./add-boutique.page.scss'],
})
export class AddBoutiquePage implements OnInit {
  private boutique : FormGroup;
  public api : RestService;

  constructor(
    public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.boutique = this.formBuilder.group({
            title: [''],
            description: ['']
          });
      this.api = restapi;
  }

  async saveBoutique(){
    await this.api.createBoutique(this.boutique.value)
    .subscribe(res => {
        this.router.navigate(['/boutiques']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.boutique.value);
    this.saveBoutique();

  }

  ngOnInit() {

  }

}
