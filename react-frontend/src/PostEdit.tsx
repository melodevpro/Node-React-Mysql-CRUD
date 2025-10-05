import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PostEdit() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/api/posts/${id}`).then(res => {
                setTitle(res.data.title);
                setBody(res.data.body);
            });
        }
    }, [id]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/posts/${id}`, { title, body }) // ✅ Corregido
            .then(() => {
                navigate('/');
            });
    };

    return (
        <>
            <form onSubmit={submit} className="space-y-6 mt-4 max-w-md mx-auto" action="">
                <Link to="/" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
                    ← Back
                </Link>
                <h1 className="font-bold text-2xl">Edit Post</h1>

                <div className="grid gap-2">
                    <label htmlFor="title" className="text-sm font-medium">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm"
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="body" className="text-sm font-medium">Body:</label>
                    <textarea
                        id="body"
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
                >
                    Update
                </button>
            </form>
        </>
    );
}
