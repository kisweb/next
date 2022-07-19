import Link from 'next/link';
import MyPost from '../../components/post';
import Image from 'next/image';
import Avatar from '../../components/avatar'

function PostList({posts}) {
    return (<>
      <h1> First Post</h1>
          
        <Link href="/">
            <a>Home</a>
        </Link>
        <div>
        {
          posts.map(post => {
            return (
            <div className="grid" key={post.id}>
              <div className="card">
              <Link href={`/posts/${post.id}`} passHref>
            <a><h3>{post.id} - {post.title}</h3></a>
        
                </Link>
              </div>
            </div>)
          })
        }     
        </div>
     </>);
  }
export default PostList
export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    props: {
      posts: data
    }
  }
}

