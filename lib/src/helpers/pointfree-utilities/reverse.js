// reverse :: [a] -> [a]
export const reverse = x => (Array.isArray(x) ? x.reverse() : x.split('').reverse().join(''));
