import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { tap, catchError, of } from "rxjs";
import { environment } from '@envs/environment';
import { IConfig } from "../interfaces/config.interface";

@Injectable()
export class ConfigService {
    private static settings: IConfig;

    get Settings() { return ConfigService.settings; }

    constructor(private http: HttpClient) { }

    /** Loads and configures the runtime application with JSON files */
    load() {
        const jsonFile = `config/jsons/config.${environment.name}.json`;
        return new Promise((resolve) => {
            this.http.get(jsonFile).pipe(
                tap((response: any) => {
                    ConfigService.settings = <IConfig>response;
                    resolve(true);
                }),
                catchError((error) => {
                    console.log(`Could not load file '${jsonFile}': ${JSON.stringify(error)}`);
                    resolve(true);
                    return of(null);
                })
            ).subscribe();
        });
    }
}