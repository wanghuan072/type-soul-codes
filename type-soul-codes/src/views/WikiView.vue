<template>
  <div class="wiki-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner" >
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="hero-title">Type Soul Wiki</h1>
          <p class="hero-description">
            The complete Type Soul Wiki guide for all races, locations, abilities, and game
            mechanics. Master your spiritual journey in the world of Type Soul.
          </p>
          <div class="hero-nav">
            <a href="javascript:void(0)" @click="scrollToSection('races')" class="nav-link">
              <span class="nav-icon">⚔️</span>
              Races
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('locations')" class="nav-link">
              <span class="nav-icon">🌍</span>
              Locations
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('abilities')" class="nav-link">
              <span class="nav-icon">💪</span>
              Abilities
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('mechanics')" class="nav-link">
              <span class="nav-icon">⚙️</span>
              Mechanics
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('about')" class="nav-link">
              <span class="nav-icon">📖</span>
              About
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('faq')" class="nav-link">
              <span class="nav-icon">❓</span>
              FAQ
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Races Section -->
    <section class="races-section" id="races">
      <div class="container">
        <div class="races-wrap">
          <h2 class="section-title">Type Soul Wiki Races Guide</h2>
          <p class="section-description">
            Choose your path in the spiritual world. Each race offers unique abilities, progression
            systems, and playstyles to master.
          </p>
          <div class="races-grid">
            <div class="race-card">
              <div class="race-icon">⚔️</div>
              <h3 class="race-title">Soul Reaper (Shinigami)</h3>
              <p class="race-description">
                The most versatile and popular race in Type Soul Wiki. Masters of spiritual combat
                with diverse fighting styles and Zanpakuto abilities.
              </p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">Difficulty:</span>
                  <span class="stat-value difficulty-medium">Medium</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Popularity:</span>
                  <span class="stat-value popularity-highest">Highest</span>
                </div>
              </div>
              <div class="race-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Hakuda fighting styles exclusive</li>
                  <li>Diverse skill tree options</li>
                  <li>Shikai and Bankai progression</li>
                  <li>Kido spell casting abilities</li>
                </ul>
              </div>
            </div>

            <div class="race-card">
              <div class="race-icon">💀</div>
              <h3 class="race-title">Arrancar (Hollow)</h3>
              <p class="race-description">
                Powerful hollow beings with mask fragments. Strong early game progression with
                unique resurrection abilities in Type Soul Wiki.
              </p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">Difficulty:</span>
                  <span class="stat-value difficulty-easy">Easy-Medium</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Popularity:</span>
                  <span class="stat-value popularity-high">High</span>
                </div>
              </div>
              <div class="race-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Strong early game stats</li>
                  <li>Resurrection (Segunda Etapa)</li>
                  <li>Cero and Bala techniques</li>
                  <li>Hierro defensive abilities</li>
                </ul>
              </div>
            </div>

            <div class="race-card">
              <div class="race-icon">🏹</div>
              <h3 class="race-title">Quincy</h3>
              <p class="race-description">
                Spiritual archers with powerful ranged abilities. High risk, high reward race with
                overpowered late-game potential in Type Soul Wiki.
              </p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">Difficulty:</span>
                  <span class="stat-value difficulty-hard">Hard</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Popularity:</span>
                  <span class="stat-value popularity-medium">Medium</span>
                </div>
              </div>
              <div class="race-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Powerful ranged attacks</li>
                  <li>Vollständig transformation</li>
                  <li>Spirit weapon mastery</li>
                  <li>Unique progression system</li>
                </ul>
              </div>
            </div>

            <div class="race-card">
              <div class="race-icon">💎</div>
              <h3 class="race-title">Fullbringer</h3>
              <p class="race-description">
                The newest race in Type Soul Wiki. Humans with object manipulation abilities and
                unique Twin Soul mode progression.
              </p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">Difficulty:</span>
                  <span class="stat-value difficulty-medium">Medium-Hard</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Popularity:</span>
                  <span class="stat-value popularity-growing">Growing</span>
                </div>
              </div>
              <div class="race-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Object soul manipulation</li>
                  <li>Twin Soul mode</li>
                  <li>Unique minigame trials</li>
                  <li>Fullbring elements system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Section -->
    <section class="locations-section" id="locations">
      <div class="container">
        <div class="locations-wrap">
          <h2 class="section-title">Type Soul Wiki Locations</h2>
          <p class="section-description">
            Explore the vast spiritual world of Type Soul. Each location offers unique challenges,
            rewards, and opportunities for growth.
          </p>
          <div class="locations-grid">
            <div class="location-card">
              <h3 class="location-title">Soul Society</h3>
              <p class="location-description">
                The spiritual realm and home of the Soul Reapers. Central hub for Shinigami training
                and missions in Type Soul Wiki.
              </p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">Primary Race:</span>
                  <span class="stat-value race-soul-reaper">Soul Reaper</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Danger Level:</span>
                  <span class="stat-value danger-medium">Medium</span>
                </div>
              </div>
              <div class="location-features">
                <h4>Notable Features:</h4>
                <ul>
                  <li>Soul Reaper Academy</li>
                  <li>Division headquarters</li>
                  <li>Training grounds</li>
                  <li>Mission boards</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">Hueco Mundo</h3>
              <p class="location-description">
                The desolate realm of Hollows and Arrancars. Desert wasteland with Las Noches palace
                in Type Soul Wiki.
              </p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">Primary Race:</span>
                  <span class="stat-value race-arrancar">Hollow/Arrancar</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Danger Level:</span>
                  <span class="stat-value danger-high">High</span>
                </div>
              </div>
              <div class="location-features">
                <h4>Notable Features:</h4>
                <ul>
                  <li>Las Noches palace</li>
                  <li>Hollow spawning grounds</li>
                  <li>Arrancar territories</li>
                  <li>Menos Forest</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">Karakura Town</h3>
              <p class="location-description">
                The main setting from Bleach. Human world location with spiritual activity in Type
                Soul Wiki.
              </p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">Primary Race:</span>
                  <span class="stat-value race-mixed">Mixed</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Danger Level:</span>
                  <span class="stat-value danger-low">Low-Medium</span>
                </div>
              </div>
              <div class="location-features">
                <h4>Notable Features:</h4>
                <ul>
                  <li>Human world access</li>
                  <li>Spiritual hotspot</li>
                  <li>Mixed race encounters</li>
                  <li>Story missions</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">Fake Karakura</h3>
              <p class="location-description">
                Special realm for Fullbringers in Type Soul Wiki. Training ground for object
                manipulation abilities.
              </p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">Primary Race:</span>
                  <span class="stat-value race-fullbringer">Fullbringer</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Danger Level:</span>
                  <span class="stat-value danger-low">Low-Medium</span>
                </div>
              </div>
              <div class="location-features">
                <h4>Notable Features:</h4>
                <ul>
                  <li>Fullbringer training</li>
                  <li>Object manipulation practice</li>
                  <li>Unique trials</li>
                  <li>Spiritual exercises</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">Wandenreich</h3>
              <p class="location-description">
                The hidden Quincy empire. Advanced spiritual realm for Quincy training and
                progression in Type Soul Wiki.
              </p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">Primary Race:</span>
                  <span class="stat-value race-quincy">Quincy</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Danger Level:</span>
                  <span class="stat-value danger-high">High</span>
                </div>
              </div>
              <div class="location-features">
                <h4>Notable Features:</h4>
                <ul>
                  <li>Quincy headquarters</li>
                  <li>Advanced training facilities</li>
                  <li>Spirit weapon mastery</li>
                  <li>Vollständig chambers</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">Hell</h3>
              <p class="location-description">
                The ultimate endgame location in Type Soul Wiki. Where players achieve True Bankai,
                True Segunda, and Sklavrei.
              </p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">Primary Race:</span>
                  <span class="stat-value race-all">All</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Danger Level:</span>
                  <span class="stat-value danger-extreme">Extreme</span>
                </div>
              </div>
              <div class="location-features">
                <h4>Notable Features:</h4>
                <ul>
                  <li>True form achievements</li>
                  <li>Ultimate transformations</li>
                  <li>Endgame challenges</li>
                  <li>Legendary rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Abilities Section -->
    <section class="abilities-section" id="abilities">
      <div class="container">
        <div class="abilities-wrap">
          <h2 class="section-title">Type Soul Wiki Abilities & Powers</h2>
          <p class="section-description">
            Master the powerful abilities and transformations available in Type Soul. Each ability
            offers unique advantages and requires specific conditions to unlock.
          </p>
          <div class="abilities-grid">
            <div class="ability-card">
              <div class="ability-icon">⚔️</div>
              <h3 class="ability-title">Shikai</h3>
              <p class="ability-description">
                The initial release of a Soul Reaper's Zanpakuto. Essential progression step in Type
                Soul Wiki guides.
              </p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">Race:</span>
                  <span class="stat-value race-soul-reaper">Soul Reaper</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Power Level:</span>
                  <span class="stat-value power-medium">Medium</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Reach Grade 2</li>
                  <li>Complete Inner World trial</li>
                  <li>Defeat Zanpakuto spirit</li>
                  <li>Learn release command</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">🗡️</div>
              <h3 class="ability-title">Bankai</h3>
              <p class="ability-description">
                The ultimate form of Zanpakuto release. True Bankai available in Hell according to
                Type Soul Wiki.
              </p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">Race:</span>
                  <span class="stat-value race-soul-reaper">Soul Reaper</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Power Level:</span>
                  <span class="stat-value power-very-high">Very High</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Master Shikai form</li>
                  <li>Complete Bankai trials</li>
                  <li>High spiritual pressure</li>
                  <li>Advanced combat experience</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">💀</div>
              <h3 class="ability-title">Resurrection</h3>
              <p class="ability-description">
                Arrancar's release form. Segunda Etapa is the advanced stage covered in Type Soul
                Wiki.
              </p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">Race:</span>
                  <span class="stat-value race-arrancar">Arrancar</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Power Level:</span>
                  <span class="stat-value power-high">High</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Become Arrancar</li>
                  <li>Complete resurrection trials</li>
                  <li>High Hollow power</li>
                  <li>Master Cero techniques</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">🏹</div>
              <h3 class="ability-title">Vollständig</h3>
              <p class="ability-description">
                Quincy's ultimate transformation. Powerful angelic form detailed in Type Soul Wiki
                progression.
              </p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">Race:</span>
                  <span class="stat-value race-quincy">Quincy</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Power Level:</span>
                  <span class="stat-value power-very-high">Very High</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Master Spirit Weapon</li>
                  <li>High Reishi manipulation</li>
                  <li>Complete Quincy trials</li>
                  <li>Advanced spiritual pressure</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">💎</div>
              <h3 class="ability-title">Twin Soul Mode</h3>
              <p class="ability-description">
                Fullbringer's unique transformation. Three-stage progression system in Type Soul
                Wiki.
              </p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">Race:</span>
                  <span class="stat-value race-fullbringer">Fullbringer</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Power Level:</span>
                  <span class="stat-value power-high">High</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Master object manipulation</li>
                  <li>Complete Twin Soul trials</li>
                  <li>High spiritual awareness</li>
                  <li>Unique minigame mastery</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">✨</div>
              <h3 class="ability-title">Kido Mastery</h3>
              <p class="ability-description">
                Soul Reaper spell casting abilities. Essential for combat and utility in Type Soul
                Wiki.
              </p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">Race:</span>
                  <span class="stat-value race-soul-reaper">Soul Reaper</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Power Level:</span>
                  <span class="stat-value power-medium-high">Medium-High</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Complete Kido training</li>
                  <li>Master incantations</li>
                  <li>High spiritual pressure</li>
                  <li>Practice spell casting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Mechanics Section -->
    <section class="mechanics-section" id="mechanics">
      <div class="container">
        <div class="mechanics-wrap">
          <h2 class="section-title">Type Soul Wiki Game Mechanics</h2>
          <p class="section-description">
            Understanding the core game mechanics is crucial for mastering Type Soul. Learn about
            progression, combat, and customization systems.
          </p>
          <div class="mechanics-grid">
            <div class="mechanic-card">
              <h3 class="mechanic-title">Progression System</h3>
              <p class="mechanic-description">
                Understanding the grade and advancement system in Type Soul Wiki is crucial for
                character development.
              </p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Grade System</h4>
                    <p>
                      Progress from Grade 5 to Grade 1, unlocking new abilities and areas at each
                      level.
                    </p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Mission Boards</h4>
                    <p>
                      Complete missions to gain experience, items, and progression towards next
                      grade.
                    </p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Inner World Trials</h4>
                    <p>Face your inner spirit to unlock powerful transformations and abilities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mechanic-card">
              <h3 class="mechanic-title">Combat Mechanics</h3>
              <p class="mechanic-description">
                Master the combat system detailed in Type Soul Wiki to dominate battles.
              </p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Reiatsu System</h4>
                    <p>
                      Manage your spiritual pressure for powerful attacks and defensive techniques.
                    </p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Combo System</h4>
                    <p>Chain attacks together for maximum damage and style points.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Blocking & Parrying</h4>
                    <p>Time your defensive moves perfectly to counter enemy attacks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mechanic-card">
              <h3 class="mechanic-title">PvP & Raids</h3>
              <p class="mechanic-description">
                Competitive aspects of Type Soul Wiki including ranked matches and clan wars.
              </p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Ranked Battles</h4>
                    <p>Compete against other players to climb the leaderboards and earn rewards.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Clan Wars</h4>
                    <p>Participate in large-scale battles between different clans for supremacy.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Tournament Mode</h4>
                    <p>Compete in organized tournaments for exclusive rewards and recognition.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mechanic-card">
              <h3 class="mechanic-title">Customization</h3>
              <p class="mechanic-description">
                Character and equipment customization options covered in Type Soul Wiki.
              </p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Character Creation</h4>
                    <p>Customize your appearance, choose your starting race and initial stats.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Skill Trees</h4>
                    <p>Allocate skill points to unlock new abilities and enhance existing ones.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>Equipment System</h4>
                    <p>Collect and upgrade weapons, armor, and accessories to boost your power.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-wrap">
          <h2 class="section-title">About Type Soul Wiki</h2>
          <p class="section-description">
            Our comprehensive wiki provides detailed information about all aspects of Type Soul,
            helping you master every element of the game.
          </p>
          <div class="about-content">
            <div class="about-text">
              <h3>Complete Game Guide</h3>
              <p>
                The Type Soul Wiki is your ultimate resource for mastering the spiritual world.
                Whether you're a beginner starting your journey or an experienced player looking to
                optimize your build, our guides cover everything you need to know.
              </p>
              <h3>Regular Updates</h3>
              <p>
                We continuously update our wiki with the latest information from game updates,
                community discoveries, and developer insights. Stay ahead of the meta with our
                up-to-date guides and strategies.
              </p>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">📚</div>
              <h4>Comprehensive Guides</h4>
              <p>Detailed information on all game aspects</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🔄</div>
              <h4>Regular Updates</h4>
              <p>Always current with latest game changes</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">👥</div>
              <h4>Community Driven</h4>
              <p>Built by and for the Type Soul community</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-description">
            Common questions about Type Soul mechanics, strategies, and progression.
          </p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">❓</span>
                  Which race should I choose as a beginner?
                </h3>
                <p class="faq-answer">
                  Soul Reaper is the most beginner-friendly race due to its balanced stats and
                  versatile abilities. Arrancar is also good for beginners who prefer a more
                  aggressive playstyle.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">⚔️</span>
                  How do I unlock Shikai and Bankai?
                </h3>
                <p class="faq-answer">
                  To unlock Shikai, reach Grade 2, complete the Inner World trial, and defeat your
                  Zanpakuto spirit. Bankai requires mastering Shikai and completing advanced trials
                  with high spiritual pressure.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🌍</span>
                  What's the best location for grinding experience?
                </h3>
                <p class="faq-answer">
                  Soul Society is great for early game grinding, while Hueco Mundo offers
                  higher-level challenges. Hell provides the best rewards but requires significant
                  preparation and skill.
                </p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">💪</span>
                  How do I improve my spiritual pressure?
                </h3>
                <p class="faq-answer">
                  Spiritual pressure increases through combat, completing missions, and progressing
                  through the grade system. Focus on training and challenging stronger opponents to
                  grow your power.
                </p>
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
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

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
</script>

<style scoped>
/* 全局样式 */
.wiki-page {
  background: #0a0a0a;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0f0f0f 0%, #2d1b69 50%, #0f0f0f 100%);
  padding: 120px 0 80px;
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
  background: radial-gradient(circle at 20% 30%, rgba(155, 89, 182, 0.15) 0%, transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(78, 205, 196, 0.15) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
}

.hero-wrap {
  position: relative;
  z-index: 10;
  text-align: center;
  width: 100%;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-title {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.2;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(255, 107, 157, 0.2);
}

.hero-description {
  font-size: 20px;
  color: #b0b0b0;
  margin-bottom: 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Hero Navigation */
.hero-nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.hero-nav .nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.hero-nav .nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.3), rgba(78, 205, 196, 0.3));
  transition: left 0.3s ease;
}

.hero-nav .nav-link:hover::before {
  left: 0;
}

.hero-nav .nav-link:hover {
  color: #ffffff;
  border-color: #9b59b6;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(155, 89, 182, 0.3);
}

.nav-icon {
  font-size: 16px;
  position: relative;
  z-index: 1;
}

/* Section Titles */
.section-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 18px;
  color: #b0b0b0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

/* Races Section */
.races-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.races-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.race-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.race-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(78, 205, 196, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.race-card:hover::before {
  opacity: 1;
}

.race-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.race-icon {
  font-size: 36px;
  text-align: center;
  margin-bottom: 15px;
}

.race-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #ffffff;
  text-align: center;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.race-description {
  color: #b0b0b0;
  margin-bottom: 15px;
  line-height: 1.5;
  text-align: center;
  font-size: 13px;
}

.race-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 12px;
  background: #2a2a2a;
  border-radius: 8px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.stat-label {
  font-size: 12px;
  color: #b0b0b0;
  font-weight: bold;
}

.stat-value {
  font-size: 14px;
  font-weight: bold;
}

.difficulty-easy {
  color: #27ae60;
}
.difficulty-medium {
  color: #f39c12;
}
.difficulty-hard {
  color: #e74c3c;
}
.popularity-high {
  color: #9b59b6;
}
.popularity-medium {
  color: #3498db;
}
.popularity-growing {
  color: #e67e22;
}

.race-features h4 {
  color: #ffffff;
  margin-bottom: 8px;
  font-size: 14px;
}

.race-features ul {
  list-style: none;
  padding: 0;
}

.race-features li {
  color: #b0b0b0;
  margin-bottom: 4px;
  padding-left: 12px;
  position: relative;
  font-size: 11px;
}

.race-features li::before {
  content: '•';
  color: #9b59b6;
  position: absolute;
  left: 0;
}

/* Locations Section */
.locations-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.location-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.location-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(78, 205, 196, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.location-card:hover::before {
  opacity: 1;
}

.location-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.location-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #ffffff;
  text-align: center;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.location-description {
  color: #b0b0b0;
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: center;
}

.location-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 15px;
  background: #2a2a2a;
  border-radius: 10px;
}

.race-soul-reaper {
  color: #e74c3c;
}
.race-arrancar {
  color: #9b59b6;
}
.race-quincy {
  color: #3498db;
}
.race-mixed {
  color: #f39c12;
}
.race-all {
  color: #e67e22;
}
.danger-low {
  color: #27ae60;
}
.danger-medium {
  color: #f39c12;
}
.danger-high {
  color: #e74c3c;
}
.danger-extreme {
  color: #8e44ad;
}

.location-features h4 {
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 16px;
}

.location-features ul {
  list-style: none;
  padding: 0;
}

.location-features li {
  color: #b0b0b0;
  margin-bottom: 5px;
  padding-left: 15px;
  position: relative;
}

.location-features li::before {
  content: '•';
  color: #9b59b6;
  position: absolute;
  left: 0;
}

/* Abilities Section */
.abilities-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
}

.abilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.ability-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.ability-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(78, 205, 196, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.ability-card:hover::before {
  opacity: 1;
}

.ability-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.ability-icon {
  font-size: 36px;
  text-align: center;
  margin-bottom: 15px;
}

.ability-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #ffffff;
  text-align: center;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ability-description {
  color: #b0b0b0;
  margin-bottom: 15px;
  line-height: 1.5;
  text-align: center;
  font-size: 13px;
}

.ability-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 12px;
  background: #2a2a2a;
  border-radius: 8px;
}

.ability-requirements h4 {
  color: #ffffff;
  margin-bottom: 8px;
  font-size: 14px;
}

.ability-requirements ul {
  list-style: none;
  padding: 0;
}

.ability-requirements li {
  color: #b0b0b0;
  margin-bottom: 4px;
  padding-left: 12px;
  position: relative;
  font-size: 11px;
}

.ability-requirements li::before {
  content: '•';
  color: #9b59b6;
  position: absolute;
  left: 0;
}

.power-medium {
  color: #f39c12;
}
.power-high {
  color: #e74c3c;
}
.power-very-high {
  color: #8e44ad;
}
.power-medium-high {
  color: #e67e22;
}

/* Game Mechanics Section */
.mechanics-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.mechanic-card {
  background: #1a1a1a;
  border: 2px solid #9b59b6;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.mechanic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.1), rgba(78, 205, 196, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mechanic-card:hover::before {
  opacity: 1;
}

.mechanic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(155, 89, 182, 0.3);
  border-color: #ff6b9d;
}

.mechanic-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #ffffff;
  text-align: center;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mechanic-description {
  color: #b0b0b0;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: center;
  font-size: 13px;
}

.mechanic-features {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mechanic-features .feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  text-align: left;
}

.feature-line {
  width: 4px;
  height: 100%;
  background: #e74c3c;
  border-radius: 2px;
  flex-shrink: 0;
  margin-top: 5px;
}

.feature-content h4 {
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: bold;
}

.feature-content p {
  color: #b0b0b0;
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
}

/* About Section */
.about-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%);
}

.about-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.about-text h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
  background: linear-gradient(45deg, #ff6b9d, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text p {
  color: #b0b0b0;
  margin-bottom: 30px;
  line-height: 1.6;
}

.feature-item {
  text-align: center;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 10px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.feature-item:hover {
  border-color: #9b59b6;
  transform: translateY(-3px);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
  display: block;
}

.feature-item h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
}

.feature-item p {
  color: #b0b0b0;
  font-size: 14px;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
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
  font-size: 24px;
  color: #9b59b6;
}

.faq-answer {
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 16px;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    padding: 100px 0 60px;
  }

  .main-title {
    font-size: 40px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-nav {
    gap: 10px;
    margin-top: 20px;
  }

  .hero-nav .nav-link {
    padding: 8px 16px;
    font-size: 12px;
  }

  .races-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .locations-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .abilities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .mechanics-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .race-card,
  .location-card,
  .ability-card,
  .mechanic-card {
    padding: 15px;
  }

  .race-icon,
  .location-icon,
  .ability-icon {
    font-size: 24px;
  }

  .race-title,
  .location-title,
  .ability-title,
  .mechanic-title {
    font-size: 16px;
  }

  .race-description,
  .location-description,
  .ability-description,
  .mechanic-description {
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .about-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .feature-card {
    padding: 15px;
  }

  .feature-card h4 {
    font-size: 16px;
  }

  .feature-card p {
    font-size: 12px;
  }

  .faq-question {
    font-size: 16px;
  }

  .faq-answer {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 40px;
  }

  .races-section {
    padding: 20px 0;
  }

  .main-title {
    font-size: 24px;
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-nav {
    gap: 5px;
    margin-top: 15px;
  }

  .hero-nav .nav-link {
    padding: 6px 12px;
    font-size: 10px;
  }

  .races-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .locations-section {
    padding: 20px 0;
  }

  .locations-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .abilities-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .mechanics-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .abilities-section {
    padding: 20px 0;
  }

  .mechanics-section {
    padding: 20px 0;
  }

  .about-section {
    padding: 20px 0;
  }

  .about-text h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .about-text p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .faq-section {
    padding: 20px 0;
  }

  .about-features {
    margin-top: 10px;
  }

  .feature-item {
    padding: 10px;
  }

  .faq-item {
    padding: 10px;
  }

  .faq-icon {
    font-size: 16px;
  }

  .faq-question {
    margin-bottom: 10px;
  }

  .race-card,
  .location-card,
  .ability-card,
  .mechanic-card {
    padding: 10px;
  }

  .race-icon,
  .location-icon,
  .ability-icon {
    font-size: 20px;
  }

  .race-title,
  .location-title,
  .ability-title,
  .mechanic-title {
    font-size: 14px;
  }

  .race-description,
  .location-description,
  .ability-description,
  .mechanic-description {
    font-size: 10px;
  }

  .section-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .section-description {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .about-features {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .feature-card {
    padding: 10px;
  }

  .feature-card h4 {
    font-size: 14px;
  }

  .feature-card p {
    font-size: 10px;
  }

  .faq-question {
    font-size: 14px;
  }

  .faq-answer {
    font-size: 10px;
  }
}
</style>
