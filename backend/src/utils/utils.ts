function log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
}


function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export { log, formatDate };
