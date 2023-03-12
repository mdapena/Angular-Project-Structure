import { TestBed } from "@angular/core/testing";
import { ConfigService } from "@config/services/config.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConfigService', () => {
    let configService: ConfigService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ConfigService]
        });
        configService = TestBed.inject(ConfigService)
    });

    it('should be initialized', () => {
        expect(configService).toBeTruthy();
    });
});