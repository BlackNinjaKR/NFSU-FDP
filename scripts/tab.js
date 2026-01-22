(function(){
        const buttons = document.querySelectorAll('#about .about-tab-btn');
        const panels = document.querySelectorAll('#about .about-tab-panel');

        function activateButton(btn){
          buttons.forEach(b=>{
            const selected = b === btn;
            b.classList.toggle('active', selected);
            b.setAttribute('aria-selected', selected ? 'true' : 'false');
          });
        }

        function showPanel(id){
          panels.forEach(p=>{
            const match = p.id === id;
            p.hidden = !match;
          });
        }

        // Click behavior
        buttons.forEach(btn=>{
          btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            activateButton(btn);
            showPanel(target);
            // update focus for accessibility
            btn.focus();
          });

          // Keyboard navigation (ArrowLeft / ArrowRight)
          btn.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
              e.preventDefault();
              const idx = Array.from(buttons).indexOf(btn);
              const dir = e.key === 'ArrowRight' ? 1 : -1;
              const next = (idx + dir + buttons.length) % buttons.length;
              buttons[next].click();
            }
          });
        });

        if(location.hash){
          const target = location.hash.replace('#','');
          const btn = Array.from(buttons).find(b => b.dataset.target === target);
          if(btn){ btn.click(); }
        }
      })();

        (function() {
    const tabs = document.querySelectorAll('#schedule-tabs .tab-btn');
    const panels = document.querySelectorAll('#schedule-tabs .tab-panel');

    // Map tab panel ids to display dates
    const dateMap = {
      'schedule-day-1': '09th Feb, 2026',
      'schedule-day-2': '10th Feb, 2026',
      'schedule-day-3': '11th Feb, 2026',
      'schedule-day-4': '12th Feb, 2026',
      'schedule-day-5': '13th Feb, 2026'
    };

    // store original labels so we can revert inactive tabs
    tabs.forEach((b, i) => {
      b.dataset.originalLabel = b.textContent.trim();
    });

    function activateTab(btn) {
      tabs.forEach(b => {
        const isActive = b === btn;
        if (isActive) {
          const mapped = dateMap[b.getAttribute('data-target')] || b.dataset.originalLabel;
          b.textContent = mapped;
          b.classList.add('active');
          b.setAttribute('aria-selected', 'true');
        } else {
          b.textContent = b.dataset.originalLabel;
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        }
      });

      panels.forEach(p => {
        p.hidden = p.id !== btn.getAttribute('data-target');
      });
    }

    tabs.forEach(btn => {
      btn.addEventListener('click', () => activateTab(btn));
    });

    // Initialize according to current active button (or first)
    const initial = document.querySelector('#schedule-tabs .tab-btn.active') || tabs[0];
    if (initial) activateTab(initial);
  })();