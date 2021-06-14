import { DropdownQuestion } from '../../shared/model/question-dropdown';
import { TextboxQuestion } from '../../shared/model/question-textbox';
import { RadioQuestion } from '../../shared/model/question-radio';


export const formQuestions = [
    new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
    }),

    new RadioQuestion({
        key: 'gender',
        label: 'Gender',
        options: [
            { key: 'male', value: 'male' },
            { key: 'female', value: 'femal' },
        ],
        required:true,
        order: 5
    }),

    new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        required: true,
        order: 1,
        minLength:3
    }),

    new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
    }),
    new TextboxQuestion({
        key: 'age',
        label: 'Age',
        type: 'number',
        order: 4,
        required: true
    })
];
