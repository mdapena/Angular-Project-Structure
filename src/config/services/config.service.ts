import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError, of } from "rxjs";
import { environment } from "@config/environments/environment";
import { IEnvConfig } from "@config/interfaces/envconfig.interface";

@Injectable()
export class ConfigService {
    private static settings: IEnvConfig;

    /** Global settings */
    static get SETTINGS(): Readonly<IEnvConfig> { return ConfigService.settings; }

    constructor(private http: HttpClient) { }

    /** Loads the application's settings and environment parameters. 
     *  It must be called once at the APP_INITIALIZER level.
     *  @returns Promise */
    load() {
        const jsonFile = `config/envconfig.${environment.name}.json`;
        return new Promise((resolve) => {
            this.http.get(jsonFile).pipe(
                tap((response: any) => {
                    ConfigService.settings = <IEnvConfig>response;
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