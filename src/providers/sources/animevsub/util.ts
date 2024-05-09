export function urltoId(url: any) {
  const splitted = url.split('/').filter((a: any) => a);
  const lastSplit = splitted[splitted.length - 1];
  return lastSplit.split('-').slice(-1)[0].split('a')[1];
}
