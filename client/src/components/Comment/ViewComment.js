const ViewComment = ({ userId, lamborghini, handleDeleteClick, handleEditClick }) => {
    return (
        <>
            <p id="comment_length">{lamborghini.comments?.length} Comments</p>

            {lamborghini.comments?.length > 0 ? 
                <>
                    {lamborghini.comments.map(comment => {
                        let user = lamborghini.users.find(user => user.id === comment.user_id)

                        return (
                            <div key={comment.id} className="individual_comment_container">
                                <p>{user.username}</p>
                                <p>{comment.comment_input}</p>

                                {comment.user_id === userId ? 
                                    <div className="individual_comment_btn_container">
                                        <div className="individual_comment_btn_subcontainer">
                                            <button onClick={() => handleDeleteClick(comment.id)}>Delete</button>
                                            <button onClick={() => handleEditClick(comment.id, comment.comment_input)}>Edit</button>
                                        </div>
                                    </div> : null}
                            </div>)
                        })}
                </> : <p>Add your first comment</p>}
        </>
    )
}

export default ViewComment