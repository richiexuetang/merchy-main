import styled from '@emotion/styled';
import { Layout } from '../components';

const StyledPage = styled.div`
  .page {
  }
`;

export default function Home() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome merchy-main 👋
            </h1>
          </div>

          <div id="middle-content">
            <div id="learning-materials" className="rounded shadow">
              <h2>Learning materials</h2>
              <a
                href="https://nx.dev/getting-started/intro?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  Documentation
                  <span> Everything is in there </span>
                </span>
              </a>
              <a
                href="https://blog.nrwl.io/?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  Blog
                  <span> Changelog, features & events </span>
                </span>
              </a>
              <a
                href="https://www.youtube.com/c/Nrwl_io/videos?utm_source=nx-project&sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
                className="list-item-link"
              >
                <span>
                  YouTube channel
                  <span> Nx Show, talks & tutorials </span>
                </span>
              </a>
            </div>
          </div>

          <div id="commands" className="rounded shadow">
            <h2>Next steps</h2>
            <p>Here are some things you can do with Nx:</p>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

Home.Layout = Layout;
