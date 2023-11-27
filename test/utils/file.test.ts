import {isCsvFile} from '../../utils/file';

describe('isCsvFile', () => {
    it('should return true for a CSV file', () => {
        const csvFilename = 'example.csv';
        const result = isCsvFile(csvFilename);
        expect(result).toBe(true);
    });

    it('should return false for a non-CSV file', () => {
        const nonCsvFilename = 'example.txt';
        const result = isCsvFile(nonCsvFilename);
        expect(result).toBe(false);
    });

    it('should be case-insensitive', () => {
        const uppercaseCsvFilename = 'EXAMPLE.CSV';
        const result = isCsvFile(uppercaseCsvFilename);
        expect(result).toBe(true);
    });
});
