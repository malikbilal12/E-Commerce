import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: any[] = []
  login: any = 'login'
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.regForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

  }

  ngOnInit() {
    this.login = 'login'
    this.updateValidators();
  }
  goTologin() {
    this.login = 'reg'
    this.updateValidators();
  }
  goToreg() {
    this.login = 'login'
    this.updateValidators();
  }
  onSubmit() {
    if (this.regForm.valid) {
      const formData = this.regForm.value;
      if (this.login == 'login') {
        this.users.push({ name: formData.name, email: formData.email, password: formData.password });
        console.log('User registered:', formData);
        this.restForm()
      } else if (this.login == 'reg') {
        const matchedUser = this.users.find(user =>
          user.email === formData.email && user.password === formData.password
        );

        if (matchedUser) {
          console.log('Login successful');
          this.router.navigate(['/home']);
        } else {
          alert('Invalid email or password');
        }
      }
    } else {
      alert('Please fill all fields');
    }
  }
  restForm() {
    this.regForm.reset();
    this.login = 'reg'
    if (this.login === 'reg') {
      this.regForm.get('name')?.clearValidators();
    } else {
      this.regForm.get('name')?.setValidators([Validators.required]);
    }
    this.regForm.get('name')?.updateValueAndValidity();

  }
  public updateValidators() {
    if (this.login == 'reg') {
      this.regForm.get('name')?.clearValidators();
      this.regForm.get('name')?.updateValueAndValidity();
    } else {
      this.regForm.get('name')?.setValidators([Validators.required]);
      this.regForm.get('name')?.updateValueAndValidity();
    }
  }
}
