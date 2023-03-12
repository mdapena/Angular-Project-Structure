import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../app/app.module';

describe('AppModule', () => {
    let module: AppModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();

        module = TestBed.inject(AppModule);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });
});