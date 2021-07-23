const request = require('supertest');
const app = require('./app')

describe('Testing routes', () => {

    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 1000)); // avoid jest open handle error
    })

    test('No login GET request, should return 401', (done) => {
        request(app)
            .get('/')
            .expect(401)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                done();
            })
    })

    test('No login POST request, should return 401', (done) => {
        request(app)
            .post('/')
            .expect(401)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                done();
            })
    })

    test('No login PUT request, should return 401', (done) => {
        request(app)
            .put('/api/notes/0')
            .expect(401)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                done();
            })
    })

    test('No login DELETE request, should return 401', (done) => {
        request(app)
            .delete('/api/notes/0')
            .expect(401)
            .end((err, res) => {
                if (err) {
                    throw err;
                }
                done();
            })
    })

    test('return 404 if there is a wrong endpoint', (done) => {
        var auth = 'Basic VGVzdDpQYXNzd29yZA==';

        request(app)
            .get('/random')
            .set('Authorization', auth)
            .expect(404)
            .end((err, res) => {
                if (err)
                    throw err;
                    done();
            })
    })

    test('return index', (done) => {
        var auth = 'Basic VGVzdDpQYXNzd29yZA=='

        request(app)
            .get('/')
            .set('Authorization', auth)
            .expect('Content-Type', 'text/html: charset=utf-8')
            .expect(200)
            .end(() => {
                done();
            })
    })

})