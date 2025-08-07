export const useBaseClassNames = (className: string, styles: Record<string, string>) => {
  const baseClassName = (el = '', mods: (string | false | undefined)[] = []) =>
    [
      el ? `${className}${el}` : className,
      ...mods.filter(Boolean).map(m => `${className}${el}--${m}`),
    ]
      .map(c => styles[c])
      .filter(Boolean)
      .join(' ');

  return { baseClassName };
};
