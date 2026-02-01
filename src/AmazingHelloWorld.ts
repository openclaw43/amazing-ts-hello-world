import gradient from 'gradient-string';
import chalk from 'chalk';

export interface HelloOptions {
  name?: string;
  gradient?: keyof typeof gradient;
  rainbow?: boolean;
  emoji?: boolean;
  easterEgg?: boolean;
}

const AMAZING_BANNER = `
${chalk.bold.cyan('╔════════════════════════════════════════════════════════╗')}
${chalk.bold.cyan('║')}  ${gradient.rainbow('   __  __ _       _     ___  _____')}      ${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}  ${gradient.rainbow('  |  \/  (_)_ __ (_)___|__)/  ___|')}   ${gradient.cristal('★')}${' '.repeat(18)}${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}  ${gradient.rainbow('  | |\/| | | \'_ \\| / __|_ \\___ \\')}  ${gradient.cristal('★★')}${' '.repeat(16)}${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}  ${gradient.rainbow('  |_|  |_|_| | |_|_\\___/___/____/')}.${gradient.cristal('★★★')}${' '.repeat(14)}${chalk.bold.cyan('║')}
${chalk.bold.cyan('║')}                                                       ${chalk.bold.cyan('║')}
${chalk.bold.cyan('╚════════════════════════════════════════════════════════╝')}
`;

const EASTER_EGG_MESSAGES = [
  "🦄 Congrats! You found the magical unicorn mode!",
  "🌈 The rainbow bridge appears only for the worthy!",
  "✨ You're not just saying hello, you're saying HELLO WORLD!",
  "🚀 To infinity and beyond! Wait... wrong movie.",
  "🎉 Party mode: ACTIVATED!",
];

export class AmazingHelloWorld {
  private callCount = 0;

  sayHello(options: HelloOptions = {}): string {
    this.callCount++;
    
    const config = {
      name: options.name || process.env.HELLO_NAME || 'World',
      gradient: options.gradient || 'rainbow',
      rainbow: options.rainbow ?? true,
      emoji: options.emoji ?? true,
      easterEgg: options.easterEgg ?? (this.callCount === 42),
    };

    let output = '';

    // Add banner
    output += AMAZING_BANNER + '\n';

    // Easter egg check
    if (config.easterEgg || this.callCount === 42) {
      output += this.createEasterEgg() + '\n\n';
    }

    // Create the main greeting with gradient
    const greeting = `Hello, ${config.name}!`;
    let styledGreeting: string;

    if (config.rainbow) {
      styledGreeting = gradient.rainbow(greeting);
    } else {
      const grad = gradient[config.gradient] || gradient.rainbow;
      styledGreeting = grad(greeting);
    }

    output += `${config.emoji ? '👋 ' : ''}${styledGreeting}${config.emoji ? ' 🎊' : ''}`;

    // Add some flair
    if (this.callCount % 5 === 0) {
      output += `\n${chalk.dim('(This is getting repetitive, isn\'t it?)')}`;
    }

    // Add the call count for fun
    output += `\n${chalk.gray(`[Greeting #${this.callCount}]`)}`;

    return output;
  }

  private createEasterEgg(): string {
    const message = EASTER_EGG_MESSAGES[Math.floor(Math.random() * EASTER_EGG_MESSAGES.length)];
    return gradient.mind.multiline(message);
  }

  getStats() {
    return {
      greetingsIssued: this.callCount,
      easterEggsFound: this.callCount >= 42 ? 1 : 0,
      awesomenessLevel: 'Maximum',
      unicornStatus: this.callCount === 42 ? 'Spotted!' : 'Hidden',
    };
  }

  // A fun static method
  static getVersion(): string {
    return '1.0.0-amazing';
  }

  // Another static method for quick use
  static quickHello(name: string = 'World'): string {
    const instance = new AmazingHelloWorld();
    return instance.sayHello({ name });
  }
}

// Default export
export default AmazingHelloWorld;