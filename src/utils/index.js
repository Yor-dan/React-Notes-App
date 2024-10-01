const getNotes = () => {
  // get notes from local storage
  const notes = localStorage.getItem('notes');
  if (notes) return JSON.parse(notes);
  // or create one if there is none
  localStorage.setItem('notes', JSON.stringify([]));
  return [];
};

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

export { getNotes, showFormattedDate };
