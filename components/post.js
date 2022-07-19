function MyPost({post}) {
    return ( 
        <>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </>
     );
}

export default MyPost;