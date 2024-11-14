
// Work in progress. Component not in use!!

const API_URL = 'http://localhost:5000';

// Get post data
export const getBlogPosts = async () => {
	const response = await fetch(API_URL + '/blogPost');
	if (!response.ok) throw new Error('Error fetching posts');
	return await response.json();
};

// Add post data
export const addBlogPost = async blogPost => {
	const response = await fetch(API_URL + '/blogPost', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(blogPost),
	});

	if (!response.ok) throw new Error('Error adding post');
	return post;
};

// Update post data
export const updateBlogPost = async blogPost => {
	const updatedBlogPost = { ...blogPost, done: !blogPost.done };

	const response = await fetch(API_URL + '/blogPost' + blogPost.id, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updatedBlogPost),
	});
	if (!response.ok) throw new Error('Error editing post');
	return updatedBlogPost;
};

// Delete Post data!
export const deleteBlogPost = async id => {
	const response = await fetch(API_URL + '/blogPost' + id, {
		method: 'DELETE',
	});
};
