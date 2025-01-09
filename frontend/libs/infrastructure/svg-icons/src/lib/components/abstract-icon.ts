import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Color, colorMap } from '../models/color.model';
import { AspectRatioService } from '../services/aspect-ratio.service';

const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;
const defaultColor = '#b4b4b4';

@Component({ template: '' })
export abstract class AbstractIconComponent implements OnInit, OnChanges {
  @Input() public color: Color | undefined | null;

  protected rawIcon = '';
  protected defaultColor: Color = defaultColor;

  @HostBinding('class.svg-icon')
  protected readonly isSvgIcon: boolean = true;

  @HostBinding('style.aspect-ratio')
  protected aspectRatio: string | undefined;

  @HostBinding('style.background-image')
  private background: SafeStyle = '';

  private initialized = false;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly aspectRatioService: AspectRatioService
  ) {}

  public ngOnInit(): void {
    this.rawIcon = this.addNameSpace(this.rawIcon);
    this.aspectRatio =
      this.aspectRatio ?? this.aspectRatioService.extract(this.iconString);
    this.setVariables();

    this.initialized = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      this.setVariables();
    }
  }

  public setVariables(): void {
    const iconString = this.replaceVariables(this.iconString);
    const encodedIcon = this.getEncodedSVG(iconString);

    this.setBackground(`url("data:image/svg+xml,${encodedIcon}")`);
  }

  protected getEncodedSVG(iconString: string): string {
    return this.encodeSVG(iconString);
  }

  protected get iconString(): string {
    return this.rawIcon;
  }

  protected replaceVariables(iconString: string): string {
    if (!this.color) {
      return iconString;
    }

    return iconString.replace(
      /color-placeholder/gi,
      this.getColor(this.color).substring(1)
    );
  }

  public getColor(color: Color): string {
    if (color === undefined || color === null || color === '') {
      return this.defaultColor;
    }

    if (color[0] === '#') {
      return color as string;
    }

    return this.getHexForColorName(String(color)) ?? String(this.defaultColor);
  }

  public encodeSVG(data: string): string {
    data = data.replace(/"/g, "'");

    data = data.replace(/>\s{1,}</g, '><');
    data = data.replace(/\s{2,}/g, ' ');

    return data.replace(symbols, encodeURIComponent);
  }

  private addNameSpace(data: string): string {
    if (data.indexOf('http://www.w3.org/2000/svg') < 0) {
      data = data.replace(/<svg/g, '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    return data;
  }

  private getHexForColorName(colorName: string): string | null {
    colorName = colorName.replace(/_/gi, '-');
    // @ts-expect-error colorMap is abstract
    const hexValue = colorMap[colorName];

    if (hexValue !== undefined) {
      return hexValue;
    }

    switch (colorName) {
      case 'transparent':
        return '#ffffff00';
      default:
        return null;
    }
  }

  protected setBackground(background: string): void {
    this.background = this.sanitizer.bypassSecurityTrustStyle(background);
  }
}
