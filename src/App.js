import logo from "./logo.svg";
import "./App.css";
import LatestImage from "./assets/images/latest-image-full.png";
import LatestImageGIF from "./assets/images/optimized-image.gif";
import LockOverlay from "./assets/images/lock-overlay.png";

function App() {
  return (
    <div className="main">
      <section className="checkout-section">
        <div className="checkout-title">
          <h4>3333 Magickeys</h4>
        </div>
        <div className="checkout-container pricing-container">
          <div className="checkout-card unlocked">
            <div className="checkout-card-contents">
              <div className="card-header">
                <div className="phase">
                  <h3>Now</h3>
                  <p>Phase 1</p>
                </div>
                <div className="price">
                  <h4>333€</h4>
                  <p>Supporter price</p>
                </div>
              </div>
              <div className="card-image-with-mobile-info">
                <div className="card-image">
                  <img
                    className="main-img"
                    src={LatestImageGIF}
                    alt={LatestImageGIF}
                  />
                  <img
                    className="card-locked-overlay"
                    src={LockOverlay}
                    alt={LockOverlay}
                  />
                </div>
                <div className="card-phase-info-mobile">
                  <div className="phase">
                    <p>Phase 3</p>
                  </div>
                  <div className="phase-info-large">
                    <p>1111</p>
                  </div>
                  <div className="phase-info">
                    <p>Magickeys</p>
                  </div>
                </div>
              </div>

              <div className="progress-info">
                <div className="card-phase-info">
                  <div className="phase">
                    <p>Phase 1</p>
                  </div>
                  <div className="phase-info">
                    <p>233 Magickeys out of 1111</p>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="card-footer">
              <a href="/#">Be part of history</a>
            </div>
          </div>
          <p className="gradient-mobile-texts">NEXT PHASES LIMITED PRICES</p>
          <div className="checkout-card locked">
            <div className="checkout-card-contents">
              <div className="card-header">
                <div className="phase">
                  <h3>Next</h3>
                  <p>Phase 2</p>
                </div>
                <div className="price">
                  <h4>666€</h4>
                  <p>Utilities price</p>
                </div>
              </div>
              <div className="card-image-with-mobile-info">
                <div className="card-image">
                  <img
                    className="main-img"
                    src={LatestImageGIF}
                    alt={LatestImageGIF}
                  />
                  <img
                    className="card-locked-overlay"
                    src={LockOverlay}
                    alt={LockOverlay}
                  />
                </div>
                <div className="card-phase-info-mobile">
                  <div className="phase">
                    <p>Phase 2</p>
                  </div>
                  <div className="phase-info-large">
                    <p>1111</p>
                  </div>
                  <div className="phase-info">
                    <p>Magickeys</p>
                  </div>
                </div>
              </div>

              <div className="progress-info">
                <div className="card-phase-info">
                  <div className="phase">
                    <p>Phase 2</p>
                  </div>
                  <div className="phase-info">
                    <p>1111 Magickeys</p>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "00%" }}></div>
              </div>
            </div>
            <div className="card-footer">
              <a href="/#">Be part of history</a>
            </div>
          </div>
          <div className="checkout-card locked">
            <div className="checkout-card-contents">
              <div className="card-header">
                <div className="phase">
                  <h3>Next</h3>
                  <p>Phase 3</p>
                </div>
                <div className="price">
                  <h4>999€</h4>
                  <p>Last call price</p>
                </div>
              </div>
              <div className="card-image-with-mobile-info">
                <div className="card-image">
                  <img
                    className="main-img"
                    src={LatestImageGIF}
                    alt={LatestImageGIF}
                  />
                  <img
                    className="card-locked-overlay"
                    src={LockOverlay}
                    alt={LockOverlay}
                  />
                </div>
                <div className="card-phase-info-mobile">
                  <div className="phase">
                    <p>Phase 3</p>
                  </div>
                  <div className="phase-info-large">
                    <p>1111</p>
                  </div>
                  <div className="phase-info">
                    <p>Magickeys</p>
                  </div>
                </div>
              </div>

              <div className="progress-info">
                <div className="card-phase-info">
                  <div className="phase">
                    <p>Phase 3</p>
                  </div>
                  <div className="phase-info">
                    <p>1111 Magickeys</p>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: "00%" }}></div>
              </div>
            </div>
            <div className="card-footer">
              <a href="/#">Be part of history</a>
            </div>
          </div>
          <div className="mobile-book-button pricing-container">
            <a href="/#">Be part of history</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
