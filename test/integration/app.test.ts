import request from 'supertest';
import app from '../../index';
import path from "path";

// sleep function for testing
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Integration Tests', () => {
    const omarCredentials = "b21hcjoxMjM=" // omar:123
    const wrongCredentials = "b21hcjoxMg==" // wrong credentials for test

    it('should upload a CSV file successfully', async () => {
        const filePath = path.resolve('test/test-data/dummy_csv.csv'); // Replace with the path to your test CSV file
        console.log("file path:", filePath)

        const response = await request(app)
            .post('/api/v1/upload')
            .attach('files', filePath)
            .set('Authorization', `Basic ${omarCredentials}`);

        expect(response.status).toBe(200);
        expect(response.text).toBe('FILE_UPLOADED');
    });

    it('should respond with service unavailable in the second request before 10 seconds pass', async () => {
        const filePath = path.resolve('test/test-data/dummy_csv.csv');
        console.log("file path:", filePath)

        const response = await request(app)
            .post('/api/v1/upload')
            .attach('files', filePath)
            .set('Authorization', `Basic ${omarCredentials}`);

        expect(response.status).toBe(429);
        expect(response.text).toBe('SERVICE_UNAVAILABLE');
    });

    it('should proceed the request  after 10 seconds pass', async () => {
        await sleep(10500); // wait for 10.5 seconds
        const filePath = path.resolve('test/test-data/dummy_csv.csv');
        console.log("file path:", filePath)

        const response = await request(app)
            .post('/api/v1/upload')
            .attach('files', filePath)
            .set('Authorization', `Basic ${omarCredentials}`);

        expect(response.status).toBe(200);
        expect(response.text).toBe('FILE_UPLOADED');
    }, 11000);

    it('should respond with unauthorized when using wrong credentials', async () => {
        await sleep(10500); // wait for 10.5 seconds
        const filePath = path.resolve('test/test-data/dummy_csv.csv');
        console.log("file path:", filePath)

        const response = await request(app)
            .post('/api/v1/upload')
            .attach('files', filePath)
            .set('Authorization', `Basic ${wrongCredentials}`); //using wrong basic auth credentials

        expect(response.status).toBe(401);
        expect(response.text).toBe('Unauthorized');
    }, 11000);


});
