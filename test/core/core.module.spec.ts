import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';

describe('CoreModule', () => {
    let module: CoreModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CoreModule],
        }).compileComponents();

        module = TestBed.inject(CoreModule);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });
});