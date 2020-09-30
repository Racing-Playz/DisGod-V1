/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
require("dotenv").config();
const { CommandoClient } = require("discord.js-commando");
const { Structures } = require("discord.js");
const path = require("path");
const Keyv = require("keyv");
const Canvas = require("canvas");
const chalk = require("chalk");
const { MessageEmbed } = require("discord.js");

const client = new CommandoClient({
  commandPrefix: "?!",
  unknownCommandResponse: false,
  disableEveryone: false,
  invite: "https://discord.gg/7Svth97",
  owner: "RacingPlayz#7084"
});
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["fun", "Fun Commands"],
    ["moderation", "Moderation Commands"],
    ["special", "Special Commands"],
    ["misc", "Misc Commands"],
    ["music", "Music Commands"]
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.on("guildCreate", async guild => {
  let logchannelfix = guild.name
    .split(" ")
    .join("-")
    .toLowerCase();
  if (
    client.guilds.get("636371108576100356").channels.find(
      channel =>
        channel.name ===
        guild.name
          .split(" ")
          .join("-")
          .toLowerCase()
    ) === undefined
  ) {
    client.guilds
      .get("636371108576100356")
      .channels.create(`${logchannelfix}`)
      .then(channel => {
        channel
          .setParent("637403861073657887")
          .then(ch => {
            ch.lockPermissions();
          })
          .catch(err => {});
      });
  }
});
client.on("ready", () => {
  client.guilds.forEach(g => {
    let logchannelfix = g.name
      .split(" ")
      .join("-")
      .toLowerCase();
    if (
      client.guilds.get("636371108576100356").channels.find(
        channel =>
          channel.name ===
          g.name
            .split(" ")
            .join("-")
            .toLowerCase()
      ) === undefined
    ) {
      client.guilds
        .get("636371108576100356")
        .channels.create(`${logchannelfix}`)
        .then(channel => {
          channel
            .setParent("637403861073657887")
            .then(ch => {
              ch.lockPermissions();
            })
            .catch(err => {});
        });
    }
  });
  console.log(chalk.greenBright("[Status]"), "Bot Online");
  client.user.setActivity("Blizzard | Server Moderation");

process.on("uncaughtException", error =>
  console.log(chalk.redBright("[Uncaught Exception]"), error)
);

});
client.login('NzIxMjQ3NzU3NzQyMTEyODU4.XuRwUQ.ZIjq7Q5IJynt48AE-0kb51gdx2o');
