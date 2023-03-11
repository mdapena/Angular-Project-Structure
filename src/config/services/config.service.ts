import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IConfig } from "@config/interfaces/config.interface";
import { environment } from "@envs/environment.development";
import { tap, catchError, of } from "rxjs";

@Injectable()
export class ConfigService {
    private static settings: IConfig;

    static get SETTINGS(): Readonly<IConfig> { return ConfigService.settings; }

    constructor(private http: HttpClient) { }

    /** Loads and configures the runtime application with JSON files */
    load() {
        const jsonFile = `config/jsons/config.${environment.name}.json`;
        return new Promise((resolve) => {
            this.http.get(jsonFile).pipe(
                tap((response: any) => {
                    ConfigService.settings = <IConfig>response;
                    ConfigService.settings.app.copyright = `©${(new Date()).getFullYear()} ${ConfigService.settings.app.owner}. All rights reserved.`;
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