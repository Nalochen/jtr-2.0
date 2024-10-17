import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AspectRatioService {
  private readonly xmlParser: DOMParser = new DOMParser();

  public extract(svg: string): string | undefined {
    if (svg === '') {
      return;
    }

    const parsedXml = this.xmlParser.parseFromString(svg, 'application/xml');

    const svgNode = parsedXml.querySelector('svg[viewBox]:first-of-type');
    const viewBox = svgNode?.getAttribute('viewBox')?.split(' ');

    if (viewBox && viewBox.length === 4) {
      return `${viewBox[2]} / ${viewBox[3]}`;
    }
    return 'auto';
  }
}
