// sortBy :: Ord b => (a -> b) -> [a] -> [a]

export type sortBy = (fn: (a:any) => any) => (x: any[]) => any[]
