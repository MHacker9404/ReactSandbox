import winston from 'winston';

// const customColors = {
//     error: 'red',
//     warn: 'yellow',
//     info: 'blue',
// };
// winston.addColors(customColors);
const instance = winston.createLogger({
    transports: [new winston.transports.Console()],
    label: 'abcd',
    level: 'debug',
    format: winston.format.combine(
        // winston.format.colorize({ all: true }),
        // winston.format.json(),
        // winston.format.timestamp(),
        winston.format.simple(),
        // winston.format.printf((info) => `${info.timestamp} ${info.level} ${info.message}`),
    ),
});

export default console;
