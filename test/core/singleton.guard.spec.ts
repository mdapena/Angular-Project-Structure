import { singletonGuard } from "@core/guards/singleton.guard";

describe('Singleton Guard', () => {
    it('should throw an error if a parent module is set', () => {
        expect(() => { singletonGuard({}, 'EmptyModule') }).toThrow(new Error('EmptyModule has already been loaded. Import EmptyModule modules in the MainModule only.'));
    })
});