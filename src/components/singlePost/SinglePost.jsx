import "./singlePost.css"

export default function SinglePost() {
    return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Nomso</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. totam,
            officia temporibus esse tempora expedita numquam error delectus
            voluptates neque earum recusandae, nihil soluta voluptate
            exercitationem quidem accusamus cum tempore ex? lorem ipsum dolor
            sit amet, consectetur adipiscing elit. totam, officia temporibus
            esse tempora expedita numquam error delectus voluptates neque earum
            recusandae, nihil soluta voluptate exercitationem quidem accusamus
            cum tempore ex? lorem ipsum dolor sit amet, consectetur adipiscing
            elit. totam, officia temporibus esse tempora expedita numquam error
            delectus voluptates neque earum recusandae, nihil soluta voluptate
            exercitationem quidem accusamus cum tempore ex? lorem ipsum dolor
            sit amet, consectetur adipiscing elit. totam, officia temporibus
            esse tempora expedita numquam error delectus voluptates neque earum
            recusandae, nihil soluta voluptate exercitationem quidem accusamus
            cum tempore ex?
          </p>
        </div>
      </div>
    );
}