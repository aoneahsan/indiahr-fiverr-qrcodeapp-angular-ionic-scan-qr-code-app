import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = 'Scan & Verify | Sproxil Authentication';
  @Input() metaDescription =
    'Welcome to Sproxil Authentication | Scan & Verify App';
  constructor(
    private _title: Title,
    private _meta: Meta,
    private _router: Router
  ) {}

  ngOnInit() {
    this._title.setTitle(`${this.title} | Zaions.com`);
    this._meta.addTags([
      {
        name: 'description',
        content: `${this.metaDescription}, ${this.title} | Zaions.com`,
      },
      { name: 'keywords', content: `${this.title}, ${this.metaDescription}` },
    ]);
  }

  openUrl(url, isRouterLink) {
    if (isRouterLink) {
      this._router.navigate([url]);
    } else {
      window.open(url, '_blank');
    }
  }
}
