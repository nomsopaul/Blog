import "./post.css";

export default function Post() {
    return (
      <div className="post">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet</span>
          <hr />
          <span className="postDate">1 hour ago!</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do
          eiusmod tempor incididunt ut lab, Reiciendis optio cumque assumenda.
          Ut enim ad ex eu fugiat nulla pariatur omnis volunptas excepturi est
          vel nobis, officilis saepe. Molestias voluntatibus harum ullam?F Lorem
          ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod
          tempor incididunt ut lab, Reiciendis optio cumque assumenda. Ut enim
          ad ex eu fugiat nulla pariatur omnis volunptas excepturi est vel
          nobis, officilis saepe. Molestias voluntatibus harum ullam?F Lorem
          ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod
          tempor incididunt ut lab, Reiciendis optio cumque assumenda. Ut enim
          ad ex eu fugiat nulla pariatur omnis volunptas excepturi est vel
          nobis, officilis saepe. Molestias voluntatibus harum ullam?F
        </p>
      </div>
    );
}