"use client"
import "./Hero.css"
const heroImage = "/Group9.png";
const heroLogos = "/Logos.png";
import { useState } from "react";


const exhibitionImages = {
    main: "/ex10.webp",
    sub1: "/ex12.webp",
    sub2: "/ex1.webp",
    sub3: "/ex3.webp",
}
const behindTheSceneImages = [
     "bts1.webp",
     "bts2.webp",
    "bts3.webp",
     "bts4.webp",
     "bts5.webp",
     "bts6.webp",
   "bts7.webp",
    "bts8.jpg",
   "bts9.jpg",


]


const credits = [
    { role: "Directed by", name: "Feranmi Abiola" },
    { role: "Executive Producers", name: "Marianne Ournac, Dolapo Amusat, Dunsin Bankole" },
    { role: "Produced by", name: "Tochukwu Uchefunah" },
    { role: "Director of Photography", name: "Boluwatife Bakare" },
    { role: "Associate Producer", name: "Anuoluwapo Sangokunle" },
    { role: "Written by", name: "Feranmi Abiola" },
    { role: "Story Consultant", name: "Anuoluwapo Sangokunle" },
    { role: "Production Design", name: "Jacinta Mbewu" },
    { role: "Edited by", name: "Feranmi Abiola, Boluwatife Bakare" },
    { role: "Second Unit Camera", name: "David Ogunsiakan, Anuoluwapo Sangokunle" },
    { role: "Sound Recording", name: "Audiovisual Sounds" },
    { role: "Original Score / Music by", name: "Waris Rasheed Olanrewaju" },
    { role: "Colorist", name: "Feranmi Abiola" },
    { role: "Production Assistants", name: "Moyosoreoluwa Azeez" },
    { role: "Production Videography", name: "David Ogunsiakan" },
    { role: "Creative Director", name: "Dunsin Bankole" },
    // { role: "Featuring", name: "[Main Subjects / Interviewees]" },
    // { role: "Additional Interviews", name: "[Names]" },
    // { role: "Archival Footage Courtesy of", name: "[Source(s)]" },
    // { role: "Licensed Material Courtesy of", name: "[Source(s)]" },
    // { role: "Special Thanks to", name: "[Individuals, Organizations, Communities]" },
    // { role: "In association with", name: "[Partner Organizations / Sponsors]" },
];
export default function Home() {
    const maraManiaText = [ "MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA","MARAMANIA",]
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
      <div>
          <section className="section h">
            <div className="hero">
                <div className="hero__image">
                    <img src={heroImage} alt="heroimage" />
                </div>
                <div className="hero__content">
                    <div className="hero__title">
                        <p>
                            MARA
                        </p>
                        <p>
                            MANIA
                        </p>
                    </div>
                    <div className="hero__description">
                        <p> THE DOCUMENTARY</p>
                        <div className="hero__credits">
                            <span className="hero__credits__positions">DIRECTED BY - </span><span className="hero__credits__names">BOLUWATIFE BAKARE</span>
                        </div>
                        <div className="hero__credits">
                            <span className="hero__credits__positions">CINEMATOGRAPHY - </span><span className="hero__credits__names">FERANMI ABIOLA</span><span className="hero__credits__positions"> PRODUCED - </span><span className="hero__credits__names">TOCHUKWU UCHEFUNAH </span>
                            <span className="hero__credits__positions">EXECUTIVE PRODUCERS - </span><span className="hero__credits__names">MARRIANE OURNAC</span>, <span className="hero__credits__names">DOLAPO AMUSAT</span>, <span className="hero__credits__names">DUNSIN BANKOLE</span>
                        </div>
                    </div>
                    <div className="hero__logos">
                        <p>
                            <img src={heroLogos} alt="heroimage" />
                        </p>
                    </div>
                </div>
            </div>
          </section>
          <section className="section i">
              <div className="intro">
                  <div className="intro__hero">
                      <h1>
                          LOGLINE
                      </h1>
                      <p>
                          “Mara Mania” explores the rise of Mara music
                          from the streets of Lagos, tracing how DJs, dancers,
                          and digital culture transformed a raw
                          underground sound into one of the
                          city’s most explosive new movements.
                      </p>
                  </div>
                  <div className="intro__description">
                      <h1>
                          SYNOPSIS
                      </h1>
                      <div>
                          <p>
                              Mara Mania is a documentary that explores
                              the rise of Mara music, a high-energy
                              street sound emerging from Lagos.
                              Built on rapid rhythms, dramatic sound
                              effects and viral dance culture, the
                              genre has grown from neighborhood studios
                              and dance circles into one of the city’s
                              most vibrant underground movements.
                          </p>
                          <p>
                              Through conversations with DJs, dancers and
                              producers at the center of the scene, the
                              film traces the origins of Mara while
                              capturing the communities that sustain it.
                              Moving between intimate studio sessions,
                              street performances and the digital spaces
                              where the sound spreads, Mara Mania documents
                              a grassroots cultural movement in real time.
                          </p>
                      </div>

                  </div>
                  <div className="intro__video">
                      <div className="intro__video__backgrounding">
                          <p>
                              {maraManiaText.map((text, index) => (
                                  <p key={index}>
                                      {text}
                                  </p>
                              ))}
                          </p>
                          <p>
                              {maraManiaText.map((text, index) => (
                                  <p key={index}>
                                      {text}
                                  </p>
                              ))}
                          </p>
                          <p>
                              {maraManiaText.map((text, index) => (
                                  <p key={index}>
                                      {text}
                                  </p>
                              ))}
                          </p>
                      </div>
                      <div className="intro__youtube_video__section">
                          <section>
                              <iframe className="youtube__video"
                                      src="https://www.youtube.com/embed/sObg5b2nx44?si=871ZKlRg7Vk2ISh8"
                                      title="YouTube video player" frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      referrerPolicy="strict-origin-when-cross-origin"
                                      allowFullScreen>
                              </iframe>
                              <div className="youtube__video__watch__buttons">
                                  <p>
                                      CLICK TO WATCH MARAMANIA TRAILER
                                  </p>
                                  <p>
                                      +
                                  </p>
                                  <p>
                                      REQUEST ACCESS TO FULLCUT
                                  </p>
                              </div>

                          </section>

                      </div>
                  </div>
              </div>

          </section>
          <section className="section e">

            <div className="exhibition">
                <section className="exhibition__header">
                    <h1>MARA MANIA EXHIBITION</h1>
                </section>
                <section className="exhibition__content">
                    <div className="exhibition__main__image">
                        <figure>
                            <img src={exhibitionImages.sub2} alt="heroimage" />
                        </figure>
                    </div>
                    <div className="exhibition__sub">
                        <figure>
                            <img src={exhibitionImages.sub1} alt="heroimage" />
                        </figure>
                        <figure>
                            <img src={exhibitionImages.main} alt="heroimage" />
                        </figure>
                        <figure>
                            <img src={exhibitionImages.sub3} alt="heroimage" />
                        </figure>
                    </div>

                </section>
            </div>
          </section>
          <section className="section bts">
            <div className="behind__the__scene">
                <div className="behind__the__scene__header">
                    <h1>
                        BEHIND THE SCENES
                    </h1>
                </div>
                <div className="behind__the__scene__body">
                    {behindTheSceneImages.map((image, index) => (
                        <figure key={index} onClick={() => setSelectedImage(image)} className="behind__the__scene__figure">
                            <img src={`/${image}`} alt={`bts ${index + 1}`} />
                        </figure>
                    ))}
                </div>

            </div>

          </section>
          <section className="section details c">
            <div className="credits__section">
                <div className="credits__section__container">
                    <h1>
                            CREDITS
                    </h1>
                    <p>
                        <div className="credits">
                            {credits.map((credit, index) => (
                                <div className="credits__row" key={index}>
                                    <p className="credits__role">{credit.role}</p>
                                    <p className="credits__name">{credit.name}</p>
                                </div>
                            ))}
                        </div>
                    </p>
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
          </section>
          <section className="section f">
              <div className="footer">
                  <p className="footer__contact__us">
                      CONTACT US
                  </p>
                  <p className="footer__light">
                      WANT TO COLLABORATE?
                  </p>
                  <p className="footer__light">
                      <a href="mailto:their@email.com?subject=Collaboration%20Inquiry" className="footer__email">
                          SEND US AN EMAIL
                      </a>
                  </p>
              </div>
          </section>
          {selectedImage && (
              <div className="lightbox" onClick={() => setSelectedImage(null)}>
                  <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
                      <button className="lightbox__close" onClick={() => setSelectedImage(null)}>✕</button>
                      <img src={`/${selectedImage}`} alt="bts fullscreen" />
                  </div>
              </div>
          )}
      </div>
  );
}
