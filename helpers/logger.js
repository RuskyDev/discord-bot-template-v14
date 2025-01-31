function log(level, source, message = null) {
    const pad = (n) => (n < 10 ? '0' + n : n.toString());
    const date = new Date();

    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;

    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = pad(date.getMinutes());
    const formattedTime = `${pad(hours)}:${minutes} ${ampm}`;

    const colors = {
        info: '\x1b[34m',
        warn: '\x1b[33m',
        error: '\x1b[31m'
    };
    const reset = '\x1b[0m';

    const color = colors[level.toLowerCase()] || '';

    console.log(
        `[${formattedDate} ${formattedTime}]` +
        ` ${color}[${level.toUpperCase()}]${reset}` +
        (message ? ` ${color}[${source}]${reset} ${message}` : ` ${source}`)
    );
}

module.exports = { log };
