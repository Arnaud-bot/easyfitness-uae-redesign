import CountUpImport from 'react-countup'

// Vite's dependency pre-bundling resolves react-countup's CJS default export
// as the whole module namespace (not the component itself), because its
// package.json points "main" at a directory rather than a file. Unwrap
// defensively so this keeps working regardless of how esbuild pre-bundles it.
export const CountUp =
  typeof CountUpImport === 'function'
    ? CountUpImport
    : (CountUpImport as unknown as { default: typeof CountUpImport }).default
