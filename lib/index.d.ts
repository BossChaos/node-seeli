// Type definitions for seeli v18
// TypeScript definitions for ESM module

export interface SeeliOptions {
  name?: string;
  description?: string;
  version?: string;
  use?: string;
  flags?: Record<string, any>;
  [key: string]: any;
}

export interface CommandOptions {
  name: string;
  description?: string;
  usage?: string;
  flags?: Record<string, any>;
  run: (cmd: Command, args: any[]) => Promise<void> | void;
  [key: string]: any;
}

export interface FlagDefinition {
  type?: string;
  description?: string;
  required?: boolean;
  default?: any;
  choices?: any[];
  prompt?: boolean;
  when?: (values: Record<string, any>) => boolean;
  invertWhen?: (values: Record<string, any>) => boolean;
  [key: string]: any;
}

export class Command {
  constructor(options: CommandOptions);
  name: string;
  description: string;
  usage: string;
  flags: Record<string, FlagDefinition>;
  run(cmd: Command, args: any[]): Promise<void> | void;
  help(): string;
  static register(cmd: Command): void;
  static deregister(name: string): void;
  static find(name: string): Command | undefined;
  static list(): Command[];
}

export class Seeli extends Command {
  constructor(options?: SeeliOptions);
  use: string;
  version: string;
  colors: string[];
  register(cmd: Command | Command[]): void;
  run(argv?: string[]): Promise<any>;
  execute(cmd: Command, args: any[]): Promise<any>;
  help(): string;
  static get version(): string;
  static get colors(): string[];
}

export interface SeeliStatic {
  new (options?: SeeliOptions): Seeli;
  version: string;
  colors: string[];
  register(cmd: Command | Command[]): void;
  run(argv?: string[]): Promise<any>;
}

// Main export
declare const seeli: SeeliStatic & {
  Seeli: typeof Seeli;
  Command: typeof Command;
  [key: string]: any;
};

export default seeli;

// Utility modules
export * from './conf.js';
export * from './registry.js';
export * from './colorize.js';
