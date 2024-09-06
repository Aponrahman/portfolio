  function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent the default anchor behavior
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

