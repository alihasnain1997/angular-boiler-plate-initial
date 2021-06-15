import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: '<%= dasherize(name) %>-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() search = new EventEmitter();
  @Output() clear = new EventEmitter();

  id;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    this.search.emit(this.id)
  }

  onClear(){
    this.id =''
    this.clear.emit()
  }

}
