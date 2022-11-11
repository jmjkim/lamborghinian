const CreateCommentForm = ({ commentInput, handleCommentSubmit, handleCommentInput, handleCancelClick, editBtnClicked }) => {
    return (
        <>
            <form className="comment_form" onSubmit={handleCommentSubmit}>
                <textarea
                    id="comment_input"
                    type="text"
                    value={commentInput}
                    onChange={(e) => handleCommentInput(e.target.value)}
                    required={true}
                    maxLength={200}
                    rows="3"
                    autoComplete="false"
                    placeholder="Add a comment (max length 200)" />

                <div className="comment_form_btn_container">
                    <div className="comment_form_btn_subcontainer">
                        <button onClick={handleCancelClick}>Cancel</button>
                        {editBtnClicked ? <button type="submit">Update</button> : <button type="submit">Submit</button>}
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateCommentForm