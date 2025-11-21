import { useEffect, useRef } from 'react';

// Animated procedural dots grid with parallax for a premium tech vibe
const BackdropFX = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    let w = (canvas.width = window.innerWidth * DPR);
    let h = (canvas.height = window.innerHeight * DPR);

    const dots = [];
    const cols = 40;
    const rows = 24;
    const xGap = w / cols;
    const yGap = h / rows;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({ x: i * xGap + xGap / 2, y: j * yGap + yGap / 2, p: Math.random() * Math.PI * 2 });
      }
    }

    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, 'rgba(99,102,241,0.10)');
    gradient.addColorStop(0.5, 'rgba(236,72,153,0.08)');
    gradient.addColorStop(1, 'rgba(34,211,238,0.10)');

    const onResize = () => {
      w = canvas.width = window.innerWidth * DPR;
      h = canvas.height = window.innerHeight * DPR;
    };

    window.addEventListener('resize', onResize);

    let raf;
    const render = (t = 0) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(10,11,30, 0.95)';
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = gradient;
      dots.forEach((d, i) => {
        const r = 0.8 + Math.sin(t * 0.002 + d.p) * 0.6;
        const ox = Math.sin(t * 0.0008 + i) * 2.0;
        const oy = Math.cos(t * 0.0009 + i) * 2.0;
        ctx.beginPath();
        ctx.arc(d.x + ox, d.y + oy, r * DPR, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      raf = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" />;
};

export default BackdropFX;
