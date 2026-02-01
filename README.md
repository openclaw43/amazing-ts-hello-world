# 🚀 Amazing TypeScript Hello World

> The most amazing, colorful, and feature-rich Hello World application you'll ever see!

![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/badge/npm-1.0.0-orange.svg)](https://www.npmjs.com/)

## ✨ Features

- 📚 **Beautiful Gradient Text** - Rainbow and gradient-colored console output
- 🎨 **ASCII Art Banner** - Custom logo with gradient effects  
- 🥚 **Easter Eggs** - Hidden features and surprises (try calling it 42 times!)
- 🎯 **100% TypeScript** - Strict type checking enabled
- 🛠️ **CLI & Module** - Use as command-line tool or import as library
- ⚙️ **Configurable** - Environment variables and CLI options
- 🌟 **Professional Setup** - Full build pipeline, linting, and formatting

## 🎬 Demo

```bash
$ npx amazing-ts-hello-world
```

![Demo Screenshot](https://via.placeholder.com/600x200.png?text=Amazing+Hello+World+Demo)

## 📦 Installation

### Global Installation
```bash
npm install -g amazing-ts-hello-world
hello-world --name=Alice
```

### Local Installation
```bash
npm install amazing-ts-hello-world
npx hello-world
```

### Development Setup
```bash
git clone https://github.com/openclaw43/amazing-ts-hello-world.git
cd amazing-ts-hello-world
npm install
npm run build
```

## 🎯 Usage

### CLI Usage

```bash
# Basic usage
hello-world

# With custom name
hello-world --name=Alice

# Disable emojis
hello-world --no-emoji

# Disable rainbow (use standard gradient)
hello-world --no-rainbow

# Force easter egg mode
hello-world --easter-egg

# Show help
hello-world --help

# Show version
hello-world --version
```

### Environment Variables

- `HELLO_NAME` - Default name to use when none provided

### Module Usage

```typescript
// Import the class
import AmazingHelloWorld, { HelloOptions } from 'amazing-ts-hello-world';

// Create instance
const greeter = new AmazingHelloWorld();

// Basic usage
console.log(greeter.sayHello());

// With options
console.log(greeter.sayHello({ 
  name: 'Alice', 
  rainbow: true,
  emoji: true 
}));

// Get stats
console.log(greeter.getStats());

// Quick static method
console.log(AmazingHelloWorld.quickHello('Bob'));

// Get version
console.log(AmazingHelloWorld.getVersion());
```

### TypeScript Support

Full TypeScript types included:

```typescript
interface HelloOptions {
  name?: string;
  gradient?: 'rainbow' | 'cristal' | 'mind' | 'teen' | 'morning' | 'vice' | 'passion' | 'fruit' | 'retro' | 'summer' | 'rainbow';
  rainbow?: boolean;
  emoji?: boolean;
  easterEgg?: boolean;
}
```

## 🎨 Gradient Options

Available gradients from `gradient-string`:
- `rainbow` 🌈 (default)
- `cristal` 💎
- `mind` 🧠
- `teen` 👦
- `morning` 🌅
- `vice` 🎰
- `passion` ❤️
- `fruit` 🍓
- `retro` 📼
- `summer` ☀️

## 🥚 Easter Eggs

This app includes several easter eggs:

1. **The 42nd Greeting** - On the 42nd call, special unicorn magic appears! ✨🦄
2. **Every 5th Greeting** - Sassy commentary about repetition
3. **Random Stats** - 20% chance to show usage stats on exit
4. **Hidden Messages** - Various fun messages throughout

```typescript
// Force easter egg mode
const greeter = new AmazingHelloWorld();
for (let i = 0; i < 42; i++) {
  greeter.sayHello();
}
```

## 🛠️ Development

### Available Scripts

```bash
# Build the project
npm run build

# Run in development
npm run dev

# Run with watch mode
npm run dev:watch

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Clean build artifacts
npm run clean
```

### Project Structure

```
amazing-ts-hello-world/
├── src/
│   ├── AmazingHelloWorld.ts  # Main class
│   ├── cli.ts                  # CLI entry point
│   └── types.ts               # Type definitions
├── dist/                      # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

## 🧪 Testing

The project includes comprehensive tests:

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage
```

## 📝 Examples

### Basic Example

```typescript
import AmazingHelloWorld from 'amazing-ts-hello-world';

const app = new AmazingHelloWorld();
console.log(app.sayHello({ name: 'Developer' }));
```

### Advanced Configuration

```typescript
import AmazingHelloWorld from 'amazing-ts-hello-world';

const app = new AmazingHelloWorld();

// Custom gradient
console.log(app.sayHello({
  name: 'TypeScript',
  gradient: 'vice',
  emoji: true,
  rainbow: false
}));
```

### Async Usage

```typescript
import AmazingHelloWorld from 'amazing-ts-hello-world';

async function greet() {
  const app = new AmazingHelloWorld();
  const message = app.sayHello({ name: 'Async World' });
  
  // Do something with the greeting
  await sendToAPI(message);
  
  return app.getStats();
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Built with ❤️ using TypeScript
- Powered by [gradient-string](https://github.com/bokub/gradient-string) for beautiful colors
- Inspired by every "Hello World" that came before it

## 📊 Stats

```typescript
import AmazingHelloWorld from 'amazing-ts-hello-world';

const app = new AmazingHelloWorld();
console.log(app.getStats());

// Example output:
// {
//   greetingsIssued: 1,
//   easterEggsFound: 0,
//   awesomenessLevel: 'Maximum',
//   unicornStatus: 'Hidden'
// }
```

---

**Made with 🚀 by OpenClaw AI**

> "Hello World" is just the beginning of an amazing journey!
</content>