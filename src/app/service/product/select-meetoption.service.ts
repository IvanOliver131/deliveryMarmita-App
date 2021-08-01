import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetOptions } from 'src/app/models/meetOptions';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const { apiUrl } = environment;

@Injectable({
    providedIn: 'root'
})

export class SelectOptionService {
    baseURL = `${apiUrl}/additions`;

    constructor(private http: HttpClient) { }

    getOptions(): Observable <MeetOptions[]>{
        return this.http.get<MeetOptions[]>(`${this.baseURL}`);
    }

}
