import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ClincareProcess = () => {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((element) => {
      let grandParentHeight = element.clientHeight;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom",
          end: "+=20px",
          scrub: 1,
        },
      });
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: element.querySelector(".inner-line-container"),
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl2.to(element.querySelector(".inner-line-container"), {
        overflow: "visible",
        ease: "circ.inOut",
      });
      tl2.to(element.querySelector(".inner-line"), {
        height: grandParentHeight,
        duration: 5,
        ease: "expo.inOut",
      });

      tl.to(element.querySelector(".section-item"), {
        x: 0,
        opacity: 1,
        duration: 3,
        // overflow: "hidden",
      });

      tl.to(element.querySelector(".circle"), {
        backgroundColor: "white",
        zIndex: 1,
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center text-white">
      <div className="text-center">
        <h2>Simple process, great results</h2>
        <p>
          Use the cards below to learn how Clin-Care Agency can help your loved
          ones.
        </p>
      </div>

      <div className="timeline overflow-hidden">
        <section className="section">
          <div class="circle"></div>
          <div className="line"></div>
          <div className="inner-line-container">
            <div className="inner-line"></div>
          </div>
          <div className="section-item">
            <h3 className="font-bold text-lg leading-4">Contact us</h3>
            <p>
              At ClinCare agency we seek to improve the quality of care and
              attention given to the old, the sick and the disadvantaged in the
              society by pairing them with professional healthcare workers such
              as private nurses.
            </p>
          </div>
        </section>

        <section className="section">
          <div class="circle"></div>
          <div className="line"></div>
          <div className="inner-line-container">
            <div className="inner-line"></div>
          </div>
          <div className="section-item">
            <h3 className="font-bold text-lg leading-4">Client assessment</h3>
            <p>
              At ClinCare agency we seek to improve the quality of care and
              attention given to the old, the sick and the disadvantaged in the
              society by pairing them with professional healthcare workers such
              as private nurses.
            </p>
          </div>
        </section>

        <section className="section">
          <div class="circle"></div>
          <div className="line"></div>
          <div className="inner-line-container">
            <div className="inner-line"></div>
          </div>
          <div className="section-item">
            <h3 className="font-bold text-lg leading-4">
              Care plan and agreement
            </h3>
            <p>
              At ClinCare agency we seek to improve the quality of care and
              attention given to the old, the sick and the disadvantaged in the
              society by pairing them with professional healthcare workers such
              as private nurses.
            </p>
          </div>
        </section>

        <section className="section">
          <div class="circle"></div>
          <div className="section-item">
            <h3 className="font-bold text-lg leading-4">
              Professional caregiver assigned
            </h3>
            <p>
              At ClinCare agency we seek to improve the quality of care and
              attention given to the old, the sick and the disadvantaged in the
              society by pairing them with professional healthcare workers such
              as private nurses.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClincareProcess;
