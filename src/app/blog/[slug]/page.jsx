import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';

// FETCH DATA WITH AN API
import { getPost } from '@/lib/data';

const SinglePostPage = async ({params}) => {
    const {slug} = params;
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
                            {/* {post?.createdAt.toString().slice(4, 16)} */}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>{post?.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage;
