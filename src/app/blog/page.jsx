import PostCard from "@/components/postCard/PostCard";
import styles from './blog.module.css';

//  fetch data with an api
import { getPosts } from '@/lib/data';

const BlogPage = async () => {
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts?.length && posts.map(post => {
                return <div key={post.id} className={styles.post}>
                    <PostCard post={post} />
                </div>
            })}
        </div>
    )
}

export default BlogPage;
