import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../../shared/model/question-dropdown';
import { QuestionBase } from '../../shared/model/question-base';
import { TextboxQuestion } from '../../shared/model/question-textbox';
import { of } from 'rxjs';
import { formQuestions } from './<%= dasherize(name) %>-questions';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = formQuestions;
    // [
    //   new DropdownQuestion({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       { key: 'solid', value: 'Solid' },
    //       { key: 'great', value: 'Great' },
    //       { key: 'good', value: 'Good' },
    //       { key: 'unproven', value: 'Unproven' }
    //     ],
    //     order: 3
    //   }),

    //   new TextboxQuestion({
    //     key: 'firstName',
    //     label: 'First name',
    //     value: 'Bombasto',
    //     required: true,
    //     order: 1
    //   }),

    //   new TextboxQuestion({
    //     key: 'emailAddress',
    //     label: 'Email',
    //     type: 'email',
    //     order: 2
    //   }),
    //   new TextboxQuestion({
    //     key: 'age',
    //     label: 'Age',
    //     type: 'number',
    //     order: 4
    //   })
    // ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
