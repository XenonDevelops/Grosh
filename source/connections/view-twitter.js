var ntwitter   = require('ntwitter');


/*MONITOR EN STREAMING*/

var monitor_Twets=function(server){
	
	var twitter = new ntwitter({
		consumer_key        : 'Klps9EB1t0xNoerQosNsvqEQl',
	    consumer_secret		: '4jhZ5mZ8eHW4isR3Yo9wcjfWlv6ntBHACS5RRo8FsXaj6EuGht',
	    access_token 		: '3190244143-7o1oq43E4EqYGHddsblSjGsB4NRMLalFqcnDY3x',
	    access_token_secret : 'UIfYBSx3lidsCKKToL4pStz8bR5muB6bY6WvBxdlctWma'
	});

	twitter.stream('statuses/filter',{track:['#love']},function(stream){
		stream.on('data',function(data){
			console.log(data.user.screen_name+" : "+data.text);
		});
	});	
}


module.exports = monitor_Twets;