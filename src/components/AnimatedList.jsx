import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function AnimatedList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn Framer Motion' },
    { id: 2, text: 'Master React Spring' },
    { id: 3, text: 'Build animated interfaces' },
  ]);
  const [newItemText, setNewItemText] = useState('');

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
      <h2 className="text-2xl font-bold mb-6">Animated List</h2>
      
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

      <motion.ul
        className="space-y-3"
        initial={false}
      >
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              layout
              className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center"
            >
              <span>{item.text}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
                aria-label="Delete item"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {items.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-center text-gray-500 mt-4"
        >
          No items in the list. Add some!
        </motion.p>
      )}
    </div>
  );
}

export default AnimatedList;