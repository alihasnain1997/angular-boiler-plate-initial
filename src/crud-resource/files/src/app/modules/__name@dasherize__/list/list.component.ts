import { Component, Input ,OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { <%= classify(name) %>QuestionService } from '../<%= dasherize(name) %>-form.service';
import { QuestionBase } from '../../../shared/model/question-base';
import { Observable } from 'rxjs';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>-component.service';

@Component({
  selector: '<%= dasherize(name) %>-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listOfData: any;
  questions$: Observable<QuestionBase<any>[]>;

  data;



  isVisible = false;
  isOkLoading = false;

  constructor(private <%= camelize(name) %>Service: <%= classify(name) %>Service,
  service: <%= classify(name) %>QuestionService) {
    this.questions$ = service.getQuestions();
   }

  ngOnInit(): void {
  }

  purge(data) {
    this.<%= camelize(name) %>Service.delete(data.id).subscribe(res=>{
      console.log(res)
      this.<%= camelize(name) %>Service.findAll();
    })
  }
  


  showModal(data: any): void {
    this.data = data
    this.isVisible = true;
  }

  handleOk(data): void {
    this.isOkLoading = true;
    this.<%= camelize(name) %>Service.update(data).subscribe(res => {
      console.log(res)
      this.isVisible = false;
      this.isOkLoading = false;
      this.<%= camelize(name) %>Service.findAll();
    })
  }

  cancelForm() {
    this.handleCancel()
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
