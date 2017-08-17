import { resolve, basename, extname, relative, dirname, sep } from 'path'
import fm from 'frontmatter'

export default processEntries = (paths, entriesPath, hooks) => {
  return paths
    .map(path => readFileSync(path, 'utf-8'))
    .map(fm)
    .map(addEntry(paths))
    .map(addCategory(entriesPath))
    .map(addUrl)
    .map(addDate)
}

