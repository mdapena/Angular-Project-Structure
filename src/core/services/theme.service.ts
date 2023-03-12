import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { ThemeModeEnum } from "@core/enums/theme-mode.enum";

@Injectable()
export class ThemeService {

    static readonly DARK_MODE_DOM_TOKEN: string = 'dark-mode';
    static readonly LOCALSTORAGE_THEME_KEY: string = 'preferred-theme';

    private currentThemeMode: ThemeModeEnum = ThemeModeEnum.DEVICE;
    private currentThemeAria: 'Device theme' | 'Dark theme' | 'Light theme' = 'Device theme';

    get PreferredTheme() { return localStorage.getItem(ThemeService.LOCALSTORAGE_THEME_KEY) as ThemeModeEnum; }

    get CurrentThemeMode() { return this.currentThemeMode; }
    get CurrentThemeAria() { return this.currentThemeAria; }

    constructor(@Inject(DOCUMENT) private readonly document: Document) { }

    initialize(): void {
        const preferredTheme = this.PreferredTheme;

        if (preferredTheme != null && preferredTheme != undefined) {
            this.setMode(preferredTheme, { autoApply: false, autoSave: false });
        }
    }

    load(): Promise<boolean> {
        return new Promise((resolve) => {
            const preferredTheme = this.PreferredTheme;

            if (preferredTheme != null && preferredTheme != undefined) {
                this.setMode(preferredTheme);
            }

            resolve(true);
        });
    }

    apply(preferredTheme: ThemeModeEnum): void {
        this.setMode(preferredTheme);
    }

    private setMode(preferredTheme: ThemeModeEnum, options: { autoApply: boolean, autoSave: boolean } = { autoApply: true, autoSave: true }): void {
        switch (preferredTheme) {
            case ThemeModeEnum.DARK:
                if (options.autoApply) { this.document.body.classList.toggle(ThemeService.DARK_MODE_DOM_TOKEN, true); }
                this.currentThemeMode = ThemeModeEnum.DARK;
                this.currentThemeAria = 'Dark theme';
                break;
            case ThemeModeEnum.LIGHT:
                if (options.autoApply) { this.document.body.classList.toggle(ThemeService.DARK_MODE_DOM_TOKEN, false); }
                this.currentThemeMode = ThemeModeEnum.LIGHT;
                this.currentThemeAria = 'Light theme';
                break;
            default:
                if (options.autoApply) { this.document.body.classList.toggle(ThemeService.DARK_MODE_DOM_TOKEN, window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')?.matches); }
                this.currentThemeMode = ThemeModeEnum.DEVICE;
                this.currentThemeAria = 'Device theme';
                break;
        }
        if (options.autoSave) { localStorage.setItem(ThemeService.LOCALSTORAGE_THEME_KEY, this.currentThemeMode); }
    }
}