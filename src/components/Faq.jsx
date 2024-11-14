import { faq } from '../data/data.json';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const Faq = () => {
	const [activeQuestion, setActiveQuestion] = useState(null);

	return (
		<div className='faq'>
			<h3 className='faq__title title title--med'>Frequently asked questions</h3>
			{faq.map(q => (
				<div className='faq__accordion' key={q.id}>
					<p className='faq__question text text--big' onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}>
						{q.question}
						{activeQuestion === q.id ? <FaMinus className='faq__icon' /> : <FaPlus className='faq__icon' />}
					</p>
					<AnimatePresence>
						{activeQuestion === q.id ? (
							<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
								<p className='faq__answer text text--opacity'>{q.answer}</p>
							</motion.div>
						) : null}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};

export default Faq;
