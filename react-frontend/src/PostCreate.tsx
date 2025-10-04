import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PostCreate() {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const navigate = useNavigate();

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/posts', {title: title, body:body})
        .then(()=> {
            navigate('/');
        })
    }

    return (
        <>
        <form onSubmit={submit} className="space-y-6 mt-4 max-w-md mx-auto" action="">
          <Link to="/" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
                  - Back
          </Link>  
            <h1 className="font-bold text-2xl">Create Post</h1>

            <div className="grid gap-2">
                <label htmlFor="title" className="text-sm leading-none font-medium select-none peer-disabled:cursor-none">
                    Title:
                </label>
                <input 
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm"
                placeholder="Enter your title"
                required
                />
                <p className="text-red-500 text-sm mt-1"></p>
            </div>

            <div className="grid gap-2">
                <label htmlFor="body" className="text-sm leading-none font-medium select-none peer-disabled:cursor-none">
                    Body:
                </label>
                <textarea 
                id="body"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 text-base shadow-sm"
                placeholder="Enter your body"
                required
                >
                </textarea>
                <p className="text-red-500 text-sm mt-1"></p>
            </div>

            <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
            >
                Submit
            </button>
        </form>
        </>
    )
}