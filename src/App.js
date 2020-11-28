import React , {useState , useEffect} from 'react'
import './App.css'
import NewsCards from './components/newscards/NewCards'
import AlanBtn from '@alan-ai/alan-sdk-web'
import useStyle from './style'
import { Typography } from '@material-ui/core'
import logo from './assests/logo.jpg'
const alankey = 'e780f75dca382ea715024d1932783e5e2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyle()
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
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
  
    </div>
  )
}

export default App
