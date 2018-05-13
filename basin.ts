export const Basin = (x: any) => ({
    tap: (f: any) => Basin(f(x)),
    drop: (f: any) => f(x)
});
