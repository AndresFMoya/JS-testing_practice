import capitalize from '../src/capitalize';

it('all lowercase (lc)', () => expect(capitalize('tiago')).toBe('Tiago'));

it('all uppercase (up)', () => expect(capitalize('TIAGO')).toBe('Tiago'));

it('random case (rc)', () => expect(capitalize('tIAgO')).toBe('Tiago'));

it('many words (lc)', () => expect(capitalize('tiago brito')).toBe('Tiago Brito'));

it('empty', () => expect(capitalize('')).toBeNull());

it('number', () => expect(capitalize('7iago 8rito microverse')).toBe('7iago 8rito Microverse'));

it('special char', () => expect(capitalize('#iago ?rito micr000verse')).toBe('#iago ?rito Micr000verse'));
