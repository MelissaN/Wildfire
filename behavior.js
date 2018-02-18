document.addEventListener("DOMContentLoaded", function(event) {

/*-------------------------------------------------------------------------------------
UPON USER'S CLICK, THUMBNAIL ENLARGES
--------------------------------------------------------------------------------------*/ 

    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        } else thumbnailElement.className = "small";
    });
    
});

/*-------------------------------------------------------------------------------------
UPON MOUSE HOVER, DISPLAYS HIDDEN MESSAGE 
--------------------------------------------------------------------------------------*/ 
    
function mouseHover(obj) {
    obj.innerHTML = "SPECIAL THANKS TO: <br><br> Nextdoor.com - <br> For allowing neighbors to keep in touch no matter how scattered we were during the evacuation... <br><br> Keysight Technologies - <br> For providing financial assistance of $10,000 to each employee who lost their home... <br><br> Airbnb - <br> For offering free housing to natural disaster victims... <br><br> GoFundMe.org - <br> Redwood Credit Union - <br> For allowing the community to donate to causes... <br><br> First responders, firefighters, law enforcement, FEMA, Red Cross, volunteers, neighbors, and the list goes on...";
}

function mouseNotHover(obj) {
    obj.innerHTML = "Point here to shout out!";
}
    
/*-------------------------------------------------------------------------------------
UPON USER'S CLICK, PROMPTS INPUT, STORES INPUT, AND DISPLAYS MESSAGE
--------------------------------------------------------------------------------------*/ 

document.addEventListener('DOMContentLoaded', function() {
var para = document.getElementById("interactive_emergency");

para.addEventListener('click', displayInput);

    function displayInput() {
        var input = prompt('Ok. This time, write down the FULL list of things you will retrieve so you are set for any emergency evacuation');
        if (input) {
        para.textContent = 'You said: ' + input + '. My neighbors suggested the 4ps: people, pets, photos, and paperwork. I would add electronics and cash.'; 
        } else {
            para.textContent = 'Hmm, couldn\'t figure out? My neighbors suggested the 4ps: people, pets, photos, and paperwork. I would add electronics and cash.';
        }
    }
});

/*-------------------------------------------------------------------------------------
UPON USER'S CLICK, PLAYS OR PAUSES AUDIO

Credits:

AS HEARD ON /INDEX.HTML -
Heartbreaking by Kevin MacLeod is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)
Source: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100208
Artist: http://incompetech.com/

AS HEARD ON /SR.HTML - 
Stopping By the Inn by Twin Musicom is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)
Source: http://www.twinmusicom.org/song/298/stopping-by-the-inn
Artist: http://www.twinmusicom.org
--------------------------------------------------------------------------------------*/ 

document.addEventListener('DOMContentLoaded', function() {
    var musicButton = document.querySelector('button');

    musicButton.addEventListener('click', play_or_pause_audio);
    
    function play_or_pause_audio() {
        var music = document.getElementById("audio");
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    }
});

/*-------------------------------------------------------------------------------------
UPON USER'S CLICK, GENERATES RANDOM STORY
--------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    var storyButton = document.querySelector('button.printStory');
    var idx = 0;
    var len = stories.length;
    
    storyButton.addEventListener('click', generateRandomStory);

    function generateRandomStory(){
            if (idx < len) {
                idx++;
            } else if (idx >= len) {
                idx = 0;
            }
            document.getElementById("quote").innerHTML = stories[idx].quote;
            document.getElementById("source").innerHTML = stories[idx].source;
    }
});

var stories = [
    {
    "quote":"I had gone by, and she was down there [by the car.] If I had known, I would have gone down there and died with her. She was the love of my life - George Powell",
    "source":"Callahan & Morris, The Press Democrat, October 13, 2017"
    },
    {
    "quote": "In his arms was where... [she] took her last breath... as he held her afloat in a swimming pool as walls of fire burned around them... ",
    "source": "The Associated Press, SFGate, October 13, 2017"
    },
    {
    "quote":"I thought they were fireflies. Then it registered. There are no fireflies out here... - Luis Ocon",
    "source":"Eloisa Gonzales, The Press Democrat, October 17, 2017"
    },
    {
    "quote":"At 4 a.m. this morning, Judy came screaming in to wake me up and say our house was on fire. With only time to put on boxers and [grab] the phone we ran out of the house to see our house, yard and all the other houses and yards on fire. One minute later we wouldn’t have made it - Patrick McCallum",
    "source":"Martin Espinoza, The Press Democrat, October 10, 2017"
    },
    {
    "quote":"Cal Fire Battalion Chief Gino DeGraffenreid ... heard someone yelling amid the roaring wind and fire in the hills northeast of Santa Rosa. He ran toward the voice and saw them: a couple wearing next to nothing, freezing amid an unprecedented fire belching smoke and raining firebrands... soaking wet. They had awoken to a smoke detector, jumped in the pool.. for about an hour...",
    "source":"Julie Johnson, The Press Democrat, October 14, 2017"
    },
    {
    "quote":"...Cinders the size of softballs crashing off the trucks and houses... bouncing off the streets. It was nuts. It was like a war zone. It was hot. The wind was crazy. Trash cans were full, but the wind picked them up and threw them 20 feet - Patrick Coleman",
    "source":"The Los Angeles Times, October 15, 2017"
    },
    {
    "quote":"We're homeless... They say it's good to experience new things as we grow older. And I've never been homeless before - Martha McCullough",
    "source":"Gaye LeBaron, The Press Democrat, October 28, 2017"
    }
];
