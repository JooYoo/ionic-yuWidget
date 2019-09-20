import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  code_withText=`
<yu-button class="btn--small">Text</yu-button>
<yu-button class="btn--medium">Text</yu-button>
<yu-button class="btn--large">Text</yu-button>`

  code_colors=`
<yu-button class="btn--medium color--primary">Text</yu-button>
<yu-button class="btn--medium color--easy">Text</yu-button>
<yu-button class="btn--medium color--stress">Text</yu-button>
<yu-button class="btn--medium color--relax">Text</yu-button>
<yu-button class="btn--medium color--attention">Text</yu-button>`

  constructor() { }

  ngOnInit() {
  }

}
