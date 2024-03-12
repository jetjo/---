import { useState, useTransition, Suspense } from 'react'
import AboutTab from './AboutTab'
import ContactTab from './ContactTab'
import PostsTab from './PostsTab'
import TabButton from './TabButton'
import PostsTabExternal from './PostsTab-external'

export default function App() {
  const [tab, setTab] = useState('about')

  const [isPending, startTransition] = useTransition()

  function loadTab(tab) {
    // startTransition(() => {
    //   setTab(tab)
    // })
    // NOTE: 也可以约定好,由`loadTab`的调用者来调用`startTransition`函数
    // 比如在`TabButton`组件中调用本组件传递的`onClick`函数时,
    // 将对`onClick`的调用包装在`startTransition`函数中
    // 这样本组件执行`setTab`时对`tab`的变更也会是非阻塞的
    setTab(tab)
  }

  return (
    <Suspense fallback={<h1>🌀 Loading...</h1>}>
      <TabButton active={tab === 'about'} onClick={() => loadTab('about')}>
        About
      </TabButton>
      <TabButton active={tab === 'posts'} onClick={() => loadTab('posts')}>
        Posts(slow)
      </TabButton>
      <TabButton active={tab === 'contact'} onClick={() => loadTab('contact')}>
        Contact
      </TabButton>
      <TabButton active={tab === 'postsExternal'} onClick={() => loadTab('postsExternal')}>
        PostsExt
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
      {tab === 'postsExternal' && <PostsTabExternal />}
    </Suspense>
  )
}
