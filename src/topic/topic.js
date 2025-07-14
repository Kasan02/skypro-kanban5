const topics = [
   { color: '_orange', label: 'Web Design', style: { backgroundColor: '#FFA500', color: '#FFFFFF' } },
   { color: '_purple', label: 'Copywriting', style: { backgroundColor: '#800080', color: '#FFFFFF' } },
   { color: '_green', label: 'Research', style: { backgroundColor: '#008000', color: '#FFFFFF' } },
];
const getTopicStyles = (category) => {
  const topic = topics.find(t => t.label.toLowerCase() === category.toLowerCase());
  return topic ? topic.style : { backgroundColor: '#CCCCCC', color: '#000000' }; 
};
// Изменить на цвета на макетные цвета
export { topics, getTopicStyles };