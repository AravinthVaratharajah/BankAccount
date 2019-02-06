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
  radioItems: Array<string>;
  model = {option: 'Deposit'};

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      amount: ['', Validators.compose([Validators.required, Validators.min(0)])]
    });
    this.radioItems = ['Deposit', 'Withdraw'];
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      // TODO : call back end
      return;
    }

    alert('Success!')
  }

}