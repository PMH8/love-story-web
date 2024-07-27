import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

interface Genres{
    id:number;
    name:string;
}

interface FetchGameResponse {
    count: number;
    results: Genres[];
}

export default function useGenres() {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGameResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results);
                setIsLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) {
                    return
                }
                setError(err.message)
                setIsLoading(false);
            })

    }, [])
    return { genres, error, isLoading }
}


