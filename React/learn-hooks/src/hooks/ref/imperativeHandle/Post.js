import { forwardRef, useRef, useImperativeHandle } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

const Post = forwardRef(function Post({}, ref) {
  const commentsRef = useRef(null)
  const addCommentRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollAndFocusAddComment() {
          commentsRef.current.scrollToBottom()
          addCommentRef.current.focus()
        }
      }
    },
    []
  ) // NOTE: 如果不传递第三个参数, 每次渲染都会重新执行第二个参数(createHandle)

  return (
    <>
      <article>
        <p>Welcome to my blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  )
})

export default Post
