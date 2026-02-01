#!/usr/bin/env node

import AmazingHelloWorld from './AmazingHelloWorld';

interface CliOptions {
  name?: string;
  emoji?: boolean;
  rainbow?: boolean;
  easterEgg?: boolean;
}

const cli = new AmazingHelloWorld();
const args = process.argv.slice(2);

// Parse CLI arguments
const options: CliOptions = {};
for (const arg of args) {
  if (arg.startsWith('--name=')) {
    const nameValue = arg.split('=')[1];
    if (nameValue) {
      options['name'] = nameValue;
    }
  } else if (arg === '--no-emoji') {
    options['emoji'] = false;
  } else if (arg === '--no-rainbow') {
    options['rainbow'] = false;
  } else if (arg === '--easter-egg') {
    options['easterEgg'] = true;
  } else if (arg === '--help' || arg === '-h') {
    console.log(`
🚀 Amazing TypeScript Hello World CLI

Usage: hello-world [options]

Options:
  --name=<name>     Set custom name (default: World)
  --no-emoji        Disable emojis
  --no-rainbow      Disable rainbow gradient
  --easter-egg      Force easter egg mode
  --help, -h        Show help
  --version, -v     Show version

Examples:
  hello-world
  hello-world --name=Alice
  hello-world --name=Bob --no-emoji

Environment Variables:
  HELLO_NAME        Default name to use
`);
    process.exit(0);
  } else if (arg === '--version' || arg === '-v') {
    console.log(AmazingHelloWorld.getVersion());
    process.exit(0);
  }
}

console.log(cli.sayHello(options));

// Show stats on exit
process.on('exit', () => {
  if (Math.random() > 0.8) {
    console.log('\n' + JSON.stringify(cli.getStats(), null, 2));
  }
});