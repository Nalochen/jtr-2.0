import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import YAML from 'yaml';

// eslint-disable-next-line
declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './swagger-view.component.html',
  styleUrl: './swagger-view.component.less',
})
export class SwaggerViewComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.loadSwaggerData();
  }

  private loadSwaggerData(): void {
    this.http
      .get('/api/system/get-swagger-file', { responseType: 'text' })
      .subscribe((yamlData: string) => {
        SwaggerUIBundle({
          dom_id: '#swagger-ui',
          layout: 'BaseLayout',
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIBundle.SwaggerUIStandalonePreset,
          ],
          spec: YAML.parse(yamlData),
          docExpansion: 'none',
          operationsSorter: 'alpha',
        });
      });
  }
}
