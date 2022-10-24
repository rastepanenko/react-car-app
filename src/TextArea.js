import React, { useEffect } from 'react'

export default function TextArea(props) {
  useEffect(() => {
    if (props.isSubmitted == true) {
      props.setState((prevState) => (
        {
          ...prevState,
          commentValue: ""
        }
      ));
      props.setIsSubmitted(false);
    }
  }, [props.isSubmitted])

  function CommentValueMethod(event) {
    props.setState((prevState) => (
      {
        ...prevState,
        commentValue: event.target.value
      }
    ));
  }
  return (
    <div>
      <p>
        <textarea rows="10" cols="45" name="text" value={props.carSpecification.commentValue} id="Comment" onChange={CommentValueMethod}>
        </textarea>
      </p>
    </div>
  )
}
