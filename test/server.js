var expect  = require("chai").expect;
var should  = require("chai").should();

var twitter = require("twitter");
var config  = require("./config");

describe("fungsi untuk menjalankan server", function(){
  it("mengambil credentials twitter", function(){    
    should.exist(config);

    config.consumer_key.should.be.a('string');
    config.consumer_secret.should.be.a('string');    
    config.access_token_key.should.be.a('string');
    config.access_token_secret.should.be.a('string');
  });
  
  var client = new twitter({
    consumer_key          : config.consumer_key,
    consumer_secret       : config.consumer_secret,
    access_token_key      : config.access_token_key,
    access_token_secret   : config.access_token_secret
  })

  var params = {
    screen_name : "atmaklasik"
  };

  it("statuses/user_timeline", function(){
    client.get('statuses/user_timeline',params,function(err,tweets,response){      
      should.not.exist(err);
      should.exist(tweets);
      expect(response.statusCode).to.equal(200);
    })
  });

  it("statuses/update", function(){
    client.post('statuses/update',{status : 'I love Node JS *posting using twitter clientbot'},function(err,tweets,response){      
      should.not.exist(err);      
      should.exist(tweets);
      expect(response.statusCode).to.equal(200);
    })
  });

});