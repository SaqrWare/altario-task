import path from "path";

export const isCsvFile = (filename: string): boolean => {
    const extname = path.extname(filename).toLowerCase();
    return extname === '.csv';
};