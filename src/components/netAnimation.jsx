import "../css/netAnimation.css";

export const NetAnimation = () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  let nodes = [];
  const nodeCount = 17;
  const nodeSize = 20;
  let hue = 0;
  const hueStep = 0.2;
  const pathDist = 0.3;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initNodes() {
    for (let i = 0; i < nodeCount; i++) {
      let overlap = false;
      let x, y;

      do {
        overlap = false;
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;

        for (const node of nodes) {
          const dx = x - node.x;
          const dy = y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < nodeSize * 2) {
            overlap = true;
            break;
          }
        }
      } while (overlap);

      const node = {
        x: x,
        y: y,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        hue: Math.random() * 360, // New: each node gets an initial hue
      };

      nodes.push(node);
    }
  }

  function updateHue() {
    hue += hueStep;
    if (hue >= 360) {
      hue = 0;
    }
  }

  // Utility function to perform linear interpolation
  function lerp(start, end, t) {
    return (1 - t) * start + t * end;
  }

  // Update your drawNodes function
  function drawNodes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const nodeB = nodes[j];
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const tA = nodeA.x / canvas.width;
        const tB = nodeB.x / canvas.width;

        const hueA = lerp(200, 200, tA);
        const hueB = lerp(200, 200, tB);
        const avgHue = (hueA + hueB) / 2;

        const saturation = 100 - (distance / (canvas.width * pathDist)) * 100;

        if (distance < canvas.width * pathDist) {
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.strokeStyle = `hsl(${avgHue}, ${saturation}%, 50%)`;
          ctx.stroke();
        }
      }

      const tX = nodeA.x / canvas.width;
      const tY = nodeA.y / canvas.height;
      const hue = lerp(0, 0, tX);
      const lightness = lerp(100, 100, tY); // Lightness varies between 40 and 60
      const saturation = lerp(0, 100, tY); // Saturation varies between 60 and 100

      ctx.beginPath();
      ctx.arc(nodeA.x, nodeA.y, nodeSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      ctx.fill();
    }
  }

  function updateNodes() {
    for (const node of nodes) {
      node.x += node.dx;
      node.y += node.dy;

      if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.dy *= -1;
    }
  }

  function animate() {
    drawNodes();
    updateNodes();
    updateHue();
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  initNodes();
  animate();

  window.addEventListener("resize", resizeCanvas);

  return (
    <>
      <canvas id="myCanvas"></canvas>
    </>
  );
};
