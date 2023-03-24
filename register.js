const Discord = require('discord.js');
const chalk = require('chalk');
const fs = require('node:fs');
const config = require('./configs/config.json');
const commands = [];

const commandFiles = fs.readdirSync(`./commands/interactions/`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/interactions/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new Discord.REST({ version: '10' }).setToken(config.Token);

(async () => {

    try {

        console.log(chalk.bold.magentaBright(`                   __         __              `));
        console.log(chalk.bold.magentaBright(`.----.-----.-----.|__|.-----.|  |_.-----.----.`));
        console.log(chalk.bold.magentaBright(`|   _|  -__|  _  ||  ||__ --||   _|  -__|   _|`));
        console.log(chalk.bold.magentaBright(`|__| |_____|___  ||__||_____||____|_____|__| `));
        console.log(chalk.bold.magentaBright(`           |_____|                            v1.2`));
        console.log(chalk.bold.magentaBright(` `));
        console.log(chalk.bold.blueBright(`    [-] Program developed by Codebase_ [-]`));
        console.log(chalk.bold.magentaBright(` `));

        console.log(chalk.bold.yellowBright(`Started refreshing ${commands.length} application (/) commands.`));

        const data = await rest.put(
            Discord.Routes.applicationCommands(config.ClientID),
            { body: commands },
        );

        console.log(chalk.bold.greenBright(`Successfully reloaded ${data.length} application (/) commands.`));
        console.log(chalk.bold.redBright(`Link to the invitation: https://discord.com/api/oauth2/authorize?client_id=${config.ClientID}&scope=bot`))

    } catch (error) {
        console.error(chalk.bold.redBright(error));
    }

})();