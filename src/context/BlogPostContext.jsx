
// Work in progress. Component not in use!!

import { createContext, useContext, useState, useEffect } from 'react';
import { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost } from '../components/Api';

import PropTypes from 'prop-types';

const BlogPostContext = createContext();

export const useBlogPosts = () => {
	return useContext(BlogPostContext);
};

export const BlogPostProvider = ({ children }) => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const data = await getBlogPosts();
				setBlogPosts(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleCreate = async blogPost => {
		try {
			const newBlogPost = await addBlogPost(blogPost);
			setBlogPosts([...blogPosts, newBlogPost]);
		} catch (error) {
			setError(error.message);
		}
	};

	const handleUpdate = async blogPost => {
		try {
			const updatedBlogPost = await updateBlogPost(blogPost);
			setBlogPosts(blogPosts.map(post.id === updatedBlogPost.id ? updatedBlogPost : post));
		} catch (error) {
			setError(error.message);
		}
	};

	const handleDelete = async id => {
		try {
			await deleteBlogPost(id);
			setBlogPosts(blogPosts.filter(blogPost => blogPost.id !== id));
		} catch (error) {
			setError(error.message);
		}
	};

	const value = {
		blogPosts,
		loading,
		handleCreate,
		handleUpdate,
		handleDelete,
	};

	return <BlogPostContext.Provider value={value}>{children}</BlogPostContext.Provider>;
};

BlogPostProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
