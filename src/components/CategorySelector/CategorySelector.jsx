import { topics } from '../../topic/topic';
export default function CategorySelector({ category, setCategory }) {
    console.log("CategorySelector rendered with category:", category);
  return (
    <div className="category-selector">
        {topics.map((topic) => (
            <div key={topic.label} className="category-option">
                <label htmlFor={topic.label} className="category-label">{topic.label}</label>
                <input type="radio" id={topic.label} name="category" value={topic.label} checked={category === topic.label} onChange={(e) => setCategory(e.target.value)} />
            </div>
        ))}
    </div>
  );
}