const { Collection } = require("discord.js")

const { readdirSync } = require("fs")

const ascii = require("ascii-table")



const table = new ascii().setHeading("Command", "Load status")


module.exports = (client) => {
   
    client.commands =  new Collection()

const commandFiles = readdirSync(__dirname + "/../commands")

console.log(commandFiles)
}