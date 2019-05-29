import { Component } from "react";
import Head from "next/head";
import Link from "next/link";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Meta content */}
        <Head>
          <title>Snakebyte Studios</title>
        </Head>

        {/* Page content */}
        <main>
          <div id="logo">
            <div className="brandmark" />
            <h1>Snakebyte Studios</h1>
          </div>

          <nav>
            <Link href="/team">
              <a>Team</a>
            </Link>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        </main>

        {/* CSS */}
        <style jsx>{`
          main {
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }

          #logo {
            display: flex;
            align-items: center;
          }

          #logo .brandmark {
            height: 60px;
            width: 70px;
            background-color: black;
          }

          #logo h1 {
            font-size: 60px;
            margin-left: 10px;
          }

          nav {
            margin-top: 40px;
          }

          nav a {
            text-decoration: none;
            color: black;
            text-transform: uppercase;
            margin-right: 60px;
            font-weight: bold;
            font-size: 20px;
          }

          nav a:last-of-type {
            margin-right: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Home;
