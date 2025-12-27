export const __DIRECT__ = 0;
export const __RUNTIME__ = 1;

export default [
    {
        method: __DIRECT__,
        module: /^react$/g,
        links: ["window", "opener", "SP_REACT"],
    },
    {
        method: __DIRECT__,
        module: /^react-dom$/g,
        links: ["window", "opener", "SP_REACTDOM"],
    },
];
