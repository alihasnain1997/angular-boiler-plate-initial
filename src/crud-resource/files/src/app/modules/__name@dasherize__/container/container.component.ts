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
  data = null
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

    this.<%= camelize(name) %>Service.findAll();
    this.<%= camelize(name) %>Service.<%= camelize(name) %>State$.subscribe(res => {
      this.tableData = res
    })
  }


  cancelForm() {
    this.handleCancel()
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  add(data) {
    this.<%= camelize(name) %>Service.create(data).subscribe(res => {
      this.<%= camelize(name) %>Service.findAll();
    },
      err => {
        console.log("error", err)
      },
      () => {
        this.handleCancel()
        // this.getBooks();
      })
  }
  searchById(id) {
    this.<%= camelize(name) %>Service.findOne(id);
  }
  
  clearFilter() {
    this.<%= camelize(name) %>Service.findAll();
  }


}
