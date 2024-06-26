import Image from 'next/image'

import styles from './postUser.module.css';

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {next: {revalidate: 3600}});

    if(!res.ok) {
        throw new Error("Something went wrong")
    }

    return res.json();
};


const PostUser = async ({userId}) => {
    const user = await getData(userId);
    return (
        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                alt=""
                width={50}
                height={50}
            />
            <div className={styles.detailBox}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser;
