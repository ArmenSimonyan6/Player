export const DOT = '•';

export const joinStrings = (strings: (string | undefined | null)[], separator: string): string => {
  return strings.filter(Boolean).join(` ${separator} `);
};
