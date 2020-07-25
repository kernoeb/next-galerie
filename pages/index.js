/* eslint-disable camelcase */
import Head from 'next/head'
import Gallery from "react-photo-gallery";
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import React, {useEffect, useState} from 'react'
import { Brightness4 } from '@material-ui/icons/';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import userInfo from "../util/userinfo.json"
import tileData from "./api/pic.json"

const dark_color = '#000000'
const white_color = '#ffffff'

const useStyles = makeStyles((t) => ({
    fab: {
        position: 'fixed',
        bottom: t.spacing(2),
        right: t.spacing(2),
    }
}));

export default withWidth()(function Home(props) {
    const {width} = props
    const pc = isWidthUp('lg', width)
    const [theme, setTheme] = useState(dark_color)
    const classes = useStyles();

    useEffect(() => {
        const tmp = localStorage.getItem('theme')
        if (tmp !== null) setTheme(tmp)
    }, [])

    return (
      <div>
        <Head>
          <title>{`@${userInfo.username}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Fab
          className={classes.fab}
          color="primary"
          aria-label="add"
          onClick={() => {
              if (theme === dark_color) {
                  setTheme(white_color)
                  localStorage.setItem('theme', dark_color)
              } else {
                  setTheme(dark_color)
                  localStorage.setItem('theme', dark_color)
              }
        }}
        >
          <Brightness4 />
        </Fab>

        <main>
          <h1 style={{lineHeight: 1.15, fontSize: '4rem', textAlign: 'center', color: theme === dark_color ? white_color : dark_color}}>
            {`@${userInfo.username}`}
          </h1>

          <p style={{lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'center', color: theme === dark_color ? white_color : dark_color}}>
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
          background-color: ${theme};
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
