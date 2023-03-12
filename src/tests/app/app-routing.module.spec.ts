import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../../app/app-routing.module';

describe('AppRoutingModule', () => {
    let module: AppRoutingModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule],
        }).compileComponents();

        module = TestBed.inject(AppRoutingModule);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });
});