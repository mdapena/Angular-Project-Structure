import { TestBed } from '@angular/core/testing';
import { LandingPageComponent } from '@app/landing/pages/landing-page/landing-page.component';

describe('LandingPageComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LandingPageComponent
            ],
        }).compileComponents();
    });

    it('should create the landing page component', () => {
        const fixture = TestBed.createComponent(LandingPageComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});