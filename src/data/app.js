document.addEventListener('DOMContentLoaded', function() {
    const tocHeading = document.querySelector('.table-of-contents h2');
    const toc = document.querySelector('.table-of-contents');
    
    tocHeading.addEventListener('click', function() {
      toc.classList.toggle('collapsed');
    });
    
    // Make parent items expandable
    const mainItems = document.querySelectorAll('.table-of-contents > ul > li');
    
    mainItems.forEach(item => {
      const link = item.querySelector('a');
      const sublist = item.querySelector('ul');
      
      if (sublist) {
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 1200) {
            e.preventDefault();
            item.classList.toggle('active');
          }
        });
      }
    });
    
    // Highlight current section
    const updateActiveLink = () => {
      const links = document.querySelectorAll('.table-of-contents a');
      
      links.forEach(link => {
        link.classList.remove('active');
      });
      
      const hash = window.location.hash || '#0';
      const activeLink = document.querySelector(`.table-of-contents a[href="${hash}"]`);
      
      if (activeLink) {
        activeLink.classList.add('active');
        
        // Expand parent if on mobile
        if (window.innerWidth <= 1200) {
          const parentLi = activeLink.closest('li');
          if (parentLi) {
            parentLi.classList.add('active');
          }
        }
      }
    };
    
    // Update active link on page load and hash change
    updateActiveLink();
    window.addEventListener('hashchange', updateActiveLink);
  });