import { TestBed } from '@angular/core/testing';
import { ToolbarComponent } from '@core/layout/toolbar/toolbar.component';

describe('Toolbar Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ToolbarComponent
            ],
        }).compileComponents();
    });

    it('should create the toolbar component', () => {
        const fixture = TestBed.createComponent(ToolbarComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});