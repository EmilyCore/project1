import { Encoder } from './Encoder';
import assert from 'assert';
describe('encoder tests', () => {
    let encoder = new Encoder();
    let sampleValues = [
        { encode: 'bcd FFFHGT', decode: 'bdf JKLOOC' },
        { encode: 'aaaaaAAAA', decode: 'abcdeFGHI' },
        { encode: 'ZZZzzzZZz', decode: 'ZABcdeFGh' },
        { encode: 'abcdefghIgklmnopqrstuvz 123 fdsfsdfdsfsdfdsfdfdsf', decode: 'acegikmoQpuwyacegikmoqv 123 ihxlzlondrfrutjxwzyoc' }
    ]
    describe('encoding tests', () => {
        it('check encoding', () => {
            assert.equal(encoder.convert(sampleValues[0].encode),sampleValues[0].decode);
        });
        it('check lowercase charecters', () => {
            assert.equal(encoder.convert(sampleValues[1].encode),sampleValues[1].decode);
        });
        it('check uppercase charecters', () => {
            assert.equal(encoder.convert(sampleValues[2].encode),sampleValues[2].decode);
        });
        it('check string longer than 26 charecters', () => {
            assert.equal(encoder.convert(sampleValues[3].encode),sampleValues[3].decode);
        });
    });
    describe('decoding tests', () => {
        it('check decoding', () => {
            assert.equal(encoder.convert(sampleValues[0].decode,true),sampleValues[0].encode);
        });
        it('check lowercase charecters', () => {
            assert.equal(encoder.convert(sampleValues[1].decode,true),sampleValues[1].encode);
        });
        it('check uppercase charecters', () => {
            assert.equal(encoder.convert(sampleValues[2].decode,true),sampleValues[2].encode);
        });
        it('check string longer than 26 charecters', () => {
            assert.equal(encoder.convert(sampleValues[3].decode,true),sampleValues[3].encode);
        });
    });
});

