import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>-service';
import { <%= classify(name) %>QuestionService } from '../<%= dasherize(name) %>-form.service';
import { QuestionBase } from '../../../shared/model/question-base';
import { Observable } from 'rxjs';



@Component({
  selector: '<%= dasherize(name) %>-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  questions$: Observable<QuestionBase<any>[]>;

  validateForm!: FormGroup;
  tableData;
  isVisible = false;
  isOkLoading = false;

  constructor(private fb: FormBuilder,
    private <%= camelize(name) %>Service: <%= classify(name) %>Service,
    service: <%= classify(name) %>QuestionService) {
      this.questions$ = service.getQuestions();
     }

  ngOnInit(): void {
    this.<%= camelize(name) %>Service.findAll().subscribe(res => {
      this.tableData = res
      this.initForm()
    })
  }

  initForm() {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnDestroy() {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    const data = this.validateForm.value
    if (this.validateForm.valid) {
      this.isOkLoading = true;
      this.<%= camelize(name) %>Service.create(data).subscribe(res => {
        console.log("Added data to server")
        this.isVisible = false;
        this.isOkLoading = false;
      })
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
