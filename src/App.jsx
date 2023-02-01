import './App.css'
import styles from "./Comment.module.css";
import data from '../data.json';
import { useState } from 'react';

function App() {

  const [rating, setRating] = useState(0);

  function improveRating(){
    let cont = rating + 1;
    setRating(cont);
  }
  
  function reduceRating(){
    if(rating <= 0) return; 
    let cont = rating - 1;
    setRating(cont);
  }

  return (
    <div className="App">
      <div className={styles.commentCard}>
        <section className={styles.rating}>
          <button onClick={improveRating}>
            <img src="src\assets\icon-plus.svg" alt="plus" />
          </button>
          <span>{rating}</span>
          <button onClick={reduceRating}>
            <img src="src\assets\icon-minus.svg" alt="minus" />
          </button>
        </section>
        <div className={styles.comment}>
          <section className={styles.commentInfo}>
            <div className={styles.profileInfo}>
              <img src="src\assets\image-amyrobson.webp" alt="profile" />
                amyrobson
              <span className={styles.commentTime}>
                1 month ago
              </span>
            </div>
            <span className={styles.reply}>
              <img src="src\assets\icon-reply.svg" alt="reply" />
              Reply
            </span>
          </section>
          <p className={styles.content}>
            {data.comments.map((id) =>(
              id.content
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
