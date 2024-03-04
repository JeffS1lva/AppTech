export function formatBytes(bytes: number) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

    let value = bytes;
    let untIndex = 0;

    while (value >= 1024 && untIndex < units.length - 1) {
        value /= 1024;
        untIndex++;
    }

    return `${value.toFixed(1)}${units[untIndex]}`
}