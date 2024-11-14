import * as yup from 'yup';

const validationSchema = yup.object().shape({
	name: yup.string().required('Name required!'),
	email: yup.string().email('Type a valid email!').required('Email required!'),
	message: yup.string().required('Message required!'),
});

export default validationSchema;
