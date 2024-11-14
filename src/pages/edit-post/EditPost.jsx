import logoWhite from '../../../public/assets/logoWhite.png';
import logoBlack from '../../../public/assets/logoBlack.png';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { useInView } from 'react-intersection-observer';

const EditPost = ({ updatePostSubmit }) => {
	const { ref, inView } = useInView({ triggerOnce: true });
	const navigate = useNavigate();
	const { blogPostId } = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);
	const [id, setId] = useState('');
	const [background, setBackground] = useState('');
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [topic, setTopic] = useState('');
	const [text, setText] = useState('');
	const [text2, setText2] = useState('');
	const [picture, setPicture] = useState('');
	const [name, setName] = useState('');
	const [date, setDate] = useState('');

	useEffect(() => {
		const fetchPostData = async () => {
			try {
				const res = await fetch(`/api/blogPost/${blogPostId}`);
				const data = await res.json();
				setPost(data);
				setId(data.id);
				setBackground(data.background);
				setTitle(data.title);
				setImage(data.image);
				setTopic(data.topic);
				setText(data.text);
				setText2(data.text2);
				setPicture(data.picture);
				setName(data.name);
				setDate(data.date);
			} catch (error) {
				console.log('Error fetching data', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPostData();
	}, [blogPostId]);

	const submitForm = async event => {
		event.preventDefault();
		console.log(submitForm);

		const updatedPost = {
			id,
			background,
			image,
			topic,
			title,
			text,
			text2,
			picture,
			name,
			date,
		};

		updatePostSubmit(updatedPost);

		toast.success('Post updated successfully');

		return navigate(-1);
	};

	if (loading) {
		return <Spinner loading={loading} />;
	}

	const isImage = useOutletContext();

	return (
		<main ref={ref} className='edit-post'>
			<section className={`edit-post__hero ${background ? '' : 'black-background'}`} style={{ backgroundImage: `var(--gradient-hero--grey), url(${background})` }}>
				<div className='edit-post__heading heading'>
					<h1 className={`title tran-top1 ${inView ? 'tran-topd' : ''}`}>
						{`${title ? '' : 'Edit your Post !'}`}
						{title}
					</h1>
				</div>
			</section>
			<section className='edit-post__form-section section-padding'>
				<div className={`edit-post__form-container tran-top2 ${inView ? 'tran-topd' : ''}`}>
					<form className='edit-post__form' onSubmit={submitForm}>
						<div className='edit-post__form-logo'>
							<img className='edit-post__logo' src={isImage ? logoBlack : logoWhite} alt='logo' />
						</div>
						<div>
							<h2 className='edit-post__subtitle title title--med'>Edit your post...</h2>
						</div>
						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='background'>
								Background:
							</label>
							<select className='edit-post__input' value={background} onChange={event => setBackground(event.target.value)} id='background' name='background' required>
								<option value='/2wheels-adventure/public/assets/blog/blogHero.jpg'>background image 1</option>
							</select>
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='title'>
								Title:
							</label>
							<input className='edit-post__input' value={title} onChange={event => setTitle(event.target.value)} type='text' id='title' name='title' placeholder='Enter the post title...' required />
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='topic'>
								Topic:
							</label>
							<select className='edit-post__input' value={topic} onChange={event => setTopic(event.target.value)} name='topic' id='topic' required>
								<option value='events'>events</option>
								<option value='camping'>camping</option>
								<option value='bikes'>bikes</option>
								<option value='bike gear'>bike gear</option>
								<option value='places'>places</option>
							</select>
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='image'>
								Image:
							</label>
							<select className='edit-post__input' value={image} onChange={event => setImage(event.target.value)} name='image' id='image' required>
								<option value='/assets/blog-articles/blogArticle01.jpg'>image 1</option>
								<option value='/assets/blog-articles/blogArticle02.jpg'>image 2</option>
								<option value='/assets/blog-articles/blogArticle03.jpg'>image 3</option>
								<option value='/assets/blog-articles/blogArticle04.jpg'>image 4</option>
							</select>
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='text'>
								Text:
							</label>
							<textarea
								className='edit-post__input'
								value={text}
								onChange={event => setText(event.target.value)}
								name='text'
								id='text'
								rows='10'
								cols='80'
								placeholder='edit the blog text here...'
							></textarea>
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='text2'>
								Text 2:
							</label>
							<textarea
								className='edit-post__input'
								value={text2}
								onChange={event => setText2(event.target.value)}
								name='text2'
								id='text2'
								rows='10'
								cols='80'
								placeholder='edit the blog text here...'
							></textarea>
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='picture'>
								Picture
							</label>
							<select className='edit-post__input' value={picture} onChange={event => setPicture(event.target.value)} name='picture' id='picture' required>
								<option value='/assets/team/teamMember03.jpg'>Julia Chase</option>
								<option value='/assets/team/teamMember06.jpg'>Dave Olsen</option>
								<option value='/assets/team/teamMember02.jpg'>Roel Turner</option>
							</select>
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='name'>
								Name
							</label>
							<select className='edit-post__input' value={name} onChange={event => setName(event.target.value)} name='name' id='name' required>
								<option value='Julia Chase'>Julia Chase</option>
								<option value='Dave Olsen'>Dave Olsen</option>
								<option value='Roel Turner'>Roel Turner</option>
							</select>
						</div>

						<div className='edit-post__form-field'>
							<label className=' edit-post__label text' htmlFor='date'>
								Date
							</label>
							<input className='edit-post__input' value={date} onChange={event => setDate(event.target.value)} type='text' id='date' name='date' placeholder='Enter the post date' required />
						</div>
						<div className='edit-post__submit-wrapper'>
							<button className='btn btn--med' type='submit'>
								Edit post
							</button>
						</div>
					</form>
				</div>
				<div className={`edit-post__back tran-top3 ${inView ? 'tran-topd' : ''}`}>
					<button onClick={() => navigate(-1)} className=' btn btn--med'>
						Back
					</button>
				</div>
			</section>
		</main>
	);
};

export default EditPost;
