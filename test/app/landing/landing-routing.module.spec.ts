import { TestBed } from '@angular/core/testing';
import { LandingRoutingModule } from '@app/landing/landing-routing.module';

describe('LandingRoutingModule', () => {
    let module: LandingRoutingModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LandingRoutingModule],
        }).compileComponents();

        module = TestBed.inject(LandingRoutingModule);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });
});