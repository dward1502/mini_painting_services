import React from 'react'

import styles from './cards.module.scss';

const HomeCard = (data) => {
    const {title,info,route} = data.props;
    
    
  return (
    <div className={styles.card_home}>
        <h1>{title}</h1>
        <ul>
            {info.map((item,k) => {
                return (
                    <li key={k}>{item}</li>
                )
            })}
        </ul>
        <button>VIEW</button>
    </div>
  )
}

export default HomeCard