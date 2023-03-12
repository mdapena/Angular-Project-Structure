import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConfigService } from '@config/services/config.service';
import { ThemeService } from '@core/services/theme.service';
import { environment } from '@envs/environment.development';
import { MainModule } from '../main.module';

describe('MainModule', () => {
    let configService: ConfigService;
    let themeService: ThemeService;
    let module: MainModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MainModule],
        }).compileComponents();

        module = TestBed.inject(MainModule);
        configService = TestBed.inject(ConfigService);
        themeService = TestBed.inject(ThemeService);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });

    it('should resolve the APP_INITIALIZER promise with app settings', waitForAsync(() => {
        MainModule.factory(configService, themeService)().then(
            () => {
                expect(ConfigService.SETTINGS).toBeDefined();
                expect(ConfigService.SETTINGS.app.name).toBeDefined();
                expect(ConfigService.SETTINGS.app.owner).toBeDefined();
                expect(ConfigService.SETTINGS.app.copyright).toBeDefined();
                expect(ConfigService.SETTINGS.env.name).toEqual(environment.name);
                expect(ConfigService.SETTINGS.apiServer.url).toBeDefined();
            }
        );
    }));
});