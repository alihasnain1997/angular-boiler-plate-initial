import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../../../../shared/model/question-base';

@Component({
  selector: '<%= dasherize(name) %>-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class <%= classify(name) %>DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}


