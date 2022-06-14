import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-set-game',
  templateUrl: './set-game.component.html',
  styleUrls: ['./set-game.component.css'],
})
export class SetGameComponent implements OnInit {
  public signUpForm!: FormGroup;
  public archivos: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      id: [''],
      name: [''],
      img: [''],
      price: [''],
      descri: [''],
      imgDescri: [''],
      imgDetalle: [''],
      imgBase64: [''],
      link: [''],
    });
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/games', this.signUpForm.value)
      .subscribe(
        (response) => {
          alert('Juego guardado correctamente');
          this.signUpForm.reset();
          this.router.navigate(['']);
        },
        (error) => {
          alert('Algo ha ido mal');
        }
      );
  }
  fileEvent(event: any) {
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const { imgBase64 } = this.signUpForm.controls;
      imgBase64.setValue(reader.result);
    };
  }
}
