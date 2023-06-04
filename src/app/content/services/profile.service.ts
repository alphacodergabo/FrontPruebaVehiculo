import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }
  public getUserInfo(Model:any) {
    return this.http.post(`${environment.api.WS_Core.url}/WS_US/Vehicle/GetUserInfo`, Model).pipe(map(data => data));
  }
}
