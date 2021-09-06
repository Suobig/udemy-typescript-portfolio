import * as esbuild from 'esbuild-wasm'

const unpkgPathPlugin = (): esbuild.Plugin => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /(^index\.js$)/ }, async () => {
        return { path: 'index.js', namespace: 'a' }
      })

      build.onResolve(
        { filter: /^\.+\// },
        async (args: esbuild.OnResolveArgs) => {
          return {
            path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`)
              .href,
            namespace: 'a',
          }
        },
      )

      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: 'a',
        }
      })
    },
  }
}

export default unpkgPathPlugin
