const = processEntries =

class Post {
  constructor () {

  }

  static load = async (entriesPath, hook) => {
    const paths = glob.sync(`${entriesPath}/**/*.md`, { root: process.cwd() })
    return new this(...processEntries(paths, entriesPath)
      .filter(({data}) => data.published !== false))
  }
}
