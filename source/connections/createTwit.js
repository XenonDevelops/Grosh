var Twit=require('twit');
var NewTwit=function(message){
		var twit = new Twit({
		    consumer_key        : 'Klps9EB1t0xNoerQosNsvqEQl',
		    consumer_secret		: '4jhZ5mZ8eHW4isR3Yo9wcjfWlv6ntBHACS5RRo8FsXaj6EuGht',
		    access_token 		: '3190244143-7o1oq43E4EqYGHddsblSjGsB4NRMLalFqcnDY3x',
		    access_token_secret : 'UIfYBSx3lidsCKKToL4pStz8bR5muB6bY6WvBxdlctWma'
		});

		twit.post('statuses/update', { status: message }, function(err, reply) {
		    if (err) {
		        console.dir(err);
		    } else {
		    	console.log("Posted Tweet");
		        //console.dir(reply);
		    }
		});
}

module.exports=NewTwit;