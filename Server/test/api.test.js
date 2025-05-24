const request = require('supertest');
const app = require('../routes');
const { connectVar } = require('../mongo');
const mongoose = require('mongoose');

beforeAll(async () => {
    await connectVar();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /get', () => {
    it('should return all records', async () => {
        const res = await request(app).get('/get');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('arrOfdata');
        expect(Array.isArray(res.body.arrOfdata)).toBe(true);
    });
});

describe('POST /post', () => {
    it('should "fail" with invalid data — but no validation implemented yet', async () => {
        const invalidRecord = {
            Record_category: "",
            Record_Name: "",
            Record_Holder_Name: "",
            Record_Picture: "not-a-url",
            Record_Details: "",
            Added_by: ""
        };

        const res = await request(app).post('/post').send(invalidRecord);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('_id');
    });
});

let createdRecordId;

describe('POST /post (for later use)', () => {
    it('should create a valid record', async () => {
        const validRecord = {
            Record_category: "Speed",
            Record_Name: "Fastest Coder",
            Record_Holder_Name: "John Doe",
            Record_Picture: "https://example.com/image.jpg",
            Record_Details: "Completed 100 problems in a day",
            Added_by: "Admin"
        };

        const res = await request(app).post('/post').send(validRecord);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('_id');
        createdRecordId = res.body._id;
    });
});

describe('GET /getid/:id', () => {
    it('should return the specific record by ID', async () => {
        const res = await request(app).get(`/getid/${createdRecordId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('_id', createdRecordId);
    });
});

describe('DELETE /delete/:id', () => {
    it('should delete the record by ID', async () => {
        const res = await request(app).delete(`/delete/${createdRecordId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('_id', createdRecordId);
    });
});