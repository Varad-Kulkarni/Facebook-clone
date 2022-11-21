import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Homemainbar.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import image from "../../assets/postImage.jpg"

const HomeMainBar = () => {
  const { id } = useParams()
  const questionsList = useSelector(state => state.questionsReducer)

  var postList = [{
    _id: 1,
    userPosted: "Varad Kulkarni",
    discription: "This is image about the languages and full stack environment",
    image: "image",
    comment: [{
      commentBody: "This is comment",
      userCommented: "VKK",
      userId: 1,
    }]
  }, {
    _id: 2,
    userPosted: "Varad",
    discription: "This is image about Full stack roadmap",
    image: "postImage.jpg",
    comment: [{}],
  }, {
    _id: 3,
    userPosted: "Varad KK",
    discription: "This is great image",
    image: "postImage.jpg",
    comment: [{
      commentBody: "This is comment",
      userCommented: "VKK",
      userId: 1,
    },{
      commentBody: "This is anathor comment",
      userCommented: "vvv",
      userId: 2,
    }
  ]
  }]

  const [selected, setSelected] = useState(false);
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();

  const handlePost = () => {
    console.log(User);
    if(User === null) {
      navigate("/Auth");
    }
    else {
      navigate("/Form");
    }
  }

  const handleComments = () => {
    console.log("handleComment clicked")
    console.log(questionsList)
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        <button className='ask-btn' onClick={handlePost}>Add Post</button>

      </div>
      <div>
        {
          postList.length === 0 ?
            <h1>Loading...</h1> :
            <>

              {
                postList.map((p) => (
                  <div>
                    <p>posted by<h3>{p.userPosted}</h3></p>
                    <p>{p.discription}</p>
                    <div className="image-container" style={{ width: 500, height: 400 }}>
                      <img src={image} />
                    </div>
                    <button onClick={() => setSelected(!selected)}>comment</button>
                    {
                      selected && (
                        <>
                        {
                          p.comment.map((c) => (
                            <div className="comment-container">
                              <h6>{c.userCommented}</h6>
                              <p>{c.commentBody}</p>
                            </div>
                          ))
                        }
                        <button onClick={handleComments}>Add comments</button>
                        </>
                      )
                    }
                    <hr />
                  </div>
                ))
              }
            </>
        }
      </div>
    </div>
  )
}

export default HomeMainBar