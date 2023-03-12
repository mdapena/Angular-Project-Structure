import { TestBed } from '@angular/core/testing';
import { MainRoutingModule } from '../main-routing.module';

describe('MainRoutingModule', () => {
    let module: MainRoutingModule;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MainRoutingModule],
        }).compileComponents();

        module = TestBed.inject(MainRoutingModule);
    });

    it('should be initialized', () => {
        expect(module).toBeTruthy();
    });
});