(function(){
        const buttons = document.querySelectorAll('.tab-btn');
        const panels = document.querySelectorAll('.tab-panel');

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