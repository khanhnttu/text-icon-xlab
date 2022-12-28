import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, icon }) => {
  return (
    <div className={styles.test}>
      Example Component: {text} {icon}
    </div>
  )
}
