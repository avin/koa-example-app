var app = require('../../../app');
var request = require('supertest').agent(app.listen());

describe('Controllers - post', function(){
    describe('when GET /', function(){
        it('should index all posts', function(done){
            request
                .get('/')
                .expect(200)
                .expect('Hello World', done);
        })
    })

    describe('when not GET /', function(){
        it('should 404', function(done){
            request
                .get('/aklsjdf')
                .expect(404, done);
        })
    })
})