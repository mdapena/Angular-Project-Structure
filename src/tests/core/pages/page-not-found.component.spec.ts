import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from '@core/pages/page-not-found/page-not-found.component';

describe('Page Not Found Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                PageNotFoundComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(PageNotFoundComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});