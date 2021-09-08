import React, { Suspense, useEffect } from 'react'
import classes from './App.module.css'

const Chip = React.lazy(() => import('app2/Chip'))
function App() {
  useEffect(() => {
    import('app2/components')
      .then((res: any) => {
        console.log(`res`, res)
        setTimeout(() => {
          res.message.success('加载remote项目成功，我是来自remote的message')
        }, 500)
      })
      .catch((err) => {
        console.log(`components-err`, err)
      })
  }, [])
  return (
    <div>
      珊珊珊珊
      <Suspense fallback="loading...">
        <Chip />
      </Suspense>
    </div>
  )
}
export default App
