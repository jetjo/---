import { forwardRef, useRef, useImperativeHandle } from 'react'

const CommentList = forwardRef(function CommentList(props, ref) {
  const divRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToBottom() {
          if (!divRef.current) return
          divRef.current.scrollTop = divRef.current.scrollHeight
        }
      }
    },
    []
  )

  let comments = []
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>)
  }

  return (
    <div className="CommentList" ref={divRef}>
      {comments}
    </div>
  )
})

export default CommentList
