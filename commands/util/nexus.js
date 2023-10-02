const { SlashCommandBuilder } = require('discord.js')

const validClasses = [
  'Berserker',
  'Destroyer',
  'Gunlancer',
  'Paladin',
  'Slayer',
  'Arcanist',
  'Bard',
  'Sorceress',
  'Summoner',
  'Glaivier',
  'Scrapper',
  'Soulfist',
  'Striker',
  'Wardancer',
  'Artillerist',
  'Deadeye',
  'Gunslinger',
  'Machinist',
  'Sharpshooter',
  'Deathblade',
  'Reaper',
  'Shadowhunter',
  'Souleater',
  'Aeromancer',
  'Artist',
]

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nexus')
    .setDescription('Returns a link to the Lostark Nexus guide page for a given class')
    .addStringOption(option =>
      option.setName('class')
        .setDescription('The class to get the guide for')
        .setRequired(true)
        .addChoices(...validClasses.map(choice => ({ name: choice, value: choice})))
    ),
  async execute(interaction) {
    const guide = interaction.options.getString('class');
    await interaction.reply({
      content: `<https://www.lostark.nexus/guides/${guide}>`,
      ephemeral: true
    })
  }
}