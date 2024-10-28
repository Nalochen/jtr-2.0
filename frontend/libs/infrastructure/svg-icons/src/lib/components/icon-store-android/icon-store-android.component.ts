import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AbstractIconComponent } from '../abstract-icon';

@Component({
  selector: 'svg-icon-store-android',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styleUrls: ['./../general-styles.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconStoreAndroidComponent extends AbstractIconComponent {
  protected override rawIcon = `<svg id="artwork" x="0px" y="0px"
     viewBox="0 0 135 40" style="enable-background:new 0 0 135 40;">
<style type="text/css">
.st0{fill:#A6A6A6;}
    .st1{fill:#FFFFFF;}
    .st2{fill:#01CBFF;}
    .st3{fill:#FFC501;}
    .st4{fill:#EB2B4F;}
    .st5{fill:#00ED76;}
    .st6{fill:#FFFFFF;stroke:#FFFFFF;stroke-width:0.2;stroke-miterlimit:10;}
</style>
    <g>
<path d="M130,40H5c-2.8,0-5-2.2-5-5V5c0-2.8,2.2-5,5-5h125c2.8,0,5,2.2,5,5v30C135,37.8,132.8,40,130,40z"/>
</g>
    <path class="st0" d="M130,0.8c2.3,0,4.2,1.9,4.2,4.2v30c0,2.3-1.9,4.2-4.2,4.2H5c-2.3,0-4.2-1.9-4.2-4.2V5c0-2.3,1.9-4.2,4.2-4.2
H130 M130,0H5C2.2,0,0,2.3,0,5v30c0,2.8,2.2,5,5,5h125c2.8,0,5-2.2,5-5V5C135,2.3,132.8,0,130,0L130,0z"/>
    <g>
<polygon class="st1" points="123.7,22 121.6,27.4 121.5,27.4 119.3,22 117.3,22 120.6,29.6 118.7,33.8 120.7,33.8 125.8,22 "/>
        <path class="st1" d="M68.1,21.8c-2.4,0-4.3,1.8-4.3,4.3c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.3-1.8,4.3-4.3
C72.4,23.5,70.5,21.8,68.1,21.8z M68.1,28.6c-1.3,0-2.4-1.1-2.4-2.6c0-1.5,1.1-2.6,2.4-2.6c1.3,0,2.4,1,2.4,2.6
C70.5,27.5,69.4,28.6,68.1,28.6z"/>
        <path class="st1" d="M58.8,21.8c-2.4,0-4.3,1.8-4.3,4.3c0,2.4,1.9,4.3,4.3,4.3c2.4,0,4.3-1.8,4.3-4.3
C63.1,23.5,61.2,21.8,58.8,21.8z M58.8,28.6c-1.3,0-2.4-1.1-2.4-2.6c0-1.5,1.1-2.6,2.4-2.6c1.3,0,2.4,1,2.4,2.6
C61.2,27.5,60.1,28.6,58.8,28.6z"/>
        <path class="st1" d="M47.7,23.1v1.8h4.3c-0.1,1-0.5,1.8-1,2.3c-0.6,0.6-1.6,1.3-3.3,1.3c-2.7,0-4.7-2.1-4.7-4.8s2.1-4.8,4.7-4.8
c1.4,0,2.5,0.6,3.3,1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8c-3.6,0-6.7,3-6.7,6.6c0,3.6,3.1,6.6,6.7,6.6c2,0,3.4-0.6,4.6-1.9
c1.2-1.2,1.6-2.9,1.6-4.2c0-0.4,0-0.8-0.1-1.1H47.7z"/>
        <path class="st1" d="M113.4,21.7c-1.4,0-2.8,0.6-3.3,1.9l1.7,0.7c0.4-0.7,1-0.9,1.7-0.9c1,0,1.9,0.6,2,1.6v0.1
c-0.3-0.2-1.1-0.5-1.9-0.5c-1.8,0-3.6,1-3.6,2.8c0,1.7,1.5,2.8,3.1,2.8c1.3,0,1.9-0.6,2.4-1.2h0.1v1h1.8v-4.8
C117.2,23,115.5,21.7,113.4,21.7z M113.2,28.6c-0.6,0-1.5-0.3-1.5-1.1c0-1,1.1-1.3,2-1.3c0.8,0,1.2,0.2,1.7,0.4
C115.2,27.8,114.2,28.6,113.2,28.6z"/>
        <path class="st1" d="M101.8,17.5h-4.5V30h1.9v-4.7h2.6c2.1,0,4.1-1.5,4.1-3.9S103.9,17.5,101.8,17.5z M101.9,23.5h-2.7v-4.3h2.7
c1.4,0,2.2,1.2,2.2,2.1C104,22.4,103.2,23.5,101.9,23.5z"/>
        <path class="st1" d="M93.1,24.5c-0.4-1-1.4-2.7-3.6-2.7c-2.2,0-4,1.7-4,4.3c0,2.4,1.8,4.3,4.2,4.3c1.9,0,3.1-1.2,3.5-1.9l-1.4-1
c-0.5,0.7-1.1,1.2-2.1,1.2c-1,0-1.6-0.4-2.1-1.3l5.7-2.4L93.1,24.5z M87.3,25.9c0-1.6,1.3-2.5,2.2-2.5c0.7,0,1.4,0.4,1.6,0.9
L87.3,25.9z"/>
        <rect x="106.9" y="17.5" class="st1" width="1.9" height="12.5"/>
        <path class="st1" d="M79.6,22.7L79.6,22.7c-0.5-0.5-1.3-1-2.3-1c-2.1,0-4.1,1.9-4.1,4.3c0,2.4,1.9,4.2,4.1,4.2c1,0,1.8-0.5,2.2-1
h0.1v0.6c0,1.6-0.9,2.5-2.3,2.5c-1.1,0-1.9-0.8-2.1-1.5l-1.6,0.7c0.5,1.1,1.7,2.5,3.8,2.5c2.2,0,4-1.3,4-4.4V22h-1.8V22.7z
 M77.4,28.6c-1.3,0-2.4-1.1-2.4-2.6c0-1.5,1.1-2.6,2.4-2.6c1.3,0,2.3,1.1,2.3,2.6C79.7,27.5,78.7,28.6,77.4,28.6z"/>
        <rect x="82.6" y="17.5" class="st1" width="1.9" height="12.5"/>
</g>
    <g>
<path class="st2" d="M10.4,7.5C10.1,7.8,10,8.3,10,8.9v22.1c0,0.6,0.2,1.1,0.5,1.4l0.1,0.1l12.4-12.4V20v-0.1L10.4,7.5L10.4,7.5z"
    />
        <path class="st3" d="M27,24.3l-4.1-4.1V20v-0.1l4.1-4.1l0.1,0.1l4.9,2.8c1.4,0.8,1.4,2.1,0,2.9L27,24.3L27,24.3z"/>
        <path class="st4" d="M27.1,24.2L22.9,20L10.4,32.5c0.5,0.5,1.2,0.5,2.1,0.1L27.1,24.2"/>
        <path class="st5" d="M27.1,15.8L12.5,7.5c-0.9-0.5-1.6-0.4-2.1,0.1L22.9,20L27.1,15.8z"/>
</g>
    <g>
<path class="st6" d="M43,13.1c-0.4,0-0.8-0.1-1.1-0.4c-0.3-0.2-0.5-0.6-0.7-1l0.7-0.3c0.2,0.6,0.5,0.9,1.1,0.9
c0.4,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.9V7h0.8v4.1c0,0.7-0.2,1.2-0.5,1.5C44,13,43.6,13.1,43,13.1z"/>
        <path class="st6" d="M49.7,7.7H47v1.9h2.5v0.7H47v1.9h2.7V13h-3.5V7h3.5V7.7z"/>
        <path class="st6" d="M53,13h-0.8V7.7h-1.7V7h4.1v0.7H53V13z"/>
        <path class="st6" d="M55.3,13v-0.8l3.2-4.5h-3.1V7h4v0.8l-3.2,4.5h3.2V13H55.3z"/>
        <path class="st6" d="M62.5,13h-0.8V7.7h-1.7V7h4.1v0.7h-1.7V13z"/>
        <path class="st6" d="M67.2,13V7h2.2c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.5,0.7,0.5,1.2c0,0.3-0.1,0.5-0.2,0.8
c-0.1,0.2-0.3,0.4-0.6,0.5v0c0.3,0.1,0.5,0.3,0.7,0.5c0.2,0.2,0.3,0.5,0.3,0.9c0,0.5-0.2,0.9-0.5,1.2C70.4,12.8,70,13,69.5,13H67.2
z M68,9.6h1.4c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.6S70.3,8.2,70.1,8c-0.2-0.2-0.4-0.3-0.7-0.3H68V9.6z M68,12.3h1.6
c0.3,0,0.5-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7c0-0.2-0.1-0.5-0.3-0.7c-0.2-0.2-0.4-0.3-0.7-0.3H68V12.3z"/>
        <path class="st6" d="M75.9,7.7h-2.7v1.9h2.5v0.7h-2.5v1.9h2.7V13h-3.5V7h3.5V7.7z"/>
        <path class="st6" d="M77.1,13V7h0.8v6H77.1z"/>
</g>
</svg>
`;
}
