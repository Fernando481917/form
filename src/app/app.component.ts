import { Component } from '@angular/core';
import { ApiService } from '../app/services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {}

  postDataToApi() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const postData = { producto: 'holas soy un post', email: this.email, password: this.password };
    this.apiService.postDataToApi(postData).subscribe(response => {
      console.log(response);
      alert('Se han llenado los datos correctamente');
    });
  }

}
