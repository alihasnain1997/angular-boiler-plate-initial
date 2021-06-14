import { Component, Input ,OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: '<%= dasherize(name) %>-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  validateForm!: FormGroup;
  @Input() listOfData: any;
  


  isVisible = false;
  isOkLoading = false;
  // employeeSubscription: Subscription
  // person = {
  //   name: '',
  //   key: '',
  //   age: '',
  //   address: ''

  // }
  // listOfData: Person[] = []
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
    });
  }

  ngOnDestroy() {
    // this.employeeSubscription.unsubscribe();
  }

  deleteEmp(key: String) {
    // this.employeeService.purgeEmployee(key)
  }


  showModal(data: any): void {
    console.log(data)
    this.isVisible = true;
    this.validateForm.patchValue({
      name: data.name,
    })
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
