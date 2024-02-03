import { program } from 'commander';

program
  .name('cardano-start')
  .description('CLI tool for managing Cardano resources')
  .version('1.0.0');

const networks = ['preview', 'preprod', 'mainnet'];
const resources = ['node', 'wallet'];

// Common operations for both resources
const operations = ['ping', 'tail', 'start', 'stop'];

networks.forEach(network => {
  // Generic operations for starting/stopping all resources in a network
  ['start', 'stop'].forEach(operation => {
    program
      .command(`${network} ${operation}`)
      .description(`Performs ${operation} on all resources in ${network}`)
      .action(() => {
        console.log(`Executing ${operation} on all resources in ${network}`);
        // Implement the action for starting/stopping all resources here
      });
  });
  resources.forEach(resource => {
    operations.forEach(operation => {
      const command = program.command(`${network} ${resource} ${operation} [options]`)
        .description(`Performs ${operation} on ${resource} in ${network}`);

      // Special handling for "tail" operation to accept "-n" flag
      if (operation === 'tail') {
        command.option('-n, --number <number>', 'Number of lines to tail', '10');
      }

      command.action((options) => {
        console.log(`Executing ${operation} on ${resource} in ${network}`, options);
        // Here you would implement the action for each specific operation
      });
    });
  });
});

program.parse(process.argv);
