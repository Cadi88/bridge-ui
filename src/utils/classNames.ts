/**
 * Utility function to merge CSS module class names
 * @param classes - Array of class names or conditional class objects
 * @returns Merged class name string
 */
export function cn(...classes: (string | undefined | null | false | Record<string, boolean | undefined>)[]): string {
    return classes
        .filter(Boolean)
        .map((cls) => {
            if (typeof cls === 'string') {
                return cls;
            }
            if (cls && typeof cls === 'object' && !Array.isArray(cls)) {
                return Object.keys(cls)
                    .filter((key) => cls[key])
                    .join(' ');
            }
            return '';
        })
        .join(' ')
        .trim();
}
