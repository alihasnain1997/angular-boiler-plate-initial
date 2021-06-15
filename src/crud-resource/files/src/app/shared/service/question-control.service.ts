import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../model/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[],data=null ) {
    const group: any = {};

    if (!data) {
      questions.forEach(question => {
        if (question.required) {
          group[question.key] = new FormControl(question.value || '', Validators.required)
        }
        else {
          group[question.key] = new FormControl(question.value || '')
        }
        // group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        //                                         : new FormControl(question.value || '');
      });
    }
    else {
      questions.forEach(question => {
        console.log(data[question.key])
        if (question.required) {
          group[question.key] = new FormControl(data[question.key] || '', Validators.required)
        }
        else {
          group[question.key] = new FormControl(data[question.key] || '')
        }
        // group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        //                                         : new FormControl(question.value || '');
      });
    }
    return new FormGroup(group);
  }
}

