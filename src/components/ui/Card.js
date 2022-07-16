import './Card.css'

/**
 * children is a reserved name. Used as props.children
 * The value of props.children is always the content present between the opening and closing tags of the custom component.
 */
const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;