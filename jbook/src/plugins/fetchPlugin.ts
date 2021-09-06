import * as esbuild from 'esbuild-wasm'
import axios from 'axios'
import localforage from 'localforage'

const packageCache = localforage.createInstance({
  name: 'packages',
})

const fetchPlugin = (inputCode: string): esbuild.Plugin => {
  return {
    name: 'fetch-plugin',
    setup(build) {
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args)

        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: inputCode,
          }
        }

        const cachedPackageData =
          await packageCache.getItem<esbuild.OnLoadResult>(args.path)
        if (cachedPackageData) {
          return cachedPackageData
        }

        const { data, request } = await axios.get(args.path)

        const packageData: esbuild.OnLoadResult = {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname,
        }

        await packageCache.setItem<esbuild.OnLoadResult>(args.path, packageData)

        return packageData
      })
    },
  }
}

export default fetchPlugin
