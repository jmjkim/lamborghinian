import { useState } from "react"
import CreateCommentForm from "./CreateCommentForm"
import ViewComment from "./ViewComment"

const CommentSection = ({ id, user, setFetchFlag, lamborghini }) => {
    const [ commentInput, setCommentInput ] = useState("")
    const [ commentId, setCommentId ] = useState()
    const [ editBtnClicked, setEditBtnClicked ] = useState(false)

    const handleCommentInput = (e) => {
        setCommentInput(e)
    }
    
    const handleEditClick = (commentId, editingCommentInput) => {
        setCommentId(commentId)
        setCommentInput(editingCommentInput)
        setEditBtnClicked(true)
    }

    const handleDeleteClick = (commentId) => {
        fetch(`${id}/${commentId}`, {method: "DELETE"})
        .then(() => setFetchFlag(true))
    }

    const handleCancelClick = () => {
        setCommentInput("")
        setEditBtnClicked(false)
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()

        if (editBtnClicked) {
            fetch(`${id}/${commentId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ comment_input: commentInput })
            })
            .then(r => r.json())
            .then(() => {
                setCommentInput("")
                setEditBtnClicked(false)
                setFetchFlag(true)
            })
        }

        else {
            fetch(`${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    lamborghini_id: id,
                    comment_input: commentInput
                })
            })
            .then(r => r.json())
            .then(data => {
                if (!data.error) {
                    setCommentInput("")
                    setFetchFlag(true)
                } 
                
                else 
                    alert(data.error)
            })
        }
    }

    return (
        <div className="comment_container">
            <CreateCommentForm commentInput={commentInput} 
                               handleCommentInput={handleCommentInput} 
                               handleCommentSubmit={handleCommentSubmit} 
                               editBtnClicked={editBtnClicked} 
                               handleCancelClick={handleCancelClick} />

            <ViewComment userId={user.id}
                         lamborghini={lamborghini} 
                         handleEditClick={handleEditClick}
                         handleDeleteClick={handleDeleteClick} />
        </div>
    )
}

export default CommentSection