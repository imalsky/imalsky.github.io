import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideFooter from '../components/SideFooter'

import heroImage from '../assets/images/hero.jpg'
import ages from '../assets/images/ages.png'
import mr1 from '../assets/images/mr1.png'
import mr2 from '../assets/images/mr2.png'
import struct from '../assets/images/struct.png'

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>About Me</h2>
          <p>
            <strong>I'm a second year graduate student</strong> in the University of Michigan
            Astronomy Department. I received my B.A. in Physics from the
            University of Chicago in 2018.
          </p>
        </header>
        <div className="content">
          <p>
            I work on characterizing exoplanet atmospheres. My work at Michigan
            focuses on three-dimensional modeling of 'Hot Jupiters'. This subset
            of exoplanets are some of the best observational candidates due to
            their tight in orbits and large size.
          </p>
          <p>
            I'm a big fan of science outreach. I coach for a Science Olympiad
            team in Ann Arbor and mentor several undergraduates at the
            University of Michigan for physics/astronomy advice. If I can
            help at all with astronomy community or career advice related
            questions, feel free to reach out to me at <strong>isaacmalsky@gmail.com</strong>!
          </p>
          <p>
            I'm also interested in long distance running, crosswords, and boxing.
            I use <a href="https://www.mypronouns.org/he-him">he/him/his pronouns</a>.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Research Content</h2>
        </header>
        <div className="content">
          <section>
            <header>
              <h3>Coupled Thermal and Compositional Evolution of Photo Evaporating Planet Envelopes</h3>
              <p>
                The University of Chicago<br />
                Advisers: Dr. Leslie Rogers
              </p>
            </header>
            <div className="content">
              <span className="image main">
                <img src={mr2} alt="" />
              </span>
              <p>
                Mass-Radius relations for planets of varying envelope fraction and helium content -- evolved for 5.0 Gyr without mass loss. In each panel we included simulations of a large number of planets with atmospheric helium fractions of 18%, 24%, 30%, 36%, and 40% as well as envelope mass fractions of 0.001 (purple), 0.010 (green), 0.025 (blue), 0.05 (pink), 0.10 (brown), 0.15 (light blue), and 0.20 (gold). The darker lines within each color grouping represent higher fractions of initial helium. The dotted black line in all figures represents the planetary core radius. All models were run with a host star temperature of 6000K, and envelope metal mass fraction Z=0.02. Differences in helium fraction caused significant radii differences for planets with large envelope fractions. Planets with smaller envelope fractions had much tighter Mass-Radius relations, as envelope added a smaller fraction to the planet's overall radius.
              </p>
            </div>
          </section>

          <section>
            <header>
              <h3>Modeling the high resolution emission spectra of non-transiting Upsilon Andromedae b</h3>
              <p>
                The University of Michigan<br />
                Advisers: Dr. Emily Rauscher
              </p>
            </header>
            <div className="content">
              <span className="image main">
                <img src={mr1} alt="" />
              </span>
              <p>
                The advent of high resolution spectroscopy (R > 30,000) has expanded our capability to study non-transiting exoplanets, vastly increasing the number of planets accessible for observation. Models have generally simulated properties of hot Jupiters assuming edge on viewing, which is good for transiting planets, but neglects the large fraction of planets we can observe at larger inclinations. We use a General Circulation Model (GCM) to simulate the 3D structure of Upsilon Andromedae b - a bright non-transiting planet that has been well characterized. We then implement a ray-tracing radiative transfer model to study how emission spectra change with viewing inclination. By including the Doppler shifts in the radiative transfer post processing model, we study the effects of planetary winds and rotation on the emission spectra. We run 3D models of Upsilon Andromedae b with various cloud properties, and show that cloud coverage has a significant effect on the emission spectra. Furthermore, because cloud coverage is inhomogeneous, its effects are highly dependent on viewing inclination. We show that due to the inherent spatial variations within hot Jupiter atmospheres, models capable of treating inclination effects will be critical in understanding and analyzing results from high resolution emission spectra.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section>
        <SideFooter />
        <header>
          <h2>Get in touch</h2>
        </header>
        <div className="content">
          <span className="image main">
            <img src={ages} alt="" />
          </span>
          <span className="image main">
            <img src={struct} alt="" />
          </span>
        </div>
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
