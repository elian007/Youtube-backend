const request = require('supertest');
const app = require('../src/index')
console.log(app)

describe('GET /videos', function () {
    it('respond with json containing a list of all videos', function () {
        request(app)
            .get('/videos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        
    });
})


describe('GET /pesquisa/:value', function () {
    it('respond with json containing a single video', function () {
        request(app)
            .get('/pesquisa/coringa')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        
    });
})

describe('GET /pesquisa/:value', function () {
    it('respond with json containing video not-found', function () {
        request(app)
            .get('/pesquisa/aladin')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"user not found"') // expecting content value
            .end((err) => {
                if (err) return done(err);
                
            });
        
    });


describe('POST /videos', function () {
        const data = {
            "titulo":"Coringa",
            "descricao":"Filme",
            "hashtags":"#coringa",
            "video" : "./assets/uploads/CORINGA - Trailer Final.mp4"
        }
        it('respond with 201 posted', function () {
            request(app)
                .post('/videos')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .end((err) => {
                    if (err) return done(err);
                    
                });
        });
    });
    
describe('POST /videos', function () {
        const data = {
            "titulo":"Coringa",
            "descricao":"Filme",
            "hashtags":"#coringa",
            "video" : "./assets/uploads/CORINGA - Trailer Final.pdf"
        }
        it('respond with 400 not posted', function () {
            request(app)
                .post('/videos')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400)
                .expect('"video não adicionado"')
                .end((err) => {
                    if (err) return done(err);
                    
                });
        });
    });

})