import ulog from 'ulog';

ulog.level = ulog.DEBUG;

function myFormat(logger, method, args) {
    console.debug(logger, method, args);

    // add the logger name to the call
    args.unshift(logger.name + ': ');
}

ulog.formats.push(myFormat); // from here on, our format is used

export default ulog;
