import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from '@core/pages/page-not-found/page-not-found.component';

describe('Page Not Found Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule]
        }).compileComponents();
    });

    it('should create the page not found component', () => {
        const fixture = TestBed.createComponent(PageNotFoundComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});