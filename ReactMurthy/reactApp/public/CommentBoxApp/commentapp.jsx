﻿

        //  manage the comment box.
        var CommentBox = React.createClass({

        // I provide the initial view-model, before the component is mounted.
        getInitialState: function() {

        return({
        data: []
        });

        },


        // ---
        // PUBLIC METHODS.
        // ---


        // I get called once after the component has initially been rendered. At
        // this point, there is a physical DOM, including the window object, that
        // can be consumed.
        // --
        // NOTE: The reason we are using this method to start polling for data is
        // that we only want to poll on the client. Theoretically, we could be
        // rendering this on the server through so-called "isomorphic JavaScript"
        // where it wouldn't make any sense to poll for updates. This method
        // indicates that we're actually working with a DOM (Document object model).
        componentDidMount: function() {

        // Load the initial data payload.
        this.loadCommentsFromServer();

        // Start polling the remote URL for new content.
        setInterval( this.loadCommentsFromServer.bind( this ), 
            this.props.pollInterval );

        },


        // I add a new comment to the collection.
        handleCommentSubmit: function( comment ) {

        var self = this;

        // Optimistically add the new comment to the collection before
        // we even hear back from the server.
        // --
        // NOTE: We are overwriting the data key of the current state, but
        // leaving any other state keys in tact.
        this.setState({
        data: this.state.data.concat( comment )
        });

        $.ajax({
        url: this.props.url,
        dataType: "json",
        type: "POST",
        data: comment,
        success: function handleSuccess( data ) {

        // Store the new comments collection, overwriting the
        // existing reference.
        // --
        // NOTE: We are overwriting the data key of the current state,
        // but leaving any other state keys in tact.
        self.setState({
        data: data
        });

        },
        error: function handleError( xhr, status, error ) {

        console.error( "error", error );

        }
        });

        },


        // I render the view using the current state and properties collection.
        render: function() {

        return(
        <div classname="commentBox">

            <h1>
                Comments
            </h1>

            <commentlist comments={ this.state.data } />
            <commentform oncommentsubmit={ this.handlecommentsubmit } />

        </div>
        );

        },


        // ---
        // PRIVATE METHODS.
        // ---


        // I load the remote data from the server.
        loadCommentsFromServer: function() {

        var self = this;

        $.ajax({
        url: this.props.url,
        dataType: "json",
        cache: false,
        success: function handleSuccess( data ) {

        self.setState({
        data: data
        });

        },
        error: function handleError( xhr, status, error ) {

        console.error( "Error", error );

        }
        });

        }

        });


        // I manage the list of comments.
        var CommentList = React.createClass({

        // I render the view using the current state and properties collection.
        render: function() {

        // Translate each comment item into a comment component.
        var commentNodes = this.props.comments.map(
        function operator( comment, i, comments ) {

        return(
        <comment author={ comment.author }>
            { comment.text }
        </comment>
        );

        }
        );

        return(
        <div classname="commentList">
            { commentNodes }
        </div>
        );

        }

        });


        // I manage the individual comment.
        var Comment = React.createClass({

        // I render the view using the current state and properties collection.
        render: function() {

        // NOTE: Since processing markdown is an "expensive" action, I want to
        // get a sense of how often this will run.
        console.log( "Running marked on comment." );

        var rawMarkup = marked(
        this.props.children.toString(),
        {
        sanitize: true
        }
        );

        return(
        <div classname="comment">

            <h2 classname="commentAuthor">
                { this.props.author }
            </h2>

            <span dangerouslysetinnerhtml={{ __html: rawMarkup }} />

        </div>
        );

        }

        });


        // I manage the comment form.
        var CommentForm = React.createClass({

        // I validate the form data (lightly) and then submit the comment for
        // processing.
        handleSubmit: function( event ) {

        event.preventDefault();

        var author = React.findDOMNode( this.refs.author ).value.trim();
        var text = React.findDOMNode( this.refs.text ).value.trim();

        if ( ! author || ! text ) {

        return;

        }

        // Pass the comment back up to the parent using the passed-in submission
        // handler.
        this.props.onCommentSubmit({
        author: author,
        text: text
        });

        React.findDOMNode( this.refs.author ).value = "";
        React.findDOMNode( this.refs.text ).value = "";

        },


        // I render the view using the current state and properties collection.
        render: function() {

        return(
        <form classname="commentForm" onsubmit={ this.handlesubmit }>

            <input type="text" placeholder="Your name" ref="author" />
            <input type="text" placeholder="Say something..." ref="text" />
            <input type="submit" value="Post" />

        </form>
        );

        }

        });


        // Render the root CommentBox and mount it inside the given element.
        React.render(<CommentBox url="comments.json" pollinterval={ 2000 } />,
        document.getElementById( "content" )
        );

  
