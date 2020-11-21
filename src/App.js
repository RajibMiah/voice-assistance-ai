import React , {useState , useEffect} from 'react'
import './App.css'
import NewsCards from './components/newscards/NewCards'
import AlanBtn from '@alan-ai/alan-sdk-web'
const alankey = 'e780f75dca382ea715024d1932783e5e2e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(()=>{
    AlanBtn({
      key: alankey,
      onCommand:({command , articles})=>{
         if(command === 'newHeadlines')
         {
           setNewsArticles(articles)
           console.log(newsArticles)
         }
      }
    })
  })
  return (
    <div className = 'App'>
      <h1 >Voice assistance news app</h1>
      <h2>say 'what is your name or what can i do here '</h2>
      <NewsCards articles = {newsArticles}/>
    </div>
  )
}

export default App
