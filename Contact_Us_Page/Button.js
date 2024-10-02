
import styles from "./Button.module.css"
export default function Button(props) {
  return (
    <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
        {props.icon}
        {props.text}
        
      
    </button>
  )
}
