import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const check = () => setEnabled(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!enabled) return null;

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            // reduced particle count for performance
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.04,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
