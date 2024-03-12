import { useTransition } from 'react'

export default function TabButton({ children, onClick, active }) {
  const [isPending, startTransition] = useTransition()
  if (active) {
    return <b>{children}</b>
  }

  // Displaying a pending visual state during the transition
  if (isPending) {
    return <i className="pending">{children}</i>
  }
  return (
    <button
    onClick={() => {
        // 1、Updating the parent component in a transition
        // https://react.dev/reference/react/useTransition#updating-the-parent-component-in-a-transition
        // 2、Preventing unwanted loading indicators
        // https://react.dev/reference/react/useTransition#preventing-unwanted-loading-indicators
        // 3、Building a Suspense-enabled router
        // https://react.dev/reference/react/useTransition#building-a-suspense-enabled-router
        startTransition(() => {
          onClick() // NOTE: 如果父组件的`onClick`方法中有更改状态, 则对状态的变更也会是非阻塞的
        })
      }}
    >
      {children}
    </button>
  )
}
