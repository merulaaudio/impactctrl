document.addEventListener('DOMContentLoaded', async () => {
  const image = document.getElementById('plugin-image');
  if (!image) return;

  try {
    const parts = await Promise.all(
      [0, 1, 2, 3, 4].map(i => fetch(`assets/img-${i}.txt`).then(r => {
        if (!r.ok) throw new Error(`Image part ${i} failed to load`);
        return r.text();
      }))
    );

    image.src = 'data:image/webp;base64,' + parts.map(p => p.trim()).join('');
  } catch (error) {
    console.error('Could not load IMPACTCTRL screenshot:', error);
  }
});
