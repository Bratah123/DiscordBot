const Discord = require('discord.js');
const bot = new Discord.Client();
const { RichEmbed } = require('discord.js');
var fs = require('fs');
const { Attachment } = require('discord.js');


var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'))



bot.on('ready', () => {
    console.log('The bot is on!');
    console.log('The bot is logged onto ' + bot.guilds.size + ' servers');
  });

bot.on('guildMemberAdd', member => {
    
    const channel = member.guild.channels.find(ch => ch.name === 'greetings');
    
    if (!channel) return;

    var greeting = Math.floor(Math.random() * 10) + 1;

    channel.send(`Welcome to the army, ${member} hope you like the stay!\nMake sure you do !help for info.`);
  });

bot.on('message', message =>
{

    var sender = message.author;

    if (!userData[sender.id]) userData[sender.id] = {
        reputation: 0,
        money: 0
    }

    function money_plus_50()
{

    userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;

}

    function money_minus_50()
    {
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;
        userData[sender.id].money--;

    }

    if(message.content == '!help')
    {
        message.author.send('\nHere is a list of commands:\n!roll\n!stats <person>\n!fame <person>\n!gamble <price>\n!dab\n!thanos\n!memes\n!league\n!minecraft\n!roleshop\n!pay <person>\n');
        console.log(message.author.username + " has used the !help command!");
        return;
    }
    else if(message.content == '!avatar')
    {
        message.reply(message.author.users);
    }
    else if(message.content == '!roll')
    {
        var roll = Math.floor(Math.random() *6) + 1;
        message.reply('You rolled a ' + roll + '!');
        console.log(message.author.username + " has used the !roll command!");
    }
    else if(message.content === '!stats')
    {
        const embed = new RichEmbed()
        .setTitle('Stats')
        .setColor(0xFF0000)
        .setDescription(':money_with_wings: Money: $' + userData[sender.id].money + '\n:revolving_hearts: Reputation: ' + userData[sender.id].reputation + '\n:zipper_mouth: Messages: ' + userData[sender.id].messages);
        message.channel.send(embed);
        console.log(message.author.username + " has used the !stats command!");

    }
    else if(message.content === '!beg')
    {

        roll = Math.floor(Math.random() *6) + 1;
        console.log(message.author.username + " has used the !beg command!");

        if (roll === 6)
        {
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;

            message.reply('You gained $12!');

        }
        else if (roll === 5)
        {

            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;

            message.reply('You gained $10!');
        }
        else if (roll === 4)
        {

            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;

            message.reply('You gained $8!');
        }
        else if (roll === 3)
        {

            userData[sender.id].money++;
            userData[sender.id].money++;
            userData[sender.id].money++;


            message.reply('You gained $3!');
        }
        else if (roll === 2)
        {

            userData[sender.id].money++;
            userData[sender.id].money++;

            message.reply('You gained $2!');
        }
        else if (roll === 1)
        {

            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;
            userData[sender.id].money--;

            message.reply('You lost $25.');
        }

    }



    if (message.content === '!bankrupt')
    {
        if (userData[sender.id].money < 0){
        userData[sender.id].money = 0;
        message.reply ("You've filed for bankruptcy and lost all your debt. :sweat_smile: ");
        console.log(message.author.username + " has used the !bankrupt command!");
        }
        else
        {
            message.reply('You are not bankrupt... yet :wink:');
        }
    }

    let badWord = message.content.toLowerCase();

    if(badWord.includes('nigger'))
    {
        message.delete();

        message.reply("We don't say that here you lose $50");

        money_minus_50();
        console.log(sender.tag + " said the N Word HARD R word.");
    }
   
    if(badWord.includes('nigga'))
    {
        message.delete();

        message.reply("We don't say that here you lose $50");

        money_minus_50();
        console.log(sender.tag + " said the N Word HARD R word.");
    }
   
    if(badWord.includes('fuck'))
    {
        message.delete();

        message.reply("We don't say that here you lose $50");

        money_minus_50();
        console.log(sender.tag + " said the F Word.");
    }

    if(badWord.includes('faggot'))
    {
        message.delete();

        message.reply("We don't say that here you lose $50");

        money_minus_50();
        console.log(sender.tag + " said Faggot.");
    }
    if(badWord.includes('shit'))
    {
        message.delete();

        message.reply("We don't say that here you lose $50");

        money_minus_50();
        console.log(sender.tag + " said shit.");
    }



    if (!userData[sender.id]) userData[sender.id] = {
        reputation: 0,
        money: 0,
        messages: 0
    }


    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
        if(err) console.error(err);
    })


    if(message.content.includes(""))
    {
        console.log(sender.username + " said: " + message.content);

        if(userData[sender.id].messages === NaN || userData[sender.id].messages === null)
        {
            userData[sender.id].messages = 0;
            userData[sender.id].messages++;
        }
        else
        {
            userData[sender.id].messages++;
        }
    }

  
  

        if(message.content === '!league')
        {

            const member = message.author;

            if(member.presence.game === null)
            {
                const member = message.author;

                message.reply("You are not even playing a game :thinking:");
            }

            else
            {

                if(userData[sender.id].money >= 100)
                {

                    message.reply("You have reached the maximum use of this command. :angry:");

                    }

                    else 
                    {

                    if(member.presence.game.name === 'League of Legends')

                    {
                    message.reply("You are playing league and I like that. Here have 100$! :smiley:");
                    money_plus_50();
                    money_plus_50();

                    }

                    else
                    {

                    message.reply("You aren't playing league. :thinking:");

                    }

                }
            }
        }
        


        if(message.content === '!roleshop')
        {
            const member = message.author

            const embed = new RichEmbed()
            .setTitle('Role Shop:\nBuy Roles Here!')
            .setColor(0xFF0000)
            .setDescription(':ocean: 1.Navy $2000\n:gun: 2.Marine $2000\n:eye: 3.Sharp Shooter $5000\n:bow_and_arrow: 4.Platoon Leader $6500\n:flag_us: 5.Lieutenant Colonel $15000' );
            message.channel.send(embed);
            message.reply('Here is the Role Shop! Use !buy <role> (caps sensitive) to buy that role.');

        }

        if(message.content === '!buy Navy')
        {
            if (userData[sender.id].money < 2000)
            {
                message.reply('You do not have enough money to buy this role.');
            }
            else
            {
                userData[sender.id].money = userData[sender.id].money - 2000;
                
                message.member.addRole('638922980629544977')
                 .then(console.log)
                 .catch(console.error); 

                message.reply('You have bought Navy! $2000 has been removed from your account.');
            }
        }

        if(message.content === '!buy Marine')
        {
            if (userData[sender.id].money < 2000)
            {
                message.reply('You do not have enough money to buy this role.');
            }
            else
            {
                userData[sender.id].money = userData[sender.id].money - 2000;

                message.member.addRole('638923018705436684')
                 .then(console.log)
                 .catch(console.error);
                
                message.reply('You have bought Marine! $2000 has been removed from your account.');
            }
        }

        if(message.content === '!buy Sharp Shooter')
        {
            if (userData[sender.id].money < 5000)
            {
                message.reply('You do not have enough money to buy this role.');
            }
            else
            {
                userData[sender.id].money = userData[sender.id].money - 5000;

                message.member.addRole('638923151161557012')
                 .then(console.log)
                 .catch(console.error);
                
                message.reply('You have bought Sharp Shooter! $5000 has been removed from your account.');
            }
        }

        if(message.content === '!buy Platoon Leader')
        {
            if (userData[sender.id].money < 6500)
            {
                message.reply('You do not have enough money to buy this role.');
            }
            else
            {
                userData[sender.id].money = userData[sender.id].money - 6500;

                message.member.addRole('638929276963389450')
                 .then(console.log)
                 .catch(console.error);
                
                message.reply('You have bought Platoon Leader! $6500 has been removed from your account.');
            }
        }

        if(message.content === '!buy Lieutenant Colonel')
        {
            if (userData[sender.id].money < 15000)
            {
                message.reply('You do not have enough money to buy this role.');
            }
            else
            {
                userData[sender.id].money = userData[sender.id].money - 15000;

                message.member.addRole('638930120614215680')
                 .then(console.log)
                 .catch(console.error);
                
                message.reply('You have bought Lieutenant Colonel! $15000 has been removed from your account.');
            }
        }

        if(message.content === '!minecraft')
        {

            const member = message.author;

            if(member.presence.game === null)
            {
                const member = message.author;

                message.reply("You are not even playing a game :thinking:");
            }

            else
            {

                if(userData[sender.id].money >= 1000)
                {

                    message.reply("You have reached the maximum use of this command. :angry:");

                    }

                    else 
                    {

                    if(member.presence.game.name === 'minecraft')

                    {
                    message.reply("You are playing minecraft and I like that. Here have 100$! :smiley:");
                    money_plus_50();
                    money_plus_50();

                    }

                    else
                    {

                    message.reply("You aren't playing minecraft. :thinking:");

                    }

                }
            }
        }


        if(message.content.startsWith('!gamble'))
        {

            let array = message.content.split(" ");

            array;

            const price = message.content.split(" ").slice(1);

            const letters = ['a', 'b', 'c','d', 'e', 'f','g','h', 'i','j', 'k', 'l','m', 'n', 'o','p','q','r','s', 't', 'u', 'v', 'w','x','y','z'];

            if(isNaN(price))
            {
                message.reply("That is not a valid price.")
            }
            else
            {
            if (price > userData[sender.id].money)
            {
                message.reply('You do not have enough money to gamble $' + price);
            }

            else
            {
                var randomNum = Math.floor(Math.random() * 100) + 1;

                if (randomNum <= 50)
                {

                    for (var i = 0; i < price; i++)
                    {
                    userData[sender.id].money++;
                    }

                    message.reply("Congratz! You won $" + price);
                }
                else if (randomNum >= 51)
                {
                    for (var j = 0; j < price; j++)

                    userData[sender.id].money--;

                    message.reply("RIP :frowning: you lost $" + price);
                }

            }
        }
    }


    if(message.content.startsWith('!pay'))
    {
        const user = message.mentions.users.first();
        let pay = message.content.split(" ");
        pay;

        if(user)
        {
            const member = message.guild.member(user);
            const sender = message.author;
        
            if(member)
            {
                const payAmount = message.content.split(" ").slice(2);
                if(member.id === sender.id)
                {
                    message.reply("You cannot pay yourself :(");
                }
                else{
                if(isNaN(payAmount))
                {
                    message.reply("That is not a valid amount.");
                    return;
                }
                else{

                if(payAmount > userData[sender.id].money)
                {
                    message.reply("You do not have enough to give.");
                }
                else
                {
                    for(var i = 0; i < payAmount; i++)
                    {
                        userData[member.id].money++;
                    }
                    message.reply("You have given away $" + payAmount + ".");
                    for(var j = 0; j < payAmount; j++)
                    {
                        userData[sender.id].money--;
                    }
                }
            }
        }

        }
        else
        {
            message.reply("Please enter a person you want to pay.");
        }
    }
}

    if (!message.guild) return;

    if(message.content.startsWith('!fame'))
    {
        console.log(message.author.username + " has used the !fame command!");

        const user = message.mentions.users.first();
        if(user)
        {

            const user = message.mentions.users.first();
            const member = message.guild.member(user);

            if(member.id === sender.id)
            {

                    message.reply('You cannot fame yourself');
            }
            else
            {

                userData[member.id].reputation++;
                message.channel.sendMessage('You have raised the fame of ' + member);
            }

        }
        else
        {
            message.reply('You need to enter a username');
        }
        

    }

    if (message.content === '!dab')
    {

        var dab = Math.floor(Math.random() * 10) + 1;

        if (dab === 1)
        {
            message.channel.send("HELL NO!!! https://i.kym-cdn.com/entries/icons/facebook/000/000/026/Gerard-Butler-This-Is-Sparta.jpg");
        }
        else if (dab === 2)
        {
            message.channel.send("What are you 12? https://media.wired.com/photos/5a595516f11e325008172bcb/master/pass/BabyGlimpseBaby-640504936.jpg");
        }
        else if (dab === 3)
        {
            message.channel.send("You got some problems my dude. https://i.imgflip.com/k1n6s.jpg");
        }
        else if (dab === 4)
        {
            message.channel.send("NOPE! https://media1.tenor.com/images/65866ba370141523c412fb6c0dd2de6d/tenor.gif?itemid=4937950");
        }
        else if (dab === 5)
        {
            message.channel.send("https://media2.giphy.com/media/3ELtfmA4Apkju/giphy.gif ummm NO!");
        }
        else if (dab === 6)
        {
            message.channel.send("https://media.tenor.com/images/4a8f0ce801e6a08aa5e9e0d39c0bd8a0/tenor.gif");
        }
        else if (dab === 7)
        {
            message.channel.send("https://i.ytimg.com/vi/GRpJk1uERKA/maxresdefault.jpg");
        }
        else if (dab === 8)
        {
            message.channel.send("https://ih1.redbubble.net/image.433724851.6990/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.u3.jpg");
        }
        else if (dab === 9)
        {
            message.channel.send("https://cdn.vox-cdn.com/thumbor/_J4RFUvzfhIW4gzV8DK-qLVJcCc=/0x0:903x454/1200x800/filters:focal(65x237:209x381)/cdn.vox-cdn.com/uploads/chorus_image/image/64748596/Screen_Shot_2019_07_17_at_9.20.33_AM.0.png");
        }
        else if (dab === 10)
        {
            message.channel.send("https://i.kym-cdn.com/photos/images/original/001/260/569/d6d.jpg");
        }

    }

    if (message.content === '!thanos')
    {

        var thanos = Math.floor(Math.random() * 15) + 1;

        if (thanos === 1)
        {
            message.channel.send("https://comicbookandbeyond.com/wp-content/uploads/2019/05/Thanos-Quotes.jpg");
        }
        else if (thanos === 2)
        {
            message.channel.send("https://geeksoncoffee.com/wp-content/uploads/2018/07/Thanos-Little-One-780x405.jpg");
        }
        else if (thanos === 3)
        {
            message.channel.send("https://www.animatedtimes.com/wp-content/uploads/2018/05/inspiring-thanos-quotes-AT.jpg");
        }
        else if (thanos === 4)
        {
            message.channel.send("https://i.pinimg.com/736x/da/12/9e/da129eb4b4059df6be24923069dc2d42.jpg");
        }
        else if (thanos === 5)
        {
            message.channel.send("https://comicbookandbeyond.com/wp-content/uploads/2019/05/1Thanos-avengers-quotes..jpg");
        }
        else if (thanos === 6)
        {
            message.channel.send("https://external-preview.redd.it/PE1KQlg85j1LF32JNg8jPam8Q_o-xYQae664ZsGqqZ0.png?auto=webp&s=4787a78ac03fd1ac49022696c66459b8f28a33e6");
        }
        else if (thanos === 7)
        {
            message.channel.send("https://imgix.ranker.com/user_node_img/50095/1001881217/original/they-will-resist-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces");
        }
        else if (thanos === 8)
        {
            message.channel.send("https://moodswag.com/wp-content/uploads/2019/06/Thanos-quotes-5.png");
        }
        else if (thanos === 9)
        {
            message.channel.send("https://www.moviequotesandmore.com/wp-content/uploads/avengers-infinity-war.jpg");
        }
        else if (thanos === 10)
        {
            message.channel.send("https://i.kym-cdn.com/photos/images/newsfeed/001/497/040/471.jpg");
        }
        else if (thanos === 11)
        {
            message.channel.send("https://thumbs.gfycat.com/FlatIdealisticBoaconstrictor-size_restricted.gif");
        }
        else if (thanos === 12)
        {
            message.channel.send("https://i.imgur.com/Lm93KRM.gif");
        }
        else if (thanos === 13)
        {
            message.channel.send("https://i.ytimg.com/vi/l1-n0J09KLk/maxresdefault.jpg");
        }
        else if (thanos === 14)
        {
            message.channel.send("https://memewhen.com/wp-content/uploads/2019/03/meme-when-Thanos-Meme-1.jpeg");
        }
        else if (thanos === 15)
        {
            message.channel.send("https://cdn.vox-cdn.com/thumbor/-XmOOfmmapZzkpVqN_npLG-VSTY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11669363/thanos.jpeg");
        }


    }


    if (message.content === '!memes')
    {

        var meme = Math.floor(Math.random() * 28) + 1;

        if (meme === 1)
        {

            message.channel.send('https://media.discordapp.net/attachments/631249406775132182/631697010524815360/image9.jpg?width=635&height=526');
        }
        else if (meme === 2)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697010524815362/image5.jpg");
        }
        else if (meme === 3)
        {
            message.channel.send('https://cdn.discordapp.com/attachments/631249406775132182/631697011103498250/image7.jpg');

        }
        else if (meme === 4)
        {
            message.channel.send('https://cdn.discordapp.com/attachments/631249406775132182/631697011598688266/video6.mov');
        }
        else if (meme === 5)
        {
            message.channel.send('https://cdn.discordapp.com/attachments/631249406775132182/631697012114456576/image0.jpg');
        }
        else if (meme === 6)
        {
            message.channel.send('https://cdn.discordapp.com/attachments/631249406775132182/631697012114456578/image2.jpg');
        }
        else if (meme === 7)
        {
            message.channel.send('https://cdn.discordapp.com/attachments/631249406775132182/631697012609253376/image1.jpg');
        }
        else if (meme === 8)
        {
            message.channel.send('https://cdn.discordapp.com/attachments/631249406775132182/631697013083471882/image8.jpg');
        }
        else if (meme === 9)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697111028727838/image5.jpg");
        }
        else if (meme === 10)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697111498358784/image4.jpg");
        }
        else if (meme === 11)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697112090017812/image0.jpg");
        }
        else if (meme === 12)
        {   
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697111498358785/image6.jpg");
        }
        else if (meme === 13)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697112090017813/image2.jpg");
        }
        else if (meme === 14)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697112823889929/image1.jpg");
        }
        else if (meme === 15)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697112823889930/image3.jpg");
        }
        else if (meme === 16)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697226359373835/image9.jpg");
        }
        else if (meme === 17)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697226359373836/image5.jpg");
        }
        else if (meme === 18)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697227198496778/image7.jpg");
        }
        else if (meme === 19)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697227676516372/image6.jpg");
        }
        else if (meme === 20)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697227676516374/image4.jpg");
        }
        else if (meme === 21)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697228276170753/image2.png");
        }
        else if (meme === 22)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697228846858250/image3.png");
        }
        else if (meme === 23)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697229312294912/image0.jpg");
        }
        else if (meme === 24)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697229777731604/image8.jpg");
        }
        else if (meme === 25)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697229312294913/image1.jpg");
        }
        else if (meme === 26)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697284945674250/image1.jpg");
        }
        else if (meme === 27)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697284945674251/image0.jpg");
        }
        else if (meme === 28)
        {
            message.channel.send("https://cdn.discordapp.com/attachments/631249406775132182/631697285604048896/image2.jpg");
        }


    }


    if(message.content === "!stocks")
    {
        message.reply("https://finance.yahoo.com/gainers , here these might help you decide.")
    }

 
       if(message.content == "!ban")
       {
           if(message.author.id == '207371595113562124')
           {
           message.reply("Who we banning?");
           }
           else
           {
            message.reply("Brandon did not give you permission to do that.");
           }
       }

    

    if(message.content.startsWith('!stats'))
    {
        const user = message.mentions.users.first();
        if(user)
        {

            const user = message.mentions.users.first();
            const member = message.guild.member(user);

            if(member)
            {
                const embed = new RichEmbed()
                .setTitle (user.tag +' Stats')
                .setColor(0xFF0000)
                .setDescription(':money_with_wings: Money: $' + userData[member.id].money + '\n:revolving_hearts: Reputation: ' + userData[member.id].reputation + '\n:zipper_mouth: Messages: ' + userData[member.id].messages);
                message.channel.send(embed);
            }
        }   
    }

});

bot.login('NjE5NzYzNDI2NDAyNjMxNzAw.Xap8qg.IC7iqILYIlhrvtRGWvbmKLmItIk');