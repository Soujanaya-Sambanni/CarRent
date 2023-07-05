import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform !: FormGroup;

  constructor(private formbuilder:FormBuilder, private auth:AuthService, private router: Router){}

  ngOnInit(): void{
    this.loginform = this.formbuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  onSubmit(){

    if (this.loginform.valid) {
      this.auth.login(this.loginform.value).subscribe({
        next: (result) => {
          // console.log(result);
          this.router.navigate(['/admin']);
        },
        error: (err) => {
          alert(err);
          
        }
      });
    }
  }

}
