<template>
  <div class="wiki-page">
    <!-- Header Component -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section class="hero-inner" >
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="hero-title">{{ $t('wikiPage.heroTitle') }}</h1>
          <p class="hero-description">
            {{ $t('wikiPage.heroDescription') }}
          </p>
          <div class="hero-nav">
            <a href="javascript:void(0)" @click="scrollToSection('races')" class="nav-link">
              <span class="nav-icon">⚔️</span>
              {{ $t('wikiPage.navRaces') }}
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('locations')" class="nav-link">
              <span class="nav-icon">🌍</span>
              {{ $t('wikiPage.navLocations') }}
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('abilities')" class="nav-link">
              <span class="nav-icon">💪</span>
              {{ $t('wikiPage.navAbilities') }}
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('mechanics')" class="nav-link">
              <span class="nav-icon">⚙️</span>
              {{ $t('wikiPage.navMechanics') }}
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('about')" class="nav-link">
              <span class="nav-icon">📖</span>
              {{ $t('wikiPage.navAbout') }}
            </a>
            <a href="javascript:void(0)" @click="scrollToSection('faq')" class="nav-link">
              <span class="nav-icon">❓</span>
              {{ $t('wikiPage.navFAQ') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Races Section -->
    <section class="races-section" id="races">
      <div class="container">
        <div class="races-wrap">
          <h2 class="section-title">{{ $t('wikiPage.racesTitle') }}</h2>
          <p class="section-description">{{ $t('wikiPage.racesDesc') }}</p>
          <div class="races-grid">
            <div class="race-card">
              <div class="race-icon">⚔️</div>
              <h3 class="race-title">{{ $t('wikiPage.soulReaperTitle') }}</h3>
              <p class="race-description">{{ $t('wikiPage.soulReaperDesc') }}</p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.difficultyLabel') }}</span>
                  <span class="stat-value difficulty-medium">{{ $t('wikiPage.difficultyMedium') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.popularityLabel') }}</span>
                  <span class="stat-value popularity-highest">{{ $t('wikiPage.popularityHighest') }}</span>
                </div>
              </div>
              <div class="race-features">
                <h4>{{ $t('wikiPage.soulReaperFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.soulReaperFeature1') }}</li>
                  <li>{{ $t('wikiPage.soulReaperFeature2') }}</li>
                  <li>{{ $t('wikiPage.soulReaperFeature3') }}</li>
                  <li>{{ $t('wikiPage.soulReaperFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="race-card">
              <div class="race-icon">💀</div>
              <h3 class="race-title">{{ $t('wikiPage.arrancarTitle') }}</h3>
              <p class="race-description">{{ $t('wikiPage.arrancarDesc') }}</p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.difficultyLabel') }}</span>
                  <span class="stat-value difficulty-easy">{{ $t('wikiPage.difficultyEasy') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.popularityLabel') }}</span>
                  <span class="stat-value popularity-high">{{ $t('wikiPage.popularityHigh') }}</span>
                </div>
              </div>
              <div class="race-features">
                <h4>{{ $t('wikiPage.soulReaperFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.arrancarFeature1') }}</li>
                  <li>{{ $t('wikiPage.arrancarFeature2') }}</li>
                  <li>{{ $t('wikiPage.arrancarFeature3') }}</li>
                  <li>{{ $t('wikiPage.arrancarFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="race-card">
              <div class="race-icon">🏹</div>
              <h3 class="race-title">{{ $t('wikiPage.quincyTitle') }}</h3>
              <p class="race-description">{{ $t('wikiPage.quincyDesc') }}</p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.difficultyLabel') }}</span>
                  <span class="stat-value difficulty-hard">{{ $t('wikiPage.difficultyHard') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.popularityLabel') }}</span>
                  <span class="stat-value popularity-medium">{{ $t('wikiPage.popularityMedium') }}</span>
                </div>
              </div>
              <div class="race-features">
                <h4>{{ $t('wikiPage.soulReaperFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.quincyFeature1') }}</li>
                  <li>{{ $t('wikiPage.quincyFeature2') }}</li>
                  <li>{{ $t('wikiPage.quincyFeature3') }}</li>
                  <li>{{ $t('wikiPage.quincyFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="race-card">
              <div class="race-icon">💎</div>
              <h3 class="race-title">{{ $t('wikiPage.fullbringerTitle') }}</h3>
              <p class="race-description">{{ $t('wikiPage.fullbringerDesc') }}</p>
              <div class="race-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.difficultyLabel') }}</span>
                  <span class="stat-value difficulty-medium">{{ $t('wikiPage.difficultyMediumHard') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.popularityLabel') }}</span>
                  <span class="stat-value popularity-growing">{{ $t('wikiPage.popularityGrowing') }}</span>
                </div>
              </div>
              <div class="race-features">
                <h4>{{ $t('wikiPage.soulReaperFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.fullbringerFeature1') }}</li>
                  <li>{{ $t('wikiPage.fullbringerFeature2') }}</li>
                  <li>{{ $t('wikiPage.fullbringerFeature3') }}</li>
                  <li>{{ $t('wikiPage.fullbringerFeature4') }}</li>
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
          <h2 class="section-title">{{ $t('wikiPage.locationsTitle') }}</h2>
          <p class="section-description">{{ $t('wikiPage.locationsDesc') }}</p>
          <div class="locations-grid">
            <div class="location-card">
              <h3 class="location-title">{{ $t('wikiPage.soulSocietyTitle') }}</h3>
              <p class="location-description">{{ $t('wikiPage.soulSocietyDesc') }}</p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.primaryRace') }}</span>
                  <span class="stat-value race-soul-reaper">{{ $t('wikiPage.soulReaperTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.dangerLevel') }}</span>
                  <span class="stat-value danger-medium">{{ $t('wikiPage.dangerMedium') }}</span>
                </div>
              </div>
              <div class="location-features">
                <h4>{{ $t('wikiPage.notableFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.soulSocietyFeature1') }}</li>
                  <li>{{ $t('wikiPage.soulSocietyFeature2') }}</li>
                  <li>{{ $t('wikiPage.soulSocietyFeature3') }}</li>
                  <li>{{ $t('wikiPage.soulSocietyFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">{{ $t('wikiPage.huecoMundoTitle') }}</h3>
              <p class="location-description">{{ $t('wikiPage.huecoMundoDesc') }}</p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.primaryRace') }}</span>
                  <span class="stat-value race-arrancar">Hollow/{{ $t('wikiPage.arrancarTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.dangerLevel') }}</span>
                  <span class="stat-value danger-high">{{ $t('wikiPage.dangerHigh') }}</span>
                </div>
              </div>
              <div class="location-features">
                <h4>{{ $t('wikiPage.notableFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.huecoMundoFeature1') }}</li>
                  <li>{{ $t('wikiPage.huecoMundoFeature2') }}</li>
                  <li>{{ $t('wikiPage.huecoMundoFeature3') }}</li>
                  <li>{{ $t('wikiPage.huecoMundoFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">{{ $t('wikiPage.karakuraTownTitle') }}</h3>
              <p class="location-description">{{ $t('wikiPage.karakuraTownDesc') }}</p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.primaryRace') }}</span>
                  <span class="stat-value race-mixed">Mixed</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.dangerLevel') }}</span>
                  <span class="stat-value danger-low">{{ $t('wikiPage.dangerLow') }}</span>
                </div>
              </div>
              <div class="location-features">
                <h4>{{ $t('wikiPage.notableFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.karakuraTownFeature1') }}</li>
                  <li>{{ $t('wikiPage.karakuraTownFeature2') }}</li>
                  <li>{{ $t('wikiPage.karakuraTownFeature3') }}</li>
                  <li>{{ $t('wikiPage.karakuraTownFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">{{ $t('wikiPage.fakeKarakuraTitle') }}</h3>
              <p class="location-description">{{ $t('wikiPage.fakeKarakuraDesc') }}</p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.primaryRace') }}</span>
                  <span class="stat-value race-fullbringer">{{ $t('wikiPage.fullbringerTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.dangerLevel') }}</span>
                  <span class="stat-value danger-low">{{ $t('wikiPage.dangerLow') }}</span>
                </div>
              </div>
              <div class="location-features">
                <h4>{{ $t('wikiPage.notableFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.fakeKarakuraFeature1') }}</li>
                  <li>{{ $t('wikiPage.fakeKarakuraFeature2') }}</li>
                  <li>{{ $t('wikiPage.fakeKarakuraFeature3') }}</li>
                  <li>{{ $t('wikiPage.fakeKarakuraFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">{{ $t('wikiPage.wandenreichTitle') }}</h3>
              <p class="location-description">{{ $t('wikiPage.wandenreichDesc') }}</p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.primaryRace') }}</span>
                  <span class="stat-value race-quincy">{{ $t('wikiPage.quincyTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.dangerLevel') }}</span>
                  <span class="stat-value danger-high">{{ $t('wikiPage.dangerHigh') }}</span>
                </div>
              </div>
              <div class="location-features">
                <h4>{{ $t('wikiPage.notableFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.wandenreichFeature1') }}</li>
                  <li>{{ $t('wikiPage.wandenreichFeature2') }}</li>
                  <li>{{ $t('wikiPage.wandenreichFeature3') }}</li>
                  <li>{{ $t('wikiPage.wandenreichFeature4') }}</li>
                </ul>
              </div>
            </div>

            <div class="location-card">
              <h3 class="location-title">{{ $t('wikiPage.hellTitle') }}</h3>
              <p class="location-description">{{ $t('wikiPage.hellDesc') }}</p>
              <div class="location-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.primaryRace') }}</span>
                  <span class="stat-value race-all">{{ $t('wikiPage.raceAll') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.dangerLevel') }}</span>
                  <span class="stat-value danger-extreme">{{ $t('wikiPage.dangerExtreme') }}</span>
                </div>
              </div>
              <div class="location-features">
                <h4>{{ $t('wikiPage.notableFeatures') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.hellFeature1') }}</li>
                  <li>{{ $t('wikiPage.hellFeature2') }}</li>
                  <li>{{ $t('wikiPage.hellFeature3') }}</li>
                  <li>{{ $t('wikiPage.hellFeature4') }}</li>
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
          <h2 class="section-title">{{ $t('wikiPage.abilitiesTitle') }}</h2>
          <p class="section-description">{{ $t('wikiPage.abilitiesDesc') }}</p>
          <div class="abilities-grid">
            <div class="ability-card">
              <div class="ability-icon">⚔️</div>
              <h3 class="ability-title">{{ $t('wikiPage.shikaiTitle') }}</h3>
              <p class="ability-description">{{ $t('wikiPage.shikaiDesc') }}</p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.raceLabel') }}</span>
                  <span class="stat-value race-soul-reaper">{{ $t('wikiPage.soulReaperTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.powerLevelLabel') }}</span>
                  <span class="stat-value power-medium">{{ $t('wikiPage.powerMedium') }}</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>{{ $t('wikiPage.requirementsLabel') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.shikaiReq1') }}</li>
                  <li>{{ $t('wikiPage.shikaiReq2') }}</li>
                  <li>{{ $t('wikiPage.shikaiReq3') }}</li>
                  <li>{{ $t('wikiPage.shikaiReq4') }}</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">🗡️</div>
              <h3 class="ability-title">{{ $t('wikiPage.bankaiTitle') }}</h3>
              <p class="ability-description">{{ $t('wikiPage.bankaiDesc') }}</p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.raceLabel') }}</span>
                  <span class="stat-value race-soul-reaper">{{ $t('wikiPage.soulReaperTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.powerLevelLabel') }}</span>
                  <span class="stat-value power-very-high">{{ $t('wikiPage.powerVeryHigh') }}</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>{{ $t('wikiPage.requirementsLabel') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.bankaiReq1') }}</li>
                  <li>{{ $t('wikiPage.bankaiReq2') }}</li>
                  <li>{{ $t('wikiPage.bankaiReq3') }}</li>
                  <li>{{ $t('wikiPage.bankaiReq4') }}</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">💀</div>
              <h3 class="ability-title">{{ $t('wikiPage.resurrectionTitle') }}</h3>
              <p class="ability-description">{{ $t('wikiPage.resurrectionDesc') }}</p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.raceLabel') }}</span>
                  <span class="stat-value race-arrancar">{{ $t('wikiPage.arrancarTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.powerLevelLabel') }}</span>
                  <span class="stat-value power-high">{{ $t('wikiPage.powerHigh') }}</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>{{ $t('wikiPage.requirementsLabel') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.resurrectionReq1') }}</li>
                  <li>{{ $t('wikiPage.resurrectionReq2') }}</li>
                  <li>{{ $t('wikiPage.resurrectionReq3') }}</li>
                  <li>{{ $t('wikiPage.resurrectionReq4') }}</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">🏹</div>
              <h3 class="ability-title">{{ $t('wikiPage.vollstandigTitle') }}</h3>
              <p class="ability-description">{{ $t('wikiPage.vollstandigDesc') }}</p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.raceLabel') }}</span>
                  <span class="stat-value race-quincy">{{ $t('wikiPage.quincyTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.powerLevelLabel') }}</span>
                  <span class="stat-value power-very-high">{{ $t('wikiPage.powerVeryHigh') }}</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>{{ $t('wikiPage.requirementsLabel') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.vollstandigReq1') }}</li>
                  <li>{{ $t('wikiPage.vollstandigReq2') }}</li>
                  <li>{{ $t('wikiPage.vollstandigReq3') }}</li>
                  <li>{{ $t('wikiPage.vollstandigReq4') }}</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">💎</div>
              <h3 class="ability-title">{{ $t('wikiPage.twinSoulTitle') }}</h3>
              <p class="ability-description">{{ $t('wikiPage.twinSoulDesc') }}</p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.raceLabel') }}</span>
                  <span class="stat-value race-fullbringer">{{ $t('wikiPage.fullbringerTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.powerLevelLabel') }}</span>
                  <span class="stat-value power-high">{{ $t('wikiPage.powerHigh') }}</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>{{ $t('wikiPage.requirementsLabel') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.twinSoulReq1') }}</li>
                  <li>{{ $t('wikiPage.twinSoulReq2') }}</li>
                  <li>{{ $t('wikiPage.twinSoulReq3') }}</li>
                  <li>{{ $t('wikiPage.twinSoulReq4') }}</li>
                </ul>
              </div>
            </div>

            <div class="ability-card">
              <div class="ability-icon">✨</div>
              <h3 class="ability-title">{{ $t('wikiPage.kidoTitle') }}</h3>
              <p class="ability-description">{{ $t('wikiPage.kidoDesc') }}</p>
              <div class="ability-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.raceLabel') }}</span>
                  <span class="stat-value race-soul-reaper">{{ $t('wikiPage.soulReaperTitle') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ $t('wikiPage.powerLevelLabel') }}</span>
                  <span class="stat-value power-medium-high">{{ $t('wikiPage.powerMediumHigh') }}</span>
                </div>
              </div>
              <div class="ability-requirements">
                <h4>{{ $t('wikiPage.requirementsLabel') }}</h4>
                <ul>
                  <li>{{ $t('wikiPage.kidoReq1') }}</li>
                  <li>{{ $t('wikiPage.kidoReq2') }}</li>
                  <li>{{ $t('wikiPage.kidoReq3') }}</li>
                  <li>{{ $t('wikiPage.kidoReq4') }}</li>
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
          <h2 class="section-title">{{ $t('wikiPage.mechanicsTitle') }}</h2>
          <p class="section-description">{{ $t('wikiPage.mechanicsDesc') }}</p>
          <div class="mechanics-grid">
            <div class="mechanic-card">
              <h3 class="mechanic-title">{{ $t('wikiPage.progressionSystemTitle') }}</h3>
              <p class="mechanic-description">{{ $t('wikiPage.progressionSystemDesc') }}</p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.gradeSystemTitle') }}</h4>
                    <p>{{ $t('wikiPage.gradeSystemDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.missionBoardsTitle') }}</h4>
                    <p>{{ $t('wikiPage.missionBoardsDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.innerWorldTrialsTitle') }}</h4>
                    <p>{{ $t('wikiPage.innerWorldTrialsDesc') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mechanic-card">
              <h3 class="mechanic-title">{{ $t('wikiPage.combatMechanicsTitle') }}</h3>
              <p class="mechanic-description">{{ $t('wikiPage.combatMechanicsDesc') }}</p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.reiatsuSystemTitle') }}</h4>
                    <p>{{ $t('wikiPage.reiatsuSystemDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.comboSystemTitle') }}</h4>
                    <p>{{ $t('wikiPage.comboSystemDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.blockingParryingTitle') }}</h4>
                    <p>{{ $t('wikiPage.blockingParryingDesc') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mechanic-card">
              <h3 class="mechanic-title">{{ $t('wikiPage.pvpRaidsTitle') }}</h3>
              <p class="mechanic-description">{{ $t('wikiPage.pvpRaidsDesc') }}</p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.rankedBattlesTitle') }}</h4>
                    <p>{{ $t('wikiPage.rankedBattlesDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.clanWarsTitle') }}</h4>
                    <p>{{ $t('wikiPage.clanWarsDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.tournamentModeTitle') }}</h4>
                    <p>{{ $t('wikiPage.tournamentModeDesc') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mechanic-card">
              <h3 class="mechanic-title">{{ $t('wikiPage.customizationTitle') }}</h3>
              <p class="mechanic-description">{{ $t('wikiPage.customizationDesc') }}</p>
              <div class="mechanic-features">
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.characterCreationTitle') }}</h4>
                    <p>{{ $t('wikiPage.characterCreationDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.skillTreesTitle') }}</h4>
                    <p>{{ $t('wikiPage.skillTreesDesc') }}</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-line"></div>
                  <div class="feature-content">
                    <h4>{{ $t('wikiPage.equipmentSystemTitle') }}</h4>
                    <p>{{ $t('wikiPage.equipmentSystemDesc') }}</p>
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
          <h2 class="section-title">{{ $t('wikiPage.aboutTitle') }}</h2>
          <p class="section-description">{{ $t('wikiPage.aboutDesc') }}</p>
          <div class="about-content">
            <div class="about-text">
              <h3>{{ $t('wikiPage.completeGuideTitle') }}</h3>
              <p>{{ $t('wikiPage.completeGuideText') }}</p>
              <h3>{{ $t('wikiPage.regularUpdatesTitle') }}</h3>
              <p>{{ $t('wikiPage.regularUpdatesText') }}</p>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">📚</div>
              <h4>{{ $t('wikiPage.comprehensiveGuidesTitle') }}</h4>
              <p>{{ $t('wikiPage.comprehensiveGuidesDesc') }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🔄</div>
              <h4>{{ $t('wikiPage.regularUpdatesShortTitle') }}</h4>
              <p>{{ $t('wikiPage.regularUpdatesShortDesc') }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">👥</div>
              <h4>{{ $t('wikiPage.communityDrivenTitle') }}</h4>
              <p>{{ $t('wikiPage.communityDrivenDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <h2 class="section-title">{{ $t('wikiPage.faqTitle') }}</h2>
          <p class="section-description">{{ $t('wikiPage.faqDesc') }}</p>
          <div class="faq-content">
            <div class="faq-list">
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">❓</span>
                  {{ $t('wikiPage.faq1Question') }}
                </h3>
                <p class="faq-answer">{{ $t('wikiPage.faq1Answer') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">⚔️</span>
                  {{ $t('wikiPage.faq2Question') }}
                </h3>
                <p class="faq-answer">{{ $t('wikiPage.faq2Answer') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">🌍</span>
                  {{ $t('wikiPage.faq3Question') }}
                </h3>
                <p class="faq-answer">{{ $t('wikiPage.faq3Answer') }}</p>
              </div>
              <div class="faq-item">
                <h3 class="faq-question">
                  <span class="faq-icon">💪</span>
                  {{ $t('wikiPage.faq4Question') }}
                </h3>
                <p class="faq-answer">{{ $t('wikiPage.faq4Answer') }}</p>
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
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSEO } from '@/seo/i18n-meta-tags'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()
const { t } = useI18n()

// SEO
const { updateSEO } = useSEO('wikiPage', { canonical: route.path })

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

// 生命周期
onMounted(() => {
  updateSEO()
})

// 监听语言切换
watch(() => route.path, () => {
  updateSEO()
})
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
