export class Encoder {
    convert(input, decode = false) {
        const encodeCharCode = (charCode, index) => {
            const charecterRange = {
                uppercase: { min: 65, max: 90 },
                lowercase: { min: 97, max: 122 } //it is possible to add any new range here . like numbers example : numbers: { min: 0, max: 9 }
            };
            let range;
            for (let key in charecterRange) {
                if (charecterRange[key].min <= charCode && charecterRange[key].max >= charCode) {
                    range = charecterRange[key];
                    break;
                }
            }
            if (range) {
                let result = charCode + index % ((range.max - range.min));
                if (result > range.max) {
                    result = range.min + (result % range.max) - 1;
                }
                else if (result < range.min) {
                    result = range.max - (range.min - result - 1);
                }
                return String.fromCharCode(result);

            } else {
                return String.fromCharCode(charCode);
            }

        };
        let output = '';
        for (let i = 0; i < input.length; i++) {
            output += encodeCharCode(input.charCodeAt(i), (decode ? -i : i));
        }
        return output;
    }
}