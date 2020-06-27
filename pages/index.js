import Head from 'next/head'
import ImageGridList from "../components/photos";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>@kernoeb</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <main>
                <h1 className="title">
                    @kernoeb
                </h1>

                <p className="description">
                    J'ai récemment supprimé Instagram, et Pixelfed ne me plaît pas alors me voilà ici
                </p>

                <div className="grid" >
                    <ImageGridList />
                </div>
            </main>

            <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
        
        @media (max-width: 600px) {
          .description {
            margin-left: 80px;
            margin-right: 80px;
          }
        }
      `}</style>

            <style jsx global>{`
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
      `}</style>
        </div>
)
}
