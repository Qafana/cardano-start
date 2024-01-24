import inquirer from "inquirer";
import chalk from 'chalk'
import ora from 'ora'

export default async function cardanoStart() {
  const { core } = await inquirer.prompt([
    {
      type: 'list',
      name: 'core',
      message: 'Do you want to start the Cardano Node?',
      choices: [
        {
          name: chalk.green('start'),
          value: 'start'
        },
        {
          name: chalk.red('stop'),
          value: 'stop'
        }
      ]
    }
  ])
  if (core == 'start') {
    const spinner = ora('Starting Cardano Node').start()
    setTimeout(() => {
      spinner.succeed('Cardano Node Started')
    }, 2000)
  } else {
    const spinner = ora('Stopping Cardano Node').start()
    setTimeout(() => {
      spinner.succeed('Cardano Node Stopped')
    }, 2000)
  }
}