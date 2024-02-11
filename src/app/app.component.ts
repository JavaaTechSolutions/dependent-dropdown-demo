import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DropdownService } from './service/dropdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dependent-dropwown-demo';
  public loading = false;
  public dropdownForm! : FormGroup;
  public countries: any[] = [];
  public states: any[] = [];
  public cities: any[] = [];

  constructor(private dropdownService: DropdownService,
    private formBuilder: FormBuilder) {
    }

  ngOnInit(): void {
    this.dropdownForm = this.formBuilder.group({
      country: [null],
      state: [null],
      city: [null]
    });

    this.getCountries();
  }

  private getCountries() {
    this.loading = true;
   
    this.dropdownService.getCountries().subscribe(
      (res) => {
        console.log(res);
        this.countries = res;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    )
  }

  public selectCountry(country: any) {
    if (!country) {
      this.dropdownForm.controls['state'].setValue('');
      this.dropdownForm.controls['city'].setValue('');
      this.states = [];
      this.cities = [];
      return;
    }

    this.loading = true;
    const countryId = parseInt(country);
    this.dropdownService.getStates(countryId).subscribe(
      (res) => {
        this.states = res;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    )
  }

  public selectState(state: any) {
    if (!state) {
      this.dropdownForm.controls['city'].setValue('');
      this.cities = [];
      return;
    }
    
    this.loading = true;
    const stateId = parseInt(state);
    this.dropdownService.getCities(stateId).subscribe(
      (response) => {
        this.cities = response;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }
 
}
