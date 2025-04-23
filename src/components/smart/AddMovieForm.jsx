import { useState } from 'react';
import AddMovieFormUi from '../dumb/AddMovieForm.ui';
import { useMovieContext } from '../../contexts/movieContext';

export default function AddMovieForm() {

    const { fetchMovies } = useMovieContext()


    const [movieDetails, setMovieDetails] = useState({
        title: '',
        abstract: '',
        director: '',
        genre: '',
        cover_image: ''
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    function handleChange(field, value) {
        setMovieDetails({
            ...movieDetails,
            [field]: value
        });
    }

    function handleSubmit() {

        const user = JSON.parse(localStorage.getItem('user'));

        // Questo si usa quando c'è un file da mandare, replica la struttura del form
        const formDataToSend = new FormData();

        formDataToSend.append('title', movieDetails.title);
        formDataToSend.append('abstract', movieDetails.abstract);
        formDataToSend.append('director', movieDetails.director);
        formDataToSend.append('genre', movieDetails.genre);
        formDataToSend.append('cover_image', movieDetails.cover_image);

        console.log(movieDetails);




        fetch('http://localhost:3000/api/v1/movies', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            body: formDataToSend // Non faccio lo stringify perché nel backend multer lo gestisce prima che arrivi al controller
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to add movie');
                }
                return res.json();
            })
            .then(data => {
                setSubmitStatus({ state: 'success', message: 'Movie added successfully!' });
                setMovieDetails({ title: '', abstract: '', director: '', genre: '', cover_image: '' });
                fetchMovies()
            })
            .catch(err => {
                console.error(err);
                setSubmitStatus({ state: 'error', message: 'Failed to add movie. Please try again.' });
            });


    }

    return (
        <>
            <AddMovieFormUi
                onSubmit={handleSubmit}
                onChange={handleChange}
                movieDetails={movieDetails}
                submitStatus={submitStatus}
            />
        </>
    );
}