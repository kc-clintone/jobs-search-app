// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { RAPIDAPI_KEY } from '@env';

// const apiKey = RAPIDAPI_KEY;

// const useFetch = (endpoint, query) => {
// 	const [data, setData] = useState([]);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [error, setError] = useState(null);

// 	const options = {
// 		method: 'GET',
// 		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
// 		headers: {
// 			'X-RapidAPI-Key': apiKey,
// 			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
// 		},
// 		params: {
// 			...query,
// 		},
// 	};

// 	const fetchData = async () => {
// 		setIsLoading(true);

// 		try {
// 			const response = await axios.request(options);

// 			setData(response.data.data);
// 			setIsLoading(false);
// 		} catch (error) {
// 			setError(error);
// 			console.log(error);
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchData();
// 	}, []);

// 	const refetch = () => {
// 		setIsLoading(true);
// 		fetchData();
// 	};

// 	return { data, isLoading, error, refetch };
// };

// export default useFetch;

import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPIDAPI_KEY } from 'react-native-dotenv';

const apiKey = 'd375ef8260msh34e243128d83ddfp15995fjsn971fb8c83af2';
const baseURL = 'https://jsearch.p.rapidapi.com/';

const useFetch = (endpoint, query) => {
	const [state, setState] = useState({
		data: [],
		isLoading: false,
		error: null,
	});

	const options = {
		method: 'GET',
		url: baseURL + endpoint,
		headers: {
			'X-RapidAPI-Key': apiKey,
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: { ...query },
	};

	const fetchData = async () => {
		setState({ data: [], isLoading: true, error: null });

		try {
			const response = await axios.request(options);
			setState({ data: response.data.data, isLoading: false, error: null });
		} catch (error) {
			setState({ data: [], isLoading: false, error });
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		fetchData();
	};

	return { ...state, refetch };
};

export default useFetch;
