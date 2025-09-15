<template>
  <div class="home-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-wrap">
          <div class="content">
            <h1 class="main-title">
              Type Soul Codes - All Active Codes List
            </h1>
            <div class="update-info">
              <span class="live-tag">LIVE</span>
              <span class="update-text"
                >Last Updated: {{ currentDateTime }} - {{ activeCodesCount }} Active Codes</span
              >
            </div>
            <p class="hero-description">
              Welcome to the fastest and most comprehensive Type Soul codes website, updated daily!
              Get verified Type Soul codes rewards with 99.9% success rate. Discover the latest Type
              Soul codes and claim your free rewards instantly.
            </p>
            <div class="hero-buttons">
              <a
                href="javascript:void(0)"
                @click="scrollToSection('active-codes')"
                class="btn-primary"
              >
                <span class="btn-icon">
                  <svg t="1757749099958" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9175" width="200" height="200"><path d="M490.8 206c-4.3-22.7-17.4-45.9-36.9-65.4-24-24-53.9-38.3-79.9-38.3-9.5 0-23 2.1-32.8 11.9-23.4 23.4-11.3 75.1 26.4 112.8 24 24 53.9 38.3 79.9 38.3 9.5 0 23-2.1 32.8-11.9 10.5-10.6 14.3-27.4 10.5-47.4zM655.1 227c19.5-19.5 32.6-42.7 36.9-65.4 3.8-20 0-36.8-10.5-47.4-9.9-9.9-23.3-11.9-32.8-11.9-26.1 0-56 14.3-79.9 38.3-37.7 37.7-49.8 89.4-26.4 112.8 9.9 9.9 23.3 11.9 32.8 11.9 26 0 55.9-14.3 79.9-38.3zM468.8 303.4h84.9V923h-84.9z" fill="#FFAEBF" p-id="9176"></path><path d="M870.9 265.3H669.6c4.3-3.6 8.4-7.3 12.4-11.3 24.9-24.9 41.7-55.2 47.4-85.3 6.2-32.8-1.3-61.7-21-81.4-15.1-15.1-35.8-23.1-59.8-23.1-36 0-75.9 18.5-106.9 49.5-12.5 12.5-22.6 26-30.5 39.8-7.9-14.1-18.1-27.6-30.3-39.8-31-31-70.9-49.5-106.9-49.5-24 0-44.7 8-59.8 23.1-39.3 39.4-27.8 112.6 26.4 166.7 4 4 8.2 7.8 12.4 11.3H151.7c-43.6 0-79.1 35.5-79.1 79.1V365c0 43.6 35.5 79.1 79.1 79.1h11.6v438.1c0 43.6 35.5 79.1 79.1 79.1h537.7c43.6 0 79.1-35.5 79.1-79.1V444h11.6c43.6 0 79.1-35.5 79.1-79.1v-20.6c0.1-43.5-35.4-79-79-79z" fill="#E66978" p-id="9177"></path><path d="M568.7 140.6c24-24 53.9-38.3 79.9-38.3 9.5 0 23 2.1 32.8 11.9 10.5 10.5 14.3 27.4 10.5 47.4-4.3 22.7-17.4 45.9-36.9 65.4-24 24-53.9 38.3-79.9 38.3-9.5 0-23-2.1-32.8-11.9-23.4-23.5-11.4-75.1 26.4-112.8zM367.5 227c-37.7-37.7-49.8-89.4-26.4-112.8 9.9-9.9 23.3-11.9 32.8-11.9 26.1 0 56 14.3 79.9 38.3 19.5 19.5 32.6 42.7 36.9 65.4 3.8 20 0 36.8-10.5 47.4-9.9 9.9-23.3 11.9-32.8 11.9-26 0-55.9-14.3-79.9-38.3z" fill="#FFAEBF" p-id="9178"></path><path d="M430.7 923H242.4c-22.6 0-40.9-18.4-40.9-40.9V444h229.2v479zM430.7 405.9h-279c-22.6 0-40.9-18.4-40.9-40.9v-20.6c0-22.6 18.4-40.9 40.9-40.9h279v102.4z" fill="#FFD976" p-id="9179"></path><path d="M468.8 303.4h84.9V923h-84.9z" fill="#FFAEBF" p-id="9180"></path><path d="M821.1 882.1c0 22.6-18.4 40.9-40.9 40.9H591.9V444h229.2v438.1zM911.8 365c0 22.6-18.4 40.9-40.9 40.9h-279V303.4h279c22.6 0 40.9 18.4 40.9 40.9V365z" fill="#FFD976" p-id="9181"></path></svg>
                </span>
                Get Free Codes
              </a>
              <a
                href="javascript:void(0)"
                @click="scrollToSection('how-to-redeem')"
                class="btn-secondary"
              >
                <span class="btn-icon">
                  <svg t="1757749162730" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12781" width="200" height="200"><path d="M512.32 0.64A511.616 511.616 0 0 0 0.64 512.32 511.616 511.616 0 0 0 512.32 1024 511.616 511.616 0 0 0 1024 512.32 511.616 511.616 0 0 0 512.32 0.64z m56.832 852.8H455.488v-113.728h113.664v113.728z m129.472-370.944c-55.616 84.8-128.32 97.216-128.32 200.128H454.784v-33.6c-2.176-65.024 28.16-117.76 87.36-158.08 61.44-44.8 81.792-57.6 81.792-120.192 0-68.032-66.56-86.656-112.448-86.656-76.864 0-112.896 59.072-112.896 114.88l-113.28-0.384c0-163.392 125.056-227.008 253.568-227.008 120.64 0 200.768 89.984 200.832 174.72 0 53.952-11.072 92.352-41.088 136.192z" fill="#FA7268" p-id="12782"></path></svg>
                </span>
                How to Redeem
              </a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-icon">
                  <svg t="1757749187715" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13814" width="200" height="200"><path d="M377.9 114.1h358.3l-136.4 268 231.5 0.3-485.1 559.3 139.5-356.4H222.6z" fill="#FED928" p-id="13815"></path></svg>
                </span>
                <span class="stat-text">Fresh Type Soul codes updated daily</span>
              </div>
              <div class="user-rating">
                <div class="stars">★★★★★</div>
                <span class="rating-text">from 99+ happy users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Active Codes Section -->
    <section class="active-codes" id="active-codes">
      <div class="container">
        <div class="active-codes-wrap">
          <h2 class="section-title">Active Codes List</h2>
          <p class="section-description">
            Discover the latest working Type Soul codes that are currently active and ready to use.
            Our team monitors and verifies each Type Soul codes daily to ensure maximum success
            rate. These Type Soul codes provide various rewards including soul coins, skill points,
            experience boosts, and exclusive items to enhance your Type Soul journey.
          </p>
          <div class="codes-grid">
            <div v-for="code in activeCodes" :key="code.id" class="code-card">
              <div class="card-header">
                <div class="status-tag active">Active</div>
              </div>
              <div class="code-content">
                <div class="code-string">{{ code.code }}</div>
                <div class="code-reward">{{ code.reward }}</div>
              </div>
              <button class="copy-button" @click="copyCode(code.code)">
                <span class="copy-icon">
                  <svg t="1757749289428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18475" width="200" height="200"><path d="M921.6 819.2h-102.4v102.4c0 56.32-46.08 102.4-102.4 102.4H102.4c-56.32 0-102.4-46.08-102.4-102.4V307.2c0-56.32 46.08-102.4 102.4-102.4h102.4V102.4c0-56.32 46.08-102.4 102.4-102.4h614.4c56.32 0 102.4 46.08 102.4 102.4v614.4c0 56.32-46.08 102.4-102.4 102.4zM153.6 307.2c-30.72 0-51.2 20.48-51.2 51.2v512c0 30.72 20.48 51.2 51.2 51.2h512c30.72 0 51.2-20.48 51.2-51.2V358.4c0-30.72-20.48-51.2-51.2-51.2H153.6z m768-153.6c0-30.72-20.48-51.2-51.2-51.2H358.4c-30.72 0-51.2 20.48-51.2 51.2v51.2h409.6c56.32 0 102.4 46.08 102.4 102.4v409.6h51.2c30.72 0 51.2-20.48 51.2-51.2V153.6z" fill="#FFAC02" p-id="18476"></path></svg>
                </span>
                copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expired Codes Section -->
    <section class="expired-codes" id="expired-codes">
      <div class="container">
        <div class="expired-codes-wrap">
          <h2 class="section-title">Expired Codes List</h2>
          <p class="section-description">
            These codes have expired and are no longer redeemable in Type Soul. While they cannot be
            used anymore, they serve as a historical reference for players who might have missed
            them. We keep this archive to help you track which codes you may have already used and
            to understand the pattern of code releases.
          </p>
          <div class="codes-grid">
            <div v-for="code in expiredCodes" :key="code.id" class="code-card expired">
              <div class="card-header">
                <div class="status-tag expired">Expired</div>
              </div>
              <div class="code-content">
                <div class="code-string">{{ code.code }}</div>
                <div class="code-reward">{{ code.reward }}</div>
              </div>
              <button class="copy-button" @click="copyCode(code.code)">
                <span class="copy-icon">
                  <svg t="1757749289428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18475" width="200" height="200"><path d="M921.6 819.2h-102.4v102.4c0 56.32-46.08 102.4-102.4 102.4H102.4c-56.32 0-102.4-46.08-102.4-102.4V307.2c0-56.32 46.08-102.4 102.4-102.4h102.4V102.4c0-56.32 46.08-102.4 102.4-102.4h614.4c56.32 0 102.4 46.08 102.4 102.4v614.4c0 56.32-46.08 102.4-102.4 102.4zM153.6 307.2c-30.72 0-51.2 20.48-51.2 51.2v512c0 30.72 20.48 51.2 51.2 51.2h512c30.72 0 51.2-20.48 51.2-51.2V358.4c0-30.72-20.48-51.2-51.2-51.2H153.6z m768-153.6c0-30.72-20.48-51.2-51.2-51.2H358.4c-30.72 0-51.2 20.48-51.2 51.2v51.2h409.6c56.32 0 102.4 46.08 102.4 102.4v409.6h51.2c30.72 0 51.2-20.48 51.2-51.2V153.6z" fill="#FFAC02" p-id="18476"></path></svg>
                </span>
                copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Redeem Section -->
    <section class="how-to-redeem" id="how-to-redeem">
      <div class="container">
        <div class="how-to-redeem-wrap">
          <h2 class="section-title">How to Redeem Type Soul Codes</h2>
          <p class="section-description">
            Follow our comprehensive guide to successfully redeem Type Soul codes and claim your
            free rewards. Type Soul makes it easy to enhance your gaming experience with these
            exclusive Type Soul codes that provide valuable in-game items, currency, and abilities.
          </p>
          <div class="redeem-layout">
            <div class="steps-column">
              <h3 class="column-title">Step-by-Step Guide</h3>
              <div class="step-cards">
                <div class="step-card">
                  <div class="step-icon">1</div>
                  <div class="step-content">
                    <h4>Launch Type Soul in Roblox</h4>
                  </div>
                </div>
                <div class="step-card">
                  <div class="step-icon">2</div>
                  <div class="step-content">
                    <h4>Create and Level Up Character</h4>
                    <p>Create a character and level them up until you're at least Semi-Grade 2</p>
                  </div>
                </div>
                <div class="step-card">
                  <div class="step-icon">3</div>
                  <div class="step-content">
                    <h4>Find the Gift Box Button</h4>
                    <p>Select the button at the top of your screen that looks like a gift box</p>
                  </div>
                </div>
                <div class="step-card">
                  <div class="step-icon">4</div>
                  <div class="step-content">
                    <h4>Enter Type Soul Codes</h4>
                    <p>
                      Type a Type Soul codes into the text box and press the Enter key to receive
                      your rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="tips-column">
              <h3 class="column-title">Pro Tips</h3>
              <div class="tips-card">
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>Check our website daily for new Type Soul codes updates</h4>
                  </div>
                </div>
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>Join the official Type Soul Discord for Type Soul codes announcements</h4>
                  </div>
                </div>
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>Redeem Type Soul codes as soon as possible before they expire</h4>
                  </div>
                </div>
                <div class="tip-item">
                  <div class="tip-icon">✓</div>
                  <div class="tip-content">
                    <h4>
                      Share working Type Soul codes with friends to help the Type Soul community
                    </h4>
                  </div>
                </div>
              </div>
              <div class="redeem-placeholder">
                <img class="redeem-image" :src="robloxButtonImage" alt="Redeem Codes in Type Soul">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us" id="why-choose-us">
      <div class="container">
        <div class="why-choose-us-wrap">
          <h2 class="section-title">Why Choose Our Website</h2>
          <p class="section-description">
            We are the leading platform for Type Soul codes with unmatched reliability, speed, and
            user satisfaction. Here's what makes us the best choice for all your Type Soul codes
            redemption needs.
          </p>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg t="1757749457592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19512" width="200" height="200"><path d="M377.9 114.1h358.3l-136.4 268 231.5 0.3-485.1 559.3 139.5-356.4H222.6z" fill="#FED928" p-id="19513"></path></svg>
              </div>
              <h3>Lightning Fast Updates</h3>
              <p>
                We update our Type Soul codes database daily, ensuring you get the latest working
                Type Soul codes before anyone else. Our system monitors game updates daily.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg t="1757749704522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27124" width="200" height="200"><path d="M614.4512 204.8H409.6a51.2 51.2 0 1 1-102.4 0H204.8v102.4h614.4V204.8h-102.3488a51.2 51.2 0 1 1-102.4 0z m102.4-102.4H870.4a51.2 51.2 0 0 1 51.2 51.2v819.2a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2V153.6a51.2 51.2 0 0 1 51.2-51.2h153.6V51.2a51.2 51.2 0 1 1 102.4 0v51.2h204.8512V51.2a51.2 51.2 0 0 1 102.4 0v51.2zM819.2 409.6H204.8v512h614.4V409.6z m-144.4864 82.9952l72.3968 72.448-289.5872 289.5872L276.48 673.6384l72.3968-72.3968 108.6464 108.5952 217.1904-217.2416z" fill="#0F8885" p-id="27125"></path></svg>
              </div>
              <h3>99.9% Success Rate</h3>
              <p>
                Every Type Soul codes is thoroughly tested before being published. Our verification
                process ensures maximum success rate for all users.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg t="1757749617523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21520" width="200" height="200"><path d="M512.012 958.709a68.712 68.712 0 0 1-39.749-12.635L296.451 821.49c-105.24-82.57-162.447-199.336-162.447-329.76V255.22a34.363 34.363 0 0 1 19.64-31.05L473.622 72.453a33.73 33.73 0 0 1 3.691-1.493c22.316-7.559 46.93-7.559 69.247 0a32.1 32.1 0 0 1 3.691 1.493L870.346 224.17a34.36 34.36 0 0 1 19.649 31.05v236.51c0 130.44-57.217 247.19-161.096 328.753l-177.17 125.591c-11.863 8.424-25.79 12.635-39.717 12.635z m-309.28-681.752v214.772c0 108.88 47.879 206.434 134.81 274.692l174.453 123.578 175.811-124.584c85.59-67.235 133.46-164.788 133.46-273.685V276.957L522.903 135.542c-7.131-2.072-14.833-2.056-21.93 0l-298.24 141.415z" fill="#444444" p-id="21521"></path><path d="M448.987 636.706l-142.44-159.305 64.045-57.267 105.709 118.225 199.487-204.051 61.428 60.053-238.042 243.465c-13.902 14.218-36.933 13.705-50.187-1.12z" fill="#00D8A0" p-id="21522"></path></svg>
              </div>
              <h3>100% Safe & Secure</h3>
              <p>
                All codes are obtained through official channels only. No hacks, no exploits - just
                legitimate rewards for your Type Soul journey.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg t="1757749788221" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36330" width="200" height="200"><path d="M738.137374 136.848978v-28.448746c0-17.993363-13.804691-32.714835-30.669394-32.714834H330.100384c-16.868778 0.004075-30.669394 14.721472-30.669393 32.722984v819.423287c0 17.993363 13.800616 32.71076 30.669393 32.71076h377.367596c16.868778 0 30.669394-14.717397 30.669394-32.71076V136.848978z" fill="#5A5A7D" p-id="36331"></path><path d="M707.46798 991.101809H330.100384c-33.762003 0-61.228774-28.383552-61.228773-63.27014V108.408382c0-34.886588 27.462696-63.274215 61.220624-63.282364h377.375745c33.762003 0 61.228774 28.383552 61.228774 63.274214v819.431437c0 34.890663-27.466771 63.27014-61.228774 63.27014z m-376.780856-61.11876h376.198191a3.296338 3.296338 0 0 0 0.696754-2.15138V108.400232a3.275966 3.275966 0 0 0-0.700829-2.155455H330.691199a3.292264 3.292264 0 0 0-0.700828 2.163605v819.423287c0 1.124585 0.419682 1.829488 0.696753 2.15138z" fill="#5A5A7D" p-id="36332"></path><path d="M487.538235 852.272583h62.48782v61.11876H487.538235z" fill="#A6A6C9" p-id="36333"></path><path d="M299.430991 131.026397h438.706383v677.745928H299.430991z" fill="#8FDBFF" p-id="36334"></path><path d="M768.696754 839.331705H268.871611V100.467017h499.825143v738.864688z m-438.706383-61.11876h377.587623V161.585777H329.990371v616.627168z" fill="#5A5A7D" p-id="36335"></path><path d="M391.793661 775.279244h-61.11876V162.490335h367.401163v61.11876H391.793661z" fill="#001963" opacity=".1" p-id="36336"></path></svg>
              </div>
              <h3>Mobile Optimized</h3>
              <p>
                Access our Type Soul codes anywhere, anytime. Our website is fully optimized for
                mobile devices with one-click copy functionality.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg t="1757749857531" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40376" width="200" height="200"><path d="M84.5824 393.3184c-8.4992 0-15.36-6.8608-15.36-15.36V348.672c0-8.4992 6.8608-15.36 15.36-15.36s15.36 6.8608 15.36 15.36v29.2864c0 8.4992-6.8608 15.36-15.36 15.36z" fill="#4C35D3" p-id="40377"></path><path d="M105.1648 766.4128c-5.6832 0-11.3664-1.3312-16.64-4.096a35.76832 35.76832 0 0 1-19.3024-31.8464V437.7088c0-8.4992 6.8608-15.36 15.36-15.36s15.36 6.8608 15.36 15.36v292.8128c0 2.7648 1.7408 4.0448 2.816 4.608 1.024 0.5632 3.1232 1.2288 5.376-0.3584l102.0928-71.2704c2.56-1.792 5.632-2.7648 8.8064-2.7648h470.9376c43.9808 0 79.7696-35.7888 79.7696-79.7696v-380.416c0-43.9808-35.7888-79.7696-79.7696-79.7696H179.6608c-43.9808 0-79.7696 35.7888-79.7696 79.7696V255.488c0 8.4992-6.8608 15.36-15.36 15.36s-15.36-6.8608-15.36-15.36V200.5504c0-60.928 49.5616-110.4896 110.4896-110.4896h510.2592c60.928 0 110.4896 49.5616 110.4896 110.4896v380.416c0 60.928-49.5616 110.4896-110.4896 110.4896H223.8464l-98.0992 68.5056a35.98848 35.98848 0 0 1-20.5824 6.4512z" fill="#4C35D3" p-id="40378"></path><path d="M918.272 940.1856c-7.0656 0-14.08-2.0992-20.1728-6.1952l-95.8464-64.9728h-147.6096c-8.4992 0-15.36-6.8608-15.36-15.36s6.8608-15.36 15.36-15.36h152.32c3.072 0 6.0928 0.9216 8.6016 2.6624l99.7888 67.6352c2.2528 1.536 4.3008 0.8192 5.376 0.3072s2.7648-1.8944 2.7648-4.608V406.016c0-37.4272-25.5488-68.8128-60.5696-77.3632v273.6128c0 84.1728-68.4544 152.6272-152.6272 152.6272H233.9328v8.7552c0 41.1648 33.4848 74.6496 74.6496 74.6496h264.96c8.4992 0 15.36 6.8608 15.36 15.36s-6.8608 15.36-15.36 15.36H308.5824c-58.112 0-105.3696-47.2576-105.3696-105.3696v-24.1152c0-8.4992 6.8608-15.36 15.36-15.36h491.7248c67.2256 0 121.9072-54.6816 121.9072-121.9072V311.0912c0-4.1984 1.6896-8.192 4.7104-11.0592 3.0208-2.9184 7.168-4.352 11.264-4.2496 59.4944 2.3552 106.0352 50.7904 106.0352 110.2848v498.2272c0 13.312-7.3216 25.4976-19.0976 31.744-5.3248 2.7648-11.0592 4.1472-16.8448 4.1472z" fill="#4C35D3" p-id="40379"></path><path d="M222.7712 453.0688c-33.6384 0-61.0304-27.392-61.0304-61.0304s27.392-61.0304 61.0304-61.0304S283.8016 358.4 283.8016 392.0384s-27.3408 61.0304-61.0304 61.0304z m0-91.3408c-16.6912 0-30.3104 13.568-30.3104 30.3104 0 16.6912 13.568 30.3104 30.3104 30.3104 16.6912 0 30.3104-13.568 30.3104-30.3104 0-16.6912-13.568-30.3104-30.3104-30.3104zM429.5168 453.0688c-33.6384 0-61.0304-27.392-61.0304-61.0304s27.392-61.0304 61.0304-61.0304S490.5472 358.4 490.5472 392.0384c-0.0512 33.6384-27.392 61.0304-61.0304 61.0304z m0-91.3408c-16.6912 0-30.3104 13.568-30.3104 30.3104 0 16.6912 13.568 30.3104 30.3104 30.3104 16.6912 0 30.3104-13.568 30.3104-30.3104-0.0512-16.6912-13.6192-30.3104-30.3104-30.3104zM636.1088 453.0688c-33.6384 0-61.0304-27.392-61.0304-61.0304s27.392-61.0304 61.0304-61.0304 61.0304 27.392 61.0304 61.0304-27.392 61.0304-61.0304 61.0304z m0-91.3408c-16.6912 0-30.3104 13.568-30.3104 30.3104 0 16.6912 13.568 30.3104 30.3104 30.3104 16.6912 0 30.3104-13.568 30.3104-30.3104 0-16.6912-13.568-30.3104-30.3104-30.3104z" fill="#FF4D7C" p-id="40380"></path></svg>
              </div>
              <h3>Community Driven</h3>
              <p>
                Join thousands of satisfied users who trust our platform. Get support from our
                active community and expert moderators.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon"><svg t="1757749830782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38451" width="200" height="200"><path d="M689.3315 202.659744l-111.608734-64.43298a131.434267 131.434267 0 0 0-131.423003 0l-111.619998 64.43298c-20.388757 11.77141-12.030493 42.9403 11.512326 42.9403h331.638347c23.542819 0 31.901084-31.168891 11.501062-42.9403z" fill="#4070DB" p-id="38452"></path><path d="M511.994368 1023.988735a178.272086 178.272086 0 0 1-89.147308-23.801903L133.788548 833.291898A178.778989 178.778989 0 0 1 44.641241 678.889302V345.099433a178.778989 178.778989 0 0 1 89.147307-154.402596L422.84706 23.801903a178.812783 178.812783 0 0 1 178.294615 0l289.058512 166.894934a178.778989 178.778989 0 0 1 89.147308 154.402596v333.789869a178.778989 178.778989 0 0 1-89.147308 154.402596L601.141675 1000.186832a178.272086 178.272086 0 0 1-89.147307 23.801903z m0-967.699994a121.960816 121.960816 0 0 0-60.986041 16.288477L161.949816 239.472152A122.298751 122.298751 0 0 0 100.963775 345.099433v333.789869a122.298751 122.298751 0 0 0 60.986041 105.627281l289.058511 166.894935a122.310016 122.310016 0 0 0 121.972081 0l289.058512-166.894935a122.298751 122.298751 0 0 0 60.98604-105.627281V345.099433a122.298751 122.298751 0 0 0-60.98604-105.627281L572.980408 72.577218a121.960816 121.960816 0 0 0-60.98604-16.288477z" fill="#4070DB" p-id="38453"></path><path d="M202.862505 619.739376q-24.297541 0-24.297542-24.297541V428.546901q0-24.297541 24.297542-24.297542h88.798108q24.297541 0 24.297541 21.402563 0 21.69544-24.297541 21.695441h-59.870854a1.284154 1.284154 0 0 0-1.453122 1.441857v44.258247a1.284154 1.284154 0 0 0 1.453122 1.453122h57.674275q24.297541 0 24.297541 21.402563 0 21.69544-24.297541 21.69544h-57.674275a1.272889 1.272889 0 0 0-1.408064 1.430592v56.401386q0 24.297541-24.297541 24.297542zM365.127727 619.739376q-24.297541 0-24.297542-24.297541V428.546901q0-24.297541 24.297542-24.297542h54.666652q84.17966 0 84.168395 67.970035 0 44.844002-35.573312 61.616853c-0.968748 0.382993-1.25036 0.968748-0.867368 1.734734l33.556967 59.589241q13.866608 24.579154-14.463627 24.579154h-9.011606q-20.546461 0-30.087498-18.225972l-27.721951-53.472614a7.502162 7.502162 0 0 0-6.938937-4.043958h-18.800462a1.272889 1.272889 0 0 0-1.453121 1.441857v50.036939q0 24.297541-24.297541 24.297542z m27.462868-118.018239a1.284154 1.284154 0 0 0 1.453121 1.453122h21.69544q37.882537 0 37.882537-30.954865 0-14.756504-9.833915-21.109686-8.955283-5.801221-28.048622-5.789957h-21.684176a1.284154 1.284154 0 0 0-1.464385 1.453122zM557.480447 619.739376q-24.297541 0-24.297542-24.297541V428.546901q0-24.297541 24.297542-24.297542h92.898388q24.297541 0 24.297541 21.402563 0 21.69544-24.297541 21.695441h-63.982399a1.272889 1.272889 0 0 0-1.441857 1.441857v37.026434a1.272889 1.272889 0 0 0 1.441857 1.441857h64.939882q24.297541 0 24.297542 21.69544t-24.297542 21.69544h-64.939882a1.284154 1.284154 0 0 0-1.441857 1.453122v42.805126a1.272889 1.272889 0 0 0 1.441857 1.441857h62.191342q24.297541 0 24.297542 21.69544t-24.297542 21.69544zM727.259095 619.739376q-24.297541 0-24.297542-24.297541V428.546901q0-24.297541 24.297542-24.297542h92.909653q24.297541 0 24.297541 21.402563 0 21.69544-24.297541 21.695441h-63.9824a1.272889 1.272889 0 0 0-1.441856 1.441857v37.026434a1.272889 1.272889 0 0 0 1.441856 1.441857h64.939883q24.297541-0.045058 24.297541 21.69544t-24.297541 21.69544h-64.939883a1.272889 1.272889 0 0 0-1.441856 1.453122v42.805126a1.272889 1.272889 0 0 0 1.441856 1.441857h62.202608q24.297541 0 24.297541 21.69544t-24.297541 21.69544z" fill="#4070DB" p-id="38454"></path></svg></div>
              <h3>Completely Free</h3>
              <p>
                All our services are completely free. No hidden fees, no premium subscriptions -
                just free Type Soul codes for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-description">
            Find answers to the most common questions about Type Soul codes, redemption process, and
            our services. If you don't find what you're looking for, feel free to contact our
            support team for additional assistance.
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  Why are my codes not working?
                </h3>
                <p class="faq-answer">
                  The code may be expired or entered incorrectly. Please check if the code is still
                  valid and ensure you copy and paste it correctly. Also, make sure you haven't
                  already used this code before, as most codes can only be redeemed once per
                  account. If the problem persists, try refreshing the game or contact our support
                  team.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  How often are new codes released?
                </h3>
                <p class="faq-answer">
                  New codes are usually released during game updates or when reaching milestones. We
                  check and update Type Soul codes status daily. Major updates typically bring 3-5
                  new codes, while smaller patches may include 1-2 codes. Follow our website and
                  social media for daily notifications when new codes become available.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  Where to find more codes?
                </h3>
                <p class="faq-answer">
                  Follow our website and the official game Discord! We will publish the latest codes
                  information as soon as possible. Additionally, you can join our community Discord
                  server where we share exclusive codes, tips, and strategies. Don't forget to
                  enable notifications to never miss a new codes release.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  How long do codes stay active?
                </h3>
                <p class="faq-answer">
                  Most Type Soul codes remain active for 1-2 weeks, but some special event Type Soul
                  codes may expire within 1-2 days. We update our database daily, so you'll always
                  see the current status of each Type Soul codes. We recommend using Type Soul codes
                  as soon as possible to avoid missing out.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">
                    <svg t="1757749943366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="44133" width="200" height="200"><path d="M512 0c283.306667 0 512 228.693333 512 512s-228.693333 512-512 512S0 795.306667 0 512 228.693333 0 512 0z m-3.413333 679.253333c-37.546667 0-66.56 29.013333-66.56 64.853334s29.013333 64.853333 66.56 64.853333 66.56-29.013333 66.56-64.853333-29.013333-64.853333-66.56-64.853334zM512 220.16c-56.32 0-102.4 15.36-138.24 46.08-35.84 30.72-54.613333 73.386667-56.32 112.64-1.706667 39.253333 92.16 30.72 95.573333 11.946667 3.413333-20.48 18.773333-52.906667 37.546667-68.266667 17.066667-15.36 39.253333-22.186667 66.56-22.186667s49.493333 6.826667 64.853333 22.186667c15.36 13.653333 23.893333 32.426667 23.893334 51.2 0 15.36-5.12 27.306667-13.653334 39.253333-5.12 6.826667-23.893333 23.893333-54.613333 47.786667s-51.2 47.786667-61.44 66.56c-10.24 20.48-15.36 44.373333-15.36 75.093333v25.6H554.666667v-5.12c0-25.6 1.706667-44.373333 6.826666-54.613333 5.12-11.946667 18.773333-25.6 40.96-44.373333 42.666667-35.84 69.973333-63.146667 83.626667-83.626667 13.653333-20.48 18.773333-42.666667 18.773333-64.853333 0-40.96-17.066667-78.506667-52.906666-109.226667-32.426667-30.72-80.213333-46.08-139.946667-46.08z" fill="#8e44ad" p-id="44134"></path></svg>
                  </span>
                  What rewards can I get from codes?
                </h3>
                <p class="faq-answer">
                  Type Soul codes can provide various rewards including soul coins, skill points,
                  experience boosts, rare items, exclusive cosmetics, and special abilities. The
                  value and type of rewards vary depending on the code. Check each code's
                  description for specific reward details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Info Section -->
    <section class="game-info" id="game-info">
      <div class="container">
        <div class="game-info-wrap">
          <h2 class="section-title">About Type Soul Codes</h2>
          <p class="section-subtitle">
            Everything you need to know about Type Soul codes and how they enhance your gameplay
          </p>
          <div class="about-content">
            <div class="intro-text">
              <p>
                Type Soul codes are promotional codes for a Roblox anime game that provide in-game
                items like currency (Kan), race spins, weapon spins, skill resets, and cosmetics.
                These Type Soul codes are released by the development team regularly during updates,
                events, and milestones, allowing players to unlock rare races (Shinigami, Quincy,
                Arrancar) without spending real money.
              </p>
              <p>
                The development team releases Type Soul codes regularly during updates, events, and
                milestones, allowing players to unlock rare races (Shinigami, Quincy, Arrancar)
                without spending real money. These Type Soul codes provide valuable rewards that
                enhance your gaming experience and help you progress faster in the game.
              </p>
            </div>
            <div class="rewards-section">
              <h3 class="rewards-title">Types of Type Soul Rewards</h3>
              <div class="rewards-grid">
                <div class="reward-card">
                  <h4>Currency Rewards</h4>
                  <p>
                    Type Soul codes provide Kan, the primary in-game currency for items, upgrades,
                    and game mechanics, speeding up progression.
                  </p>
                </div>
                <div class="reward-card">
                  <h4>Race Spins</h4>
                  <p>
                    Unlock powerful races like Shinigami, Quincy, Arrancar, and Fullbringer, each
                    offering unique abilities and playstyles.
                  </p>
                </div>
                <div class="reward-card">
                  <h4>Weapon Spins</h4>
                  <p>
                    Obtain legendary weapons like Zanpakuto, Quincy bows, and Arrancar weapons,
                    providing combat advantages in PvP and PvE.
                  </p>
                </div>
                <div class="reward-card">
                  <h4>Skill Resets</h4>
                  <p>
                    Reallocate skill points to experiment with different builds, perfect for
                    optimizing characters for specific content or playstyles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { codes as codesData } from '@/data/codes.js'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// 响应式数据
const codes = ref(codesData)

// 动态获取图片路径，确保在所有环境中都能正确解析
const getImagePath = (path) => {
  // 在开发环境中直接返回路径
  if (import.meta.env.DEV) {
    return path
  }
  // 在生产环境中，确保路径正确
  return path.startsWith('/') ? path : `/${path}`
}

const robloxButtonImage = getImagePath('/images/roblox-type-soul-codes-button.webp')

// 计算属性
const currentDateTime = ref('')
const activeCodes = computed(() => codes.value.filter((code) => code.category === 'active'))
const expiredCodes = computed(() => codes.value.filter((code) => code.category === 'expired'))
const activeCodesCount = computed(() => activeCodes.value.length)

// 方法
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN')
}

const copyCode = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    message.success(`code "${code}" Copied to clipboard`)
  } catch (err) {
    console.error('Replication failed:', err)
    message.error('Copy failed, please copy manually')
  }
}

// 平滑滚动到指定区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// 更新当前时间
const updateDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  currentDateTime.value = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}

// 生命周期
onMounted(() => {
  updateDateTime()
  // 每秒更新一次时间
  setInterval(updateDateTime, 1000)
})
</script>

<style scoped>
/* 全局样式 */
.home-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 50%, #0a0a0a 100%);
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(155, 89, 182, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(155, 89, 182, 0.15) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 107, 157, 0.05) 50%,
      transparent 70%
    ),
    linear-gradient(-45deg, transparent 30%, rgba(78, 205, 196, 0.05) 50%, transparent 70%);
  animation: shimmer 8s ease-in-out infinite;
}

@keyframes shimmer {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}

.hero-wrap {
  position: relative;
  z-index: 10;
  text-align: center;
  width: 100%;
}

.update-info {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  background: rgba(155, 89, 182, 0.2);
  padding: 12px 30px;
  border-radius: 30px;
  margin-bottom: 40px;
  border: 1px solid #9b59b6;
}

.live-tag {
  background: #9b59b6;
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}

.update-text {
  color: #b0b0b0;
  font-size: 16px;
}

.main-title {
  font-size: 62px;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1.5;
  background: linear-gradient(45deg, #ffffff, #ff6b9d, #4ecdc4, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 107, 157, 0.3);
}

.title-text {
  display: block;
  margin-bottom: 10px;
}

.title-gradient {
  display: block;
  margin-bottom: 10px;
}

.title-subtitle {
  display: block;
  font-size: 48px;
  margin-top: 20px;
}

.hero-description {
  font-size: 24px;
  color: #b0b0b0;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  color: #ffffff;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 107, 157, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #9b59b6;
}

.btn-secondary:hover {
  background: rgba(155, 89, 182, 0.2);
  transform: translateY(-2px);
}

.btn-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #b0b0b0;
  font-size: 18px;
}

.stat-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-rating {
  display: flex;
  align-items: center;
  gap: 15px;
}

.stars {
  color: #ffd700;
  font-size: 20px;
}

.rating-text {
  color: #b0b0b0;
  font-size: 18px;
}

/* Section Titles */
.section-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.section-description {
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

/* 不同板块的渐变标题 */
.active-codes .section-title {
  background: linear-gradient(45deg, #ff6b9d, #e74c3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.expired-codes .section-title {
  background: linear-gradient(45deg, #95a5a6, #7f8c8d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.how-to-redeem .section-title {
  background: linear-gradient(45deg, #4ecdc4, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq .section-title {
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-info .section-title {
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.why-choose-us .section-title {
  background: linear-gradient(45deg, #e74c3c, #c0392b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Active Codes Section */
.active-codes {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.active-codes-wrap {
  text-align: center;
}

/* 代码网格布局 */
.codes-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.code-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.code-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.code-card.expired {
  opacity: 0.6;
  filter: grayscale(0.5);
  border-color: #666666;
}

.code-card.expired:hover {
  transform: none;
  box-shadow: none;
  border-color: #666666;
}

.card-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
}

.status-tag {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.status-tag.active {
  background: #27ae60;
  color: #ffffff;
}

.status-tag.expired {
  background: #666666;
  color: #ffffff;
}

.code-content {
  margin-bottom: 20px;
  text-align: center;
}

.code-string {
  font-size: 20px;
  font-weight: bold;
  color: #4ecdc4;
  font-family: 'Courier New', monospace;
  margin-bottom: 10px;
}

.code-reward {
  font-size: 14px;
  color: #b0b0b0;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.category-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.category-tag.coins {
  background: #ffd700;
  color: #000000;
}

.category-tag.traits {
  background: #9b59b6;
  color: #ffffff;
}

.category-tag.weapons {
  background: #e74c3c;
  color: #ffffff;
}

.category-tag.perks {
  background: #3498db;
  color: #ffffff;
}

.status-tag {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.status-tag.active {
  background: #27ae60;
  color: #ffffff;
}

.status-tag.expired {
  background: #666666;
  color: #ffffff;
}

.code-content {
  margin-bottom: 20px;
}

.code-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.code-text {
  font-size: 24px;
  font-weight: bold;
  color: #4ecdc4;
  font-family: 'Courier New', monospace;
}

.copy-icon {
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-icon:hover {
  background: rgba(255, 255, 255, 0.1);
}

.reward-info {
  margin-bottom: 15px;
}

.reward-label {
  color: #b0b0b0;
  font-size: 14px;
}

.reward-text {
  color: #ffffff;
  font-weight: bold;
  margin-left: 8px;
}

.date-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #b0b0b0;
}

.copy-button {
  width: 100%;
  background: linear-gradient(45deg, #4ecdc4, #27ae60);
  color: #ffffff;
  border: none;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.copy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(78, 205, 196, 0.3);
}

/* Expired Codes Section */
.expired-codes {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #0d0d0d 100%);
}

/* How to Redeem Section */
.how-to-redeem {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
}

.redeem-content {
  max-width: 1000px;
  margin: 0 auto;
}

.redeem-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.step-item {
  text-align: center;
  position: relative;
}

.step-item:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #9b59b6;
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #4ecdc4, #3498db);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto 20px;
}

.step-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
  background: linear-gradient(45deg, #4ecdc4, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-content p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 14px;
  text-align: left;
}

/* FAQ Section */
.faq {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%);
}

.faq-content {
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #9b59b6;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(155, 89, 182, 0.2);
}

.faq-question {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  color: #ffffff;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-icon {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-answer {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
  text-align: left;
}

/* Game Info Section */
.game-info {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
}

.game-info-wrap {
  text-align: center;
}

.game-content {
  max-width: 1000px;
  margin: 0 auto;
}

.game-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.game-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border: 2px solid #333;
  border-radius: 20px;
  padding: 80px 60px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
}

.image-placeholder:hover {
  border-color: #f39c12;
  box-shadow: 0 15px 40px rgba(243, 156, 18, 0.3);
  transform: translateY(-5px);
}

.placeholder-icon {
  font-size: 80px;
  margin-bottom: 20px;
  display: block;
}

.placeholder-text {
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.stat-item {
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
  border-color: #f39c12;
  box-shadow: 0 8px 25px rgba(243, 156, 18, 0.2);
}

.stat-number {
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 500;
}

.game-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-item {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: #f39c12;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(243, 156, 18, 0.2);
}

.feature-icon {
  width: 45px;
  height: 45px;
  margin: 0 auto 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-item h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #ffffff;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-item p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 14px;
}

/* Why Choose Us Section */
.why-choose-us {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: #1a1a1a;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #ff6b9d;
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.2);
}

.feature-card h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-card p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
}

/* Game Info New Layout Styles */
.highlight-item {
  display: flex;
  align-items: flex-start;
  background: #1a1a1a;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-5px);
  border-color: #f39c12;
  box-shadow: 0 10px 30px rgba(243, 156, 18, 0.2);
}

.highlight-icon {
  font-size: 40px;
  margin-right: 25px;
  flex-shrink: 0;
}

.highlight-content h3 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight-content p {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
}

/* Game Info Left-Right Layout Styles */
.game-layout .feature-item {
  display: flex;
  align-items: flex-start;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
}

.game-layout .feature-item:hover {
  border-color: #f39c12;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(243, 156, 18, 0.2);
}

.game-layout .feature-icon {
  font-size: 32px;
  margin-right: 15px;
  flex-shrink: 0;
}

.game-layout .feature-content h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #ffffff;
  background: linear-gradient(45deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.game-layout .feature-content p {
  color: #b0b0b0;
  line-height: 1.5;
  font-size: 14px;
}

/* How to Redeem New Layout */
.redeem-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.column-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
}

.step-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 23px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.step-icon {
  background: #9b59b6;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
}

.step-content h4 {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: left;
}

.step-content p {
  color: #b0b0b0;
  font-size: 14px;
  line-height: 1.5;
}

.tips-card {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 14px;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
}

.tip-item:last-child {
  margin-bottom: 0;
}

.tip-icon {
  background: #27ae60;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.tip-content h4 {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.redeem-placeholder {
  text-align: center;
  overflow: hidden;
  font-size: 0;
  border-radius: 10px;
  margin-top: 20px;
}

.redeem-placeholder img{
  width: 100%;
  height: auto;
}

.redeem-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

/* About Type Soul New Layout */
.section-subtitle {
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 400;
}

.about-content {
  max-width: 1000px;
  margin: 0 auto;
}

.intro-text {
  margin-bottom: 50px;
}

.intro-text p {
  color: #ffffff;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.rewards-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 30px;
}

.rewards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.reward-card {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 25px;
  transition: all 0.3s ease;
}

.reward-card:hover {
  border-color: #f39c12;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(243, 156, 18, 0.1);
}

.reward-card h4 {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.reward-card p {
  color: #b0b0b0;
  font-size: 14px;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    padding: 10px 0;
  }

  .main-title {
    font-size: 20px;
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-buttons {
    gap: 10px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 12px;
  }

  .hero-stats {
    gap: 10px;
  }

  .update-info {
    padding: 10px;
    gap: 10px;
  }

  .live-tag {
    font-size: 12px;
    padding: 4px 8px;
  }

  .update-text {
    font-size: 12px;
  }

  .codes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .code-card {
    padding: 10px;
  }

  .code-title {
    font-size: 16px;
  }

  .card-header {
    margin-bottom: 10px;
    font-size: 12px;
  }

  .code-string {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1;
  }

  .code-reward {
    font-size: 12px;
    line-height: 1;
  }

  .code-content {
    margin-bottom: 10px;
  }

  .copy-button {
    font-size: 12px;
  }

  .copy-icon {
    padding: 0 5px;
  }

  .section-title {
    font-size: 20px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .redeem-layout {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .steps-column,
  .tips-column {
    margin-bottom: 10px;
  }

  .step-card {
    padding: 10px;
  }

  .step-icon {
    font-size: 16px;
  }

  .step-content h4 {
    font-size: 16px;
  }

  .step-content p {
    font-size: 12px;
  }

  .tips-card {
    padding: 10px;
  }

  .tip-item {
    padding: 10px;
  }

  .tip-content h4 {
    font-size: 16px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h3 {
    font-size: 18px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .why-choose-us {
    padding: 20px 0;
  }

  .faq-content {
    margin-top: 10px;
  }

  .faq-item {
    padding: 10px;
  }

  .faq-question {
    font-size: 18px;
  }

  .faq-answer {
    font-size: 12px;
  }

  .intro-text p {
    font-size: 12px;
  }

  .rewards-title {
    font-size: 20px;
  }

  .rewards-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .reward-card {
    padding: 10px;
  }

  .reward-card h4 {
    font-size: 16px;
  }

  .reward-card p {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 20px 0;
    min-height: auto;
  }

  .main-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .hero-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }

  .stat-item {
    font-size: 12px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .rating-text {
    font-size: 12px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    font-size: 12px;
  }

  .btn-icon {
    font-size: 12px;
  }

  .expired-codes {
    padding: 20px 0;
  }

  .how-to-redeem {
    padding: 20px 0;
  }

  .hero-stats {
    flex-direction: column;
    gap: 10px;
  }

  .update-info {
    padding: 10px;
    gap: 10px;
    margin-bottom: 10px;
  }

  .active-codes {
    padding: 20px 0;
  }

  .live-tag {
    font-size: 12px;
    padding: 4px 8px;
  }

  .update-text {
    font-size: 12px;
  }

  .code-card {
    padding: 10px;
  }

  .code-title {
    font-size: 16px;
  }

  .code-reward {
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .section-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .intro-text p {
    margin-bottom: 10px;
  }

  .intro-text {
    margin-bottom: 10px;
  }

  .redeem-layout {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .steps-column,
  .tips-column {
    margin-bottom: 10px;
  }

  .step-card {
    padding: 10px;
  }

  .step-icon {
    font-size: 14px;
  }

  .step-content h4 {
    font-size: 16px;
  }

  .step-content p {
    font-size: 12px;
  }

  .tip-item {
    padding: 10px;
  }

  .tip-content h4 {
    font-size: 16px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .feature-card .feature-icon {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .faq {
    padding: 20px 0;
  }

  .faq-content {
    margin-top: 10px;
  }

  .faq-item {
    padding: 10px;
  }

  .faq-question {
    font-size: 18px;
    line-height: 1.3;
    gap: 10px;
    margin-bottom: 10px;
  }

  .faq-answer {
    font-size: 12px;
  }

  .game-info {
    padding: 20px 0;
  }

  .intro-text p {
    font-size: 12px;
  }

  .rewards-title {
    font-size: 20px;
  }

  .rewards-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .reward-card {
    padding: 10px;
  }

  .reward-card h4 {
    font-size: 16px;
  }

  .reward-card p {
    font-size: 12px;
  }
}
</style>
