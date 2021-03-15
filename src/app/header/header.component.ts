import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = 'Scan & Verify | Sproxil Authentication';
  @Input() metaDescription =
    'Welcome to Sproxil Authentication | Scan & Verify App';
  constructor(private _title: Title, private _meta: Meta) {}

  ngOnInit() {
    this._title.setTitle(this.title);
    this._meta.addTags([
      { name: 'description', content: this.metaDescription },
      { name: 'keywords', content: `${this.title}, ${this.metaDescription}` },
    ]);
  }

  openModal() {
    console.log('openModal clicked');
  }
}
