import Head from 'next/head'
import Gallery from "react-photo-gallery";
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import userInfo from "../util/userinfo.json"
import tileData from "./api/pic.json"

export default withWidth()(function Home(props) {
    const {width} = props
    const pc = isWidthUp('lg', width)
    return (
      <div>
        <Head>
          <title>{`@${userInfo.username}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <main>
          <h1 style={{lineHeight: 1.15, fontSize: '4rem', textAlign: 'center'}}>
            {`@${userInfo.username}`}
          </h1>

          <p style={{lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'center'}}>
            {userInfo.description}
          </p>

          <div style={{marginLeft: pc ? 300 : 10, marginRight: pc ? 300 : 10}}>
            <Gallery photos={tileData} onClick={(e, {index}) => {console.log(tileData[index])}} />
          </div>
        </main>

        <style jsx global>
          {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
        </style>
      </div>
    )
})
