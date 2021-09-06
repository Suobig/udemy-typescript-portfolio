import { FC, useState, useEffect, useRef } from 'react'
import * as esbuild from 'esbuild-wasm'
import unpkgPathPlugin from '../plugins/unpkgPathPlugin'
import fetchPlugin from '../plugins/fetchPlugin'

const App: FC = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')
  const ref = useRef<esbuild.Service>()

  const onSubmit = async () => {
    if (!ref.current) {
      return
    }

    const result = await ref.current.build({
      bundle: true,
      write: false,
      entryPoints: ['index.js'],
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    })
    setCode(result.outputFiles[0].text)
  }

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: './esbuild.wasm',
    })
  }

  useEffect(() => {
    startService()
  }, [])

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  )
}

export default App
