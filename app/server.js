var express = require("express");
var app = express();
var async = require("async");
var bodyParser = require("body-parser");

var twitter = require("twitter");
var config  = require("./config");

try {
  config.consumer_key         != null;
  config.consumer_secret      != null;
  config.access_token_key     != null;
  config.access_token_secret  != null;
}catch(err){
  console.info("config empty");
}

var client = new twitter({
  consumer_key        : config.consumer_key,
  consumer_secret     : config.consumer_secret,
  access_token_key    : config.access_token_key,
  access_token_secret : config.access_token_secret
});

var params = {
  screen_name : "atmaklasik"
}

app.use(bodyParser.json());

app.get("/timeline", function(req, res){
  client.get('statuses/user_timeline',params,function(err,tweets,response){      
    
    if(err)
      res.send(JSON.stringify(err));
    
    if(response.statusCode == 200){      
      var arr = [];
      tweets.forEach(function(data){
				arr.push(function(cb){
					
					let params = {
            created_at : data.created_at,
            text       : data.text
					};
          cb(null,params);
				});
			});
			

			async.parallel(arr,function(err,result){			
				res.send(JSON.stringify(result));
			});
    }else{
      res.send(JSON.stringify({code : response.statusCode, body : response.body}));
    }
  })
});

app.post("/update", function(req, res){
  
  client.post('statuses/update',req.body,function(err,tweets,response){      
    if(err)
      res.send(JSON.stringify(err));
    
    if(response.statusCode == 200){
      res.send(JSON.stringify(tweets));
    }else{
      res.send(JSON.stringify({code : response.statusCode, body : tweets}));
    }
  })
});

app.listen(3000);
console.log("apps running")