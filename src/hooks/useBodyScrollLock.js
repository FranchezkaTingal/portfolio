import { useEffect } from 'react'

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return undefined

    const scrollY = window.scrollY
    const body = document.body
    const documentElement = document.documentElement
    const previousStyles = {
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
      htmlScrollBehavior: documentElement.style.scrollBehavior,
    }

    documentElement.style.scrollBehavior = 'auto'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    return () => {
      body.style.overflow = previousStyles.bodyOverflow
      body.style.position = previousStyles.bodyPosition
      body.style.top = previousStyles.bodyTop
      body.style.left = previousStyles.bodyLeft
      body.style.right = previousStyles.bodyRight
      body.style.width = previousStyles.bodyWidth
      window.scrollTo(0, scrollY)
      documentElement.style.scrollBehavior = previousStyles.htmlScrollBehavior
    }
  }, [isLocked])
}
