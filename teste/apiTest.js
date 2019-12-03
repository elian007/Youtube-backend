const request = require('supertest');
const app = require('../src/index')


describe('GET /videos', function () {
    it('respond with json containing a list of all videos', function (done) {
        request(app)
            .get('/videos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            
        done()
    });
})

describe('GET /video', function () {
    it('respond with json containing a list of all videos', function (done) {
        request(app)
            .get('/video')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404);
        done()
    });
})

describe('GET /videos/:value', function () {
    it('respond with json containing a single video', function (done) {
        request(app)
            .get('/videos/coringa')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        done()
    });
})

describe('GET /videos/:value', function () {
    it('respond with video not-found', function (done) {
        request(app)
            .get('/videos/aladin')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"video não encontrado"') // expecting content value
            
        done()
    });


describe('POST /videos', function () {
        const data = {
            "titulo":"Coringa",
            "descricao":"Filme",
            "hashtags":"#coringa",
            "video" : "./assets/uploads/CORINGA - Trailer Final.mp4"
        }
        it('respond with 201 posted', function (done) {
            request(app)
                .post('/videos')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(response => {
                    expect(response.status).toBe(201)
                    expect(response.body).toEqual(data)
                })
            done() 
        });
    });


   
        
    
describe('POST /videos', function () {
        const data = {
            "titulo":"Coringa",
            "descricao":"Filme",
            "hashtags":"#coringa",
            "video" : "./assets/uploads/CORINGA - Trailer Final.pdf"
        }
        it('respond with 400 not posted', function (done) {
            request(app)
                .post('/videos')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(response => {
                    expect(response.status).toBe(400)
                })
                .expect('"video não adicionado"')
            done()
              
               
        });
    });

})