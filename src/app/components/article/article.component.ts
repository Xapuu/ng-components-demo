import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'note-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnChanges {

  @Input() article;
  @Output() deleteArticleEmitter: EventEmitter<any> = new EventEmitter();

  counter = 1;
  limit = 0;
  hide = false;
  displayImage = false;
  constructor() { }

  ngOnChanges() {
    this.counter = 1;
    this.limit = 0;
    this.hide = false;
    this.displayImage = false;
  }
  trunc(string) {
    if (string) {
      return string.slice(0, (this.counter - 1) * 250);
    }
  }
  readMore() {
    this.limit = Math.ceil(this.article.text.length / 250);
    if (this.limit === this.counter) {
      this.hide = true;
    }
    console.log(this.limit);
    this.counter = this.counter + 1;
  }
  hideText() {
    this.hide = false;
    this.counter = 1;
  }

  hideImage() {
    this.displayImage = false;
  }

  showImage() {
    this.displayImage = true;
  }

  deleteArticle(targetId: number): void {
    this.deleteArticleEmitter.emit(targetId);
  }
}
