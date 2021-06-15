import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../../shared/model/question-base';
import { QuestionControlService } from '../../../shared/service/question-control.service';

@Component({
  selector: '<%= dasherize(name) %>-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class <%= classify(name) %>DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase < string > [] | null =[];
  form!: FormGroup;
  @Input() data;

  @Output() closeForm = new EventEmitter();
  @Output() saveForm = new EventEmitter();

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[],this.data);
  }

  onSubmit() {

    const <%= dasherize(name) %> = { ...this.form.value }
    this.data ? <%= dasherize(name) %> ['id'] = this.data.id : ''

    if (this.form.valid) {
      this.saveForm.emit(<%= dasherize(name) %>)
      this.closeForm.emit();
    } 
  }
  onClose() {
    this.closeForm.emit();
  }
}


