import { TestBed, waitForAsync } from '@angular/core/testing';
import { ConfigService } from '@config/services/config.service';
import { environment } from '@config/environments/environment';
import { MainModule } from '../src/main.module';

describe('MainModule', () => {
    let configService: ConfigService;
    let module: MainModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MainModule],
        }).compileComponents();

        module = TestBed.inject(MainModule);
        configService = TestBed.inject(ConfigService);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });

    it('should resolve the APP_INITIALIZER promise with app settings', waitForAsync(() => {
        MainModule.factory(configService)().then(
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