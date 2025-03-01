import { useSpring, animated, config } from '@react-spring/web';
import { useState } from 'react';
import SpringAnimatedList from '../components/SpringAnimatedList';

function ReactSpringDemo() {
  const [toggle, setToggle] = useState(false);

  // Bouncing Ball Animation
  const ballSpring = useSpring({
    from: { y: 0 },
    to: async (next) => {
      while (true) {
        await next({ y: 100 });
        await next({ y: 0 });
      }
    },
    config: { tension: 180, friction: 12 }
  });

  // Hover Effect
  const [hoverProps, hoverApi] = useSpring(() => ({
    scale: 1,
    config: config.wobbly
  }));
 
  // Fading Text Animation
  const fadeText = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    loop: true,
    config: { duration: 2000 },
  });


  // Rotating Square Animation
  const rotateSquare = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 3000 },
  });
  


  return (
    <div className="demo-container">
      <h1 className="text-3xl font-bold mb-8">React Spring Examples</h1>

      {/* Spring Animated List */}
      <SpringAnimatedList />

      {/* Bouncing Ball */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Physics-based Bouncing Ball</h2>
        <div className="h-32 relative">
          <animated.div
            style={{
              ...ballSpring,
              position: 'absolute',
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: '#646cff',
            }}
          />
        </div>
      </section>

      {/* Hover Effect */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Spring-powered Hover Effect</h2>
        <animated.div
          style={hoverProps}
          onMouseEnter={() => hoverApi.start({ scale: 1.2 })}
          onMouseLeave={() => hoverApi.start({ scale: 1 })}
          className="w-32 h-32 bg-primary rounded-lg mx-auto cursor-pointer"
        />
      </section>

      {/* Toggle Animation */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Toggle Animation</h2>
        <animated.button
          style={useSpring({
            transform: toggle ? 'scale(1.1)' : 'scale(1)',
            background: toggle ? '#535bf2' : '#646cff',
          })}
          onClick={() => setToggle(!toggle)}
          className="px-6 py-3 text-white rounded-lg"
        >
          Click to Toggle
        </animated.button>
      </section>
      {/* Fading Text Animation */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Fading Text</h2>
        <animated.p style={fadeText} className="text-lg">
          This text fades in and out
        </animated.p>
      </section>

      {/* Rotating Square */}
      <section className="demo-card">
        <h2 className="text-2xl font-bold mb-4">Rotating Square</h2>
        <animated.div
          style={{
            ...rotateSquare,
            width: 50,
            height: 50,
            backgroundColor: '#535bf2',
            borderRadius: 8,
          }}
          className="mx-auto"
        />
      </section>

      
    </div>
  );
}

export default ReactSpringDemo;