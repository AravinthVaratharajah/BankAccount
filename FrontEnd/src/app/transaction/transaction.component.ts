import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  form;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      amount: ['', [Validators.required], [Validators.min(0)]],
      radioControl: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.form);
    console.log(this.form.invalid);

    if (this.form.invalid) {
      return;
    }

    alert('Success!')
  }

}