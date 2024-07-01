import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {

  eForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.eForm = this.formBuilder.group({
      email_new: ['', [Validators.required, Validators.email]],
    })

  }

  ngOnInit() { }
  onSubmit() {
    if (this.eForm.valid) {
      const formData = this.eForm.value;
      console.log(formData);
      this.router.navigate(['/login']);
      this.eForm.reset()
    }
  }
}
