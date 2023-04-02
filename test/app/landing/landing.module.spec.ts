import { TestBed } from '@angular/core/testing';
import { LandingModule } from '@app/landing/landing.module';

describe('LandingModule', () => {
    let module: LandingModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LandingModule],
        }).compileComponents();

        module = TestBed.inject(LandingModule);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });
});