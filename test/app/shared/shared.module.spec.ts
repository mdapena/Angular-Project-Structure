import { TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared/shared.module';

describe('SharedModule', () => {
    let module: SharedModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
        }).compileComponents();

        module = TestBed.inject(SharedModule);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });
});