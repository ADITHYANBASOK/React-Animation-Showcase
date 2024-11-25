import { useState } from 'react';
import { useTransition, animated, config } from '@react-spring/web';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function SpringAnimatedList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React Spring' },
    { id: 2, text: 'Master animations' },
    { id: 3, text: 'Build smooth UIs' },
  ]);
  const [newItemText, setNewItemText] = useState('');

  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, height: 64, transform: 'translateX(0px)' },
    leave: { opacity: 0, height: 0, transform: 'translateX(50px)' },
    keys: item => item.id,
    config: { ...config.gentle, duration: 200 }
  });

  const addItem = (e) => {
    e.preventDefault();
    if (!newItemText.trim()) return;
    
    setItems([
      ...items,
      { id: Date.now(), text: newItemText }
    ]);
    setNewItemText('');
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="demo-card">
      <h2 className="text-2xl font-bold mb-6">Spring Animated List</h2>
      
      <form onSubmit={addItem} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add new item..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Add
        </button>
      </form>

      <div className="space-y-3">
        {transitions((style, item) => (
          <animated.div
            style={{
              ...style,
              overflow: 'hidden'
            }}
          >
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <span>{item.text}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
                aria-label="Delete item"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          </animated.div>
        ))}
      </div>

      {items.length === 0 && (
        <animated.p
          style={useTransition(true, {
            from: { opacity: 0 },
            enter: { opacity: 0.5 },
            leave: { opacity: 0 },
          })[0]}
          className="text-center text-gray-500 mt-4"
        >
          No items in the list. Add some!
        </animated.p>
      )}
    </div>
  );
}

export default SpringAnimatedList;