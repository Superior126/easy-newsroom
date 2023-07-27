import "../css/new_post/new_post.css";
import warning from "../assets/global/warning.png";

function NewPost() {
    return(
        <div className="post-page">
            <div className="banner">
                <div>
                    <img src={warning} alt="Warning" />
                </div>
                <div>
                    <h1>NOTICE!</h1>
                    <p>This page is for site administrators only. If you are not a site administrator, please return to the <a href="/">main page</a>.</p>
                </div>
            </div>
            <div className="new-post-form">
                <h1>New Post</h1>
                <p>Whats big and new?</p>
                <input id="title" placeholder="Title" />
                <br />
                <textarea id="content" placeholder="Content" />
                <br />
                <input type="file" id="imageUpload" name="imageUpload" accept="image/*" />
                <h1>Credentials</h1>
                <p>This is whatever you set in the config on the back end.</p>
                <div className="credentials" >
                    <input id="username" placeholder="Username" />
                    <input id="password" placeholder="Password" type="password" />
                </div>
                <br />
                <button>Post</button>
                <span id="status" />
            </div>
        </div>
    );
}

export default NewPost;