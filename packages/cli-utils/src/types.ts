
export interface BaseBuildEntry {
  builder?: 'untyped' | 'rollup' | 'mkdist'
  input: string
  name?: string
  outDir?: string
  declaration?: boolean
}
export {}
