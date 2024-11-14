import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter } from 'react-router-dom';

import { Home, About, Events, Blog, Contact, Error404, Event, TeamMember, BlogPost, AddPost, EditPost } from './pages/pages';
import MainLayout from './Layouts/MainLayout';

// Add New Post
const addPost = async newPost => {
	console.log(newPost);
	const res = await fetch('/api/blogPost', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newPost),
	});
};

// Update Post
const updatePost = async post => {
	const res = await fetch(`/api/blogPost/${post.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(post),
	});
	return;
};

// Delete Post
const deletePost = async id => {
	const res = await fetch(`/api/blogPost/${id}`, {
		method: 'DELETE',
	});
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route index element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/about/:teamMemberId' element={<TeamMember />} />
			<Route path='/events' element={<Events />}>
				<Route path='/events/:eventId' element={<Event />} />
			</Route>
			<Route path='/blog' element={<Blog />} />
			<Route path='/blog/:blogPostId' element={<BlogPost deletePost={deletePost} />} />
			<Route path='/add-post' element={<AddPost addPostSubmit={addPost} />} />
			<Route path='/edit-post/:blogPostId' element={<EditPost updatePostSubmit={updatePost} />} />

			<Route path='/contact' element={<Contact />} />
			<Route path='*' element={<Error404 />} />
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
