function showCollection(type) {
  const collections = document.querySelectorAll('.collection');
  collections.forEach(c => c.classList.add('hidden'));

  document.getElementById(type).classList.remove('hidden');
}