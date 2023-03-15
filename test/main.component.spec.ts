import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from '../src/main.component';

describe('Main Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                MainComponent
            ],
        }).compileComponents();
    });

    it('should create the main component', () => {
        const fixture = TestBed.createComponent(MainComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should render a router outlet', () => {
        const fixture = TestBed.createComponent(MainComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });
});