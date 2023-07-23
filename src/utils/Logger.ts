import chalk from 'chalk';
import { loggerDateFormatter } from './helpers';

type LogMessage = string | number | boolean | object | null;

export class Logger {
  static _getLogHeader(): string {
    const timestamp = loggerDateFormatter();
    const appInfo = chalk.green(`[App] ${process.pid}`);
    const logHeader = `${appInfo}  - ${timestamp}  `;
    return logHeader;
  }

  static log(message: LogMessage): void {
    const logHeader = Logger._getLogHeader();
    console.log(logHeader, chalk.green(`[LOG] ${message}`));
  }

  static info(message: LogMessage): void {
    const logHeader = Logger._getLogHeader();
    console.log(logHeader, chalk.yellow(`[INFO] ${message}`));
  }

  static error(message: LogMessage | object): void {
    const logHeader = Logger._getLogHeader();
    console.error(logHeader, chalk.red(`[ERROR] ${message}`));
  }
}
