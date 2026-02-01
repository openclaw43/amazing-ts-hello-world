import AmazingHelloWorld from '../AmazingHelloWorld';

describe('AmazingHelloWorld', () => {
  let greeter: AmazingHelloWorld;
  
  beforeEach(() => {
    greeter = new AmazingHelloWorld();
  });

  describe('sayHello', () => {
    it('should return a greeting with default name "World"', () => {
      const result = greeter.sayHello();
      expect(result).toContain('Hello, World!');
      expect(result).toContain('👋');
    });

    it('should use custom name when provided', () => {
      const result = greeter.sayHello({ name: 'Alice' });
      expect(result).toContain('Hello, Alice!');
    });

    it('should not include emojis when emoji option is false', () => {
      const result = greeter.sayHello({ emoji: false });
      expect(result).not.toContain('👋');
      expect(result).not.toContain('🎊');
    });

    it('should include call count', () => {
      greeter.sayHello();
      const result = greeter.sayHello();
      expect(result).toContain('[Greeting #2]');
    });

    it('should increment call count correctly', () => {
      for (let i = 1; i <= 5; i++) {
        const result = greeter.sayHello();
        expect(result).toContain(`[Greeting #${i}]`);
      }
    });
  });

  describe('getStats', () => {
    it('should return correct initial stats', () => {
      const stats = greeter.getStats();
      expect(stats).toEqual({
        greetingsIssued: 0,
        easterEggsFound: 0,
        awesomenessLevel: 'Maximum',
        unicornStatus: 'Hidden',
      });
    });

    it('should update stats after greetings', () => {
      greeter.sayHello();
      greeter.sayHello();
      const stats = greeter.getStats();
      expect(stats.greetingsIssued).toBe(2);
    });
  });

  describe('static methods', () => {
    it('should return version string', () => {
      expect(AmazingHelloWorld.getVersion()).toBe('1.0.0-amazing');
    });

    it('should provide quick hello method', () => {
      const result = AmazingHelloWorld.quickHello('Test');
      expect(result).toContain('Hello, Test!');
    });
  });

  describe('easter eggs', () => {
    it('should add sassy comment on every 5th greeting', () => {
      // Call 4 times without comment
      for (let i = 0; i < 4; i++) {
        const result = greeter.sayHello();
        expect(result).not.toContain('repetitive');
      }
      // 5th call should have comment
      const result = greeter.sayHello();
      expect(result).toContain('repetitive');
    });

    it('should include easter egg when forced', () => {
      const result = greeter.sayHello({ easterEgg: true });
      expect(result.length).toBeGreaterThan(100); // Easter egg adds significant content
    });
  });
});