import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input('title') titleFromApp: string = '';
  @Input('activeUsers') activeUsers: { name: string; age: boolean }[] = [];
  @Output() onChildOutput = new EventEmitter<boolean>();

  isActive = false;
  inputValue = 'Hello';

  ngOnInit() {
    console.log('navigation -> init');
  }

  ngAfterViewInit() {
    console.log('navigation -> AFter View Init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  handleClick(event: Event, ...args: number[]): void {
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive);
  }
}
