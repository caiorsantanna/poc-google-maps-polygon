import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    GoogleMapsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  public zoom = 4;
  public vertices = signal<google.maps.LatLngLiteral[]>([]);
  public options: google.maps.PolygonOptions = {
    draggable: true,
    editable: true
  }

  constructor (
  ) { }

  public onClick(event: google.maps.MapMouseEvent): void {
    this.vertices.update(vertices => {
      if (!event.latLng) { return vertices; }

      return [...vertices, event.latLng.toJSON()];
    })
  }

  public test(event: any) {
    console.log(event)
  }
}
