import React, { useEffect, useState } from "react";
import appwriteService from '../appwrite/config'
import parse from 'html-react-parser'
import {Button, Container} from '../component'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Post(){
    const [posts, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    const userData = useSelector(( state) => state.auth.userData);

    const isAuthor = posts && userData ? posts.userId === userData.$id : false

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post) setPosts(post)
                else navigate('/')
            })
        }else navigate('/')
    },[slug, navigate])

    const deletePost = () => {
        appwriteService.deletePost(posts.$id).then((status) => {
            if(status){
                appwriteService.deleteFile(posts.featuredImage);
                navigate('/')
            }
        })
    }

    return posts ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(posts.featuredImage)}
                        alt={posts.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${posts.$id}`}>
                            <Button bgColor = "bg-green-500" className= 'mr-3'>Edit</Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick = {deletePost}>Delete</Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold"> {posts.title} </h1>
                </div>
                <div className="browser-css"> {parse(posts.content)}  </div>
            </Container>
        </div>
    ) : null;
}