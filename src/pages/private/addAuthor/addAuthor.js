import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import './addAuthor.scss';
export const AddAuthor = () => {
	const [image, setImage] = useState();
	const [preview, setPreview] = useState('');
	const {token} = useAuth();

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(image);
		} else {
			setPreview('https://via.placeholder.com/350x250');
		}
	}, [image]);

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		const {
			first_name,
			last_name,
			date_of_birth,
			date_of_death,
			country,
			genre_id,
			bio,
			image,
		} = evt.target.elements;
		formData.append('first_name', first_name.value);
		formData.append('last_name', last_name.value);
		formData.append('date_of_birth', date_of_birth.value);
		formData.append('date_of_death', date_of_death.value);
		formData.append('country', country.value);
		formData.append('genre_id', genre_id.value);
		formData.append('bio', bio.value);
		formData.append('image', image.files[0]);
		if (+genre_id.value <= 4 && +genre_id.value > 0) {
			axios
				.post(`https://book-service-layer.herokuapp.com/author`, formData, {
					headers: {
						Authorization: token,
					},
				})
				.then((res) => {
					console.log(res);
					// location.reload()
					setPreview('https://via.placeholder.com/350x250');
					first_name.value = '';
					last_name.value = '';
					date_of_birth.value = '';
					date_of_death.value = '';
					country.value = '';
					bio.value = '';
					genre_id.value = '';
				})
				.catch((err) => console.log(err));
		} else {
			alert('Iltimos 0 dan 4gacha son kiriting');
		}
	};

	return (
		<div className={`add-auhtor`}>
			<form onSubmit={handleFormSubmit} className='add-author__form'>
				<div className={`add-author__left`}>
					<label className='add-author__img-label'>
						<input
							onChange={(evt) => {
								const file = evt.target.files[0];
								if (file && file.type.substr(0, 5) === 'image') {
									setImage(file);
								} else {
									setImage('https://via.placeholder.com/350x250');
								}
							}}
							required
							accept='image/*'
							className='visually-hidden'
							type='file'
							name='image'
						/>
						<img
							className='add-author__img'
							width={350}
							height={250}
							src={preview}
							alt='There will be author that you will add'
						/>
						<span className='add-author__img-btn'>{"Upload Image"}</span>
					</label>
				</div>
				<div className={`add-author__right `}>
					<h2 className='add-author__title'>{"Add Author"}</h2>
					<input
						placeholder={"Name"}
						className='add-author__input'
						required
						type='text'
						name='first_name'
					/>
					<input
						placeholder={"last Name"}
						className='add-author__input'
						required
						type='text'
						name='last_name'
					/>
					<input
						placeholder={"data brith day"}
						className='add-author__input'
						required
						type='text'
						name='date_of_birth'
					/>
					<input
						placeholder={"Data death day"}
						className='add-author__input'
						required
						type='text'
						name='date_of_death'
					/>
					<input
						placeholder={"Country"}
						className='add-author__input'
						type='text'
						required
						name='country'
					/>
					<input
						className='add-author__input'
						type='number'
						required
						name={"genre_id"}
						placeholder='Genre ID'
					/>
					<textarea
						name='bio'
						className='add-author__area'
						placeholder={"Description"}
					/>
					<button className='add-author__btn' type='submit'>
						"Create"
					</button>
				</div>
			</form>
		</div>
	);
};
