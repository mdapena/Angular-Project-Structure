import { DOCUMENT } from "@angular/common";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { ThemeModeEnum } from "@core/enums/theme-mode.enum";
import { ThemeService } from "@core/services/theme.service";

describe('ThemeService', () => {
    let themeService: ThemeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ThemeService],
        }).compileComponents();

        themeService = TestBed.inject(ThemeService);

        let store: any = {};
        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            },
            removeItem: (key: string) => {
                delete store[key];
            },
            clear: () => {
                store = {};
            }
        };

        spyOn(localStorage, 'getItem')
            .and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem')
            .and.callFake(mockLocalStorage.setItem);
        spyOn(localStorage, 'removeItem')
            .and.callFake(mockLocalStorage.removeItem);
        spyOn(localStorage, 'clear')
            .and.callFake(mockLocalStorage.clear);
    });

    it('should be initialized', () => {
        expect(themeService).toBeTruthy();
    });

    it('should initializes theme', waitForAsync(async () => {
        localStorage.setItem(ThemeService.LOCALSTORAGE_THEME_KEY, ThemeModeEnum.DEVICE);
        themeService.initialize();
        expect(themeService.CurrentThemeMode).toEqual(themeService.PreferredTheme)
    }));

    it('should load preferred theme', (done: DoneFn) => {
        themeService.load().then((status) => {
            expect(status).toEqual(true);
            done();
        });
    });

    it('should change theme mode and aria with localstorage autosave', () => {
        themeService.apply(ThemeModeEnum.DARK);
        expect(localStorage.getItem(ThemeService.LOCALSTORAGE_THEME_KEY)).toEqual(ThemeModeEnum.DARK);
        expect(themeService.CurrentThemeMode).toEqual(ThemeModeEnum.DARK);
        expect(themeService.CurrentThemeAria).toEqual('Dark theme');

        themeService.apply(ThemeModeEnum.LIGHT);
        expect(localStorage.getItem(ThemeService.LOCALSTORAGE_THEME_KEY)).toEqual(ThemeModeEnum.LIGHT);
        expect(themeService.CurrentThemeMode).toEqual(ThemeModeEnum.LIGHT);
        expect(themeService.CurrentThemeAria).toEqual('Light theme');

        themeService.apply(ThemeModeEnum.DEVICE);
        expect(localStorage.getItem(ThemeService.LOCALSTORAGE_THEME_KEY)).toEqual(ThemeModeEnum.DEVICE);
        expect(themeService.CurrentThemeMode).toEqual(ThemeModeEnum.DEVICE);
        expect(themeService.CurrentThemeAria).toEqual('Device theme');
    });

    it('should toggle the dark mode class in the <body> tag when toggling dark mode theme', () => {
        const document: Document = TestBed.inject(DOCUMENT);

        themeService.apply(ThemeModeEnum.DARK);
        expect(document.body.classList.contains(ThemeService.DARK_MODE_DOM_TOKEN)).toEqual(true);

        themeService.apply(ThemeModeEnum.LIGHT);
        expect(document.body.classList.contains(ThemeService.DARK_MODE_DOM_TOKEN)).toEqual(false);
    });
});