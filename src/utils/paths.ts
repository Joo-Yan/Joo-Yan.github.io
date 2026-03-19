const baseUrl = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  return `${baseUrl}${path.replace(/^\//, '')}`;
}

export function stripBase(path: string): string {
  if (baseUrl === '/') {
    return path || '/';
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  if (!path.startsWith(normalizedBase)) {
    return path || '/';
  }

  const stripped = path.slice(normalizedBase.length);
  return stripped || '/';
}
