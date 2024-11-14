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
		<Route path='/2wheels-adventure/' element={<MainLayout />}>
			<Route index element={<Home />} />
			<Route path='/2wheels-adventure/about' element={<About />} />
			<Route path='/2wheels-adventure/about/:teamMemberId' element={<TeamMember />} />
			<Route path='/2wheels-adventure/events' element={<Events />}>
				<Route path='/2wheels-adventure/events/:eventId' element={<Event />} />
			</Route>
			<Route path='/2wheels-adventure/blog' element={<Blog />} />
			<Route path='/2wheels-adventure/blog/:blogPostId' element={<BlogPost deletePost={deletePost} />} />
			<Route path='/2wheels-adventure/add-post' element={<AddPost addPostSubmit={addPost} />} />
			<Route path='/2wheels-adventure/edit-post/:blogPostId' element={<EditPost updatePostSubmit={updatePost} />} />

			<Route path='/2wheels-adventure/contact' element={<Contact />} />
			<Route path='*' element={<Error404 />} />
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
