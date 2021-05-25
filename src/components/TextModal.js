export default function TextModal({clickModal, lights}){

    const clickHandler = e => {
        e.preventDefault()
        clickModal(e)
    }

    return(
        <div className="Modal" onClick={clickHandler}>
            <div className={(lights) ? "Modal-Container day-modal" : "Modal-Container dark"} onClick={clickHandler}>
                <div className="Modal-close-btn" onClick={clickHandler}>Close</div>
                <h2>~Account Policy~</h2>
                <div className="text-container">
                    <p>
                        The ToDo Application uses user accounts to store your ToDo's
                        so they may be accessed from any location. In order to accomplish
                        this we ask three things from you, the user:
                    </p>
                    <ol>
                        <li>Username</li>
                        <li>Password</li>
                        <li>Email Address</li>
                    </ol>
                    <p>
                        Passwords and Email Addresses are encrypted and stored in the database
                        and will never be stored as plain text. That said, I highly discourage
                        any prospective users from using their primary personal information,
                        such as professional Email Addresses or your common username and
                        password combinations.
                    </p>
                    <p>
                        None of the data you submit via your account credentials or the ToDo's
                        you create will be sold or use. This Application seeks to enable user's
                        with the convenience of a ToDo list without turning them into a product.
                    </p>
                    <p>
                        Currently the ToDo Application is available via whitelist only. You must
                        submit a special form to have your email address added to the whitelist
                        in order to successfully create an account.
                    </p>
                </div>
            </div>
        </div>
    )
}