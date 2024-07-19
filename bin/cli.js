#!/usr/bin/env node

const { Command } = require('commander');
const { getAzhanTimes, getAvailableCities } = require('../src/index');

const program = new Command();

program
  .version('1.0.0')
  .description('Get Azhan times for cities in Saudi Arabia');

program
  .command('get-times <city>')
  .description('Get Azhan times for a specific city')
  .action(async (city) => {
    try {
      const times = await getAzhanTimes(city);
      console.log(`Azhan times for ${city}:`);
      times.forEach((time, index) => {
        console.log(`${index + 1}. ${time}`);
      });
    } catch (error) {
      console.error('Error fetching Azhan times:', error.message);
    }
  });

program
  .command('list-cities')
  .description('List all available cities')
  .action(() => {
    const cities = getAvailableCities();
    console.log('Available cities:');
    cities.forEach((city, index) => {
      console.log(`${index + 1}. ${city}`);
    });
  });

program.parse(process.argv);
