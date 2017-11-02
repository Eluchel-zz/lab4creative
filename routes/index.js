var express = require('express');
var request = require("request");
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root:  'public' });
});
router.get('/environments',function(req,res) {
    var environments = [
        {
            name: 'Cavern'
        },
        {
            name: 'Crypt'
        },
        {
            name: 'Field'
        },
        {
            name: 'Marsh'
        },
        {
            name: 'Ocean'
        },
        {
            name: 'Plains'
        },
        {
            name: 'Rough'
        },
        {
            name: 'Ruin'
        },
        {
            name: 'Waste'
        },
        {
            name: 'Woods'
        }
    ];
    res.send(environments);
});
router.get('/situations',function(req,res) {
    var environments = [
        {
            name: 'Low'
        },
        {
            name: 'Small'
        },
        {
            name: 'Moderate'
        },
        {
            name: 'High'
        },
        {
            name: 'Extreme'
        }
    ];
    res.send(environments);
});
router.get('/encounter',function(req,res) {
    var monsterInfo = "";
    var mod = 0;
    var dieroll = Math.floor((Math.random()*100)+1);
    switch(req.query.situation)
    {
        case "Low": mod = -25; break;
        case "Small": mod = -10; break;
        case "Moderate": mod = 5; break;
        case "High": mod = 10; break;
        case "Extreme": mod  =25; break;
    }
    dieroll += mod;

    switch(req.query.environment)
    {
        case "Cavern":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)+1);
                monsterInfo += "You encounter " + quant + " Kobolds";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+4);
                monsterInfo += "You encounter " + quant + " Goblins";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+8);
                monsterInfo += "You encounter " + quant + " Hobgoblins";
            }
            break;
        case "Crypt":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)-1);
                if(quant < 1)
                    quant = 1;
                monsterInfo += "You encounter " + quant + " Ghosts";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+2);
                monsterInfo += "You encounter " + quant + " Goblins";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+4);
                monsterInfo += "You encounter " + quant + " Ghouls";
            }
            break;
        case "Field":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)+2);
                monsterInfo += "You encounter " + quant + " Haflings";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+3);
                monsterInfo += "You encounter " + quant + " Satyrs";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+1);
                monsterInfo += "You encounter " + quant + " Elves";
            }
            break;
        case "Marsh":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)-3);
                if(quant < 1)
                    quant = 1;
                monsterInfo += "You encounter " + quant + " Wildcats";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10));
                if(quant < 1)
                    quant = 1;
                monsterInfo += "You encounter " + quant + " Humans";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)-6);
                if(quant < 1 || quant === 1) {
                    quant = 1;
                    monsterInfo += "You encounter " + quant + " Wyrvern";
                } else {
                    monsterInfo += "You encounter " + quant + " Wyrverns";
                }

            }
            break;
        case "Ocean":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)+11);
                monsterInfo += "You encounter " + quant + " Humans";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+4);
                monsterInfo += "You encounter " + quant + " Manta Rays";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+9);
                monsterInfo += "You encounter " + quant + " Merfolk";
            }
            break;
        case "Plain":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)+1);
                monsterInfo += "You encounter " + quant + " Kobolds";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+4);
                monsterInfo += "You encounter " + quant + " Goblins";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+8);
                monsterInfo += "You encounter " + quant + " Hobgoblins";
            }
            break;
        case "Rough":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)+1);
                monsterInfo += "You encounter " + quant + " Kobolds";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+4);
                monsterInfo += "You encounter " + quant + " Goblins";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+8);
                monsterInfo += "You encounter " + quant + " Hobgoblins";
            }
            break;
        case "Ruin":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)+1);
                monsterInfo += "You encounter " + quant + " Hyenas";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+4);
                monsterInfo += "You encounter " + quant + " Mustangs";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+6);
                monsterInfo += "You encounter " + quant + " Dire Wolves";
            }
            break;
        case "Waste":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)+1);
                monsterInfo += "You encounter " + quant + " Jackals";
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)+2);
                monsterInfo += "You encounter " + quant + " Hobgoblins";
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)-7);
                if(quant < 1 || quant === 1) {
                    quant = 1;
                    monsterInfo += "You encounter " + quant + " Phoenix";
                } else {
                    monsterInfo += "You encounter " + quant + " Phoenixs";
                }
            }
            break;
        case "Woods":
            if(dieroll < 50) {
                var quant = Math.floor((Math.random()*10)-7);
                if(quant < 1 || quant === 1) {
                    quant = 1;
                    monsterInfo += "You encounter " + quant + " Goshawk";
                } else {
                    monsterInfo += "You encounter " + quant + " Goshawks";
                }
            } else if(dieroll < 100) {
                var quant = Math.floor((Math.random()*10)-7);
                if(quant < 1 || quant === 1) {
                    quant = 1;
                    monsterInfo += "You encounter " + quant + " Naja";
                } else {
                    monsterInfo += "You encounter " + quant + " Najas";
                }
            } else if(dieroll < 126) {
                var quant = Math.floor((Math.random()*10)+21);
                monsterInfo += "You encounter " + quant + " Elves";
            }
            break;
    }

    res.send(monsterInfo);
});

module.exports = router;
