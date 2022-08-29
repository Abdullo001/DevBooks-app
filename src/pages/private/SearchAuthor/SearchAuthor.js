import React, { useEffect, useState } from 'react';
import { useSearch } from '../../../Hooks/useSearch';
import axios from 'axios';
// import { useAuth } from '../../../Hooks/useAuth';
import { Card } from '../../../components/card/Card';

export const SearchAuthor = () => {
	const [search] = useSearch();
	// const [token] = useAuth();
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/author/search/?author=${search}`,
			)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, [search]);
	return (
		<div className='container'>
			<ul style={{paddingTop: 50}} className='book__list'>
				{data.length ? (
					data.map((e) => <Card key={e.id} obj={e} />)
				) : (
					<>UZUR BUNAQA KITOB TOPILMADI</>
				)}
			</ul>
		</div>
	);
};
