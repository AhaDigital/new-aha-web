export const scrollToElement = (id: string) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetTop - 100, behavior: 'smooth' });
  }
}
