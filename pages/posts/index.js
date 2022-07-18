import Link from 'next/link';
import Image from 'next/image';
import Avatar from '../../components/avatar'

function Post() {
    return (<>
      <h1> First Post</h1>
          
        <Link href="/">
            <a>Home</a>
        </Link>     
     </>);
  }

export default Post